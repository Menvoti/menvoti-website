import { MENVOTI_SYSTEM_PROMPT } from '@/prompts/systemPrompt';
import { saveLead, type LeadInsert } from '@/lib/supabase';

// Mark as dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

// ── Helpers ───────────────────────────────────────────────────────────────────

async function getOpenAIClient() {
  const { OpenAI } = await import('openai');
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key not configured');
  }
  return new OpenAI({ apiKey });
}

/**
 * Extracts the [LEAD_SAVE]{...}[/LEAD_SAVE] block from the AI response.
 * Returns the parsed lead data and the cleaned message text.
 */
function extractLeadSave(text: string): {
  lead: LeadInsert | null;
  cleanText: string;
} {
  const pattern = /\[LEAD_SAVE\]([\s\S]*?)\[\/LEAD_SAVE\]/;
  const match = text.match(pattern);

  if (!match) {
    return { lead: null, cleanText: text };
  }

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

    // Strip the marker block from the message shown to the user
    const cleanText = text.replace(pattern, '').trim();
    return { lead, cleanText };
  } catch {
    // If JSON is malformed, still strip the block and continue without saving
    const cleanText = text.replace(pattern, '').trim();
    return { lead: null, cleanText };
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

    // Detect and process lead confirmation marker
    const { lead, cleanText } = extractLeadSave(rawContent);

    if (lead) {
      try {
        await saveLead(lead);
      } catch (dbError) {
        // Log but don't fail the request – user still sees the confirmation message
        console.error('Supabase lead save error:', dbError);
      }
    }

    return new Response(
      JSON.stringify({ role: 'assistant', content: cleanText }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Chat API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing your request',
        details: errorMessage,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
