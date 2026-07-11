import { MENVOTI_SYSTEM_PROMPT } from '@/prompts/systemPrompt';
import { saveLead, type LeadInsert } from '@/lib/supabase';
import { Resend } from 'resend';

// Mark as dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

// ── Helpers ───────────────────────────────────────────────────────────────────

async function getOpenAIClient() {
  const { OpenAI } = await import('openai');
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OpenAI API key not configured');
  return new OpenAI({ apiKey });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Extracts [LEAD_SAVE]{...}[/LEAD_SAVE] from AI response.
 * Returns parsed lead data and cleaned message text.
 */
function extractLeadSave(text: string): { lead: LeadInsert | null; cleanText: string } {
  const pattern = /\[LEAD_SAVE\]([\s\S]*?)\[\/LEAD_SAVE\]/;
  const match = text.match(pattern);
  if (!match) return { lead: null, cleanText: text };

  try {
    const raw = JSON.parse(match[1].trim());
    const lead: LeadInsert = {
      first_name: String(raw.first_name ?? ''),
      last_name: String(raw.last_name ?? ''),
      phone: String(raw.phone ?? ''),
      email: String(raw.email ?? ''),
      service: String(raw.service ?? ''),
      city: String(raw.city ?? ''),
      address: String(raw.address ?? ''),
      appointment_date: String(raw.appointment_date ?? ''),
      appointment_time: String(raw.appointment_time ?? ''),
      description: String(raw.description ?? ''),
      status: 'new',
    };
    return { lead, cleanText: text.replace(pattern, '').trim() };
  } catch {
    return { lead: null, cleanText: text.replace(pattern, '').trim() };
  }
}

async function sendLeadEmails(lead: LeadInsert): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not configured — skipping email');
    return;
  }

  const resend = new Resend(apiKey);
  const fullName = `${escapeHtml(lead.first_name)} ${escapeHtml(lead.last_name)}`;

  // Internal notification to MENVOTI team
  await resend.emails.send({
    from: 'info@menvoti.de',
    to: 'info@menvoti.de',
    replyTo: lead.email,
    subject: `Neue KI-Anfrage: ${lead.service} – ${lead.first_name} ${lead.last_name}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#111;max-width:600px;margin:0 auto;">
        <div style="background:#000;padding:20px 28px;">
          <p style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:0.08em;">MENVOTI</p>
        </div>
        <div style="padding:32px 28px;border:1px solid #eaeaea;border-top:none;">
          <h2 style="margin:0 0 20px;font-size:22px;">Neue Anfrage über den KI-Assistenten</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#666;width:160px;">Leistung</td><td style="padding:8px 0;font-weight:600;">${escapeHtml(lead.service)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Name</td><td style="padding:8px 0;">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Telefon</td><td style="padding:8px 0;">${escapeHtml(lead.phone)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">E-Mail</td><td style="padding:8px 0;">${escapeHtml(lead.email)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Stadt</td><td style="padding:8px 0;">${escapeHtml(lead.city)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Adresse</td><td style="padding:8px 0;">${escapeHtml(lead.address)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Wunschdatum</td><td style="padding:8px 0;">${escapeHtml(lead.appointment_date)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Wunschuhrzeit</td><td style="padding:8px 0;">${escapeHtml(lead.appointment_time)}</td></tr>
            <tr><td style="padding:8px 0;color:#666;vertical-align:top;">Beschreibung</td><td style="padding:8px 0;">${escapeHtml(lead.description).replace(/\n/g, '<br/>')}</td></tr>
          </table>
        </div>
      </div>
    `,
  });

  // Confirmation email to customer
  if (lead.email) {
    await resend.emails.send({
      from: 'info@menvoti.de',
      to: lead.email,
      subject: 'Ihre Anfrage bei MENVOTI wurde aufgenommen',
      html: `
        <div style="font-family:Arial,sans-serif;color:#111;max-width:600px;margin:0 auto;">
          <div style="background:#000;padding:20px 28px;">
            <p style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:0.08em;">MENVOTI</p>
          </div>
          <div style="padding:32px 28px;border:1px solid #eaeaea;border-top:none;">
            <h1 style="margin:0 0 16px;font-size:28px;">Vielen Dank, ${escapeHtml(lead.first_name)}!</h1>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#333;">
              Ihre Anfrage ist bei uns eingegangen. Unser Team meldet sich schnellstmöglich telefonisch oder per E-Mail bei Ihnen.
            </p>
            <div style="border:1px solid #e5e5e5;border-radius:12px;padding:20px;background:#fafafa;font-size:14px;">
              <p style="margin:0 0 8px;"><strong>Leistung:</strong> ${escapeHtml(lead.service)}</p>
              <p style="margin:0 0 8px;"><strong>Adresse:</strong> ${escapeHtml(lead.address)}, ${escapeHtml(lead.city)}</p>
              <p style="margin:0 0 8px;"><strong>Wunschtermin:</strong> ${escapeHtml(lead.appointment_date)} um ${escapeHtml(lead.appointment_time)}</p>
              <p style="margin:0;"><strong>Beschreibung:</strong> ${escapeHtml(lead.description)}</p>
            </div>
            <p style="margin:24px 0 0;font-size:13px;color:#999;">
              Bei Fragen erreichen Sie uns unter info@menvoti.de oder +49 176 62792171.
            </p>
          </div>
        </div>
      `,
    });
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const openai = await getOpenAIClient();

    const formattedMessages = [
      { role: 'system' as const, content: MENVOTI_SYSTEM_PROMPT },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant' | 'system',
        content: msg.content,
      })),
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.95,
    });

    const rawContent =
      response.choices[0]?.message?.content ?? 'Ich konnte keine Antwort generieren.';

    const { lead, cleanText } = extractLeadSave(rawContent);

    if (lead) {
      // Run Supabase save and Resend email in parallel, never fail the request
      await Promise.allSettled([
        saveLead(lead).catch((e) => console.error('Supabase save error:', e)),
        sendLeadEmails(lead).catch((e) => console.error('Resend email error:', e)),
      ]);
    }

    return new Response(JSON.stringify({ role: 'assistant', content: cleanText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'An error occurred', details: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}

// (end of file)
