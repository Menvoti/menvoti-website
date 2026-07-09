import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = (await request.json()) as {
    vorname?: string;
    nachname?: string;
    telefon?: string;
    email?: string;
    dienstleistung?: string;
    nachricht?: string;
  };

  const vorname = body.vorname?.trim() ?? '';
  const nachname = body.nachname?.trim() ?? '';
  const telefon = body.telefon?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const dienstleistung = body.dienstleistung?.trim() ?? '';
  const nachricht = body.nachricht?.trim() ?? '';

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!vorname || !nachname || !telefon || !email || !dienstleistung || !nachricht || telefon.length < 6 || nachricht.length < 10 || !emailPattern.test(email)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const subject = `Neue Anfrage: ${dienstleistung} - ${vorname} ${nachname}`;

  try {
    await resend.emails.send({
      from: 'info@menvoti.de',
      to: 'info@menvoti.de',
      replyTo: email,
      subject,
      html: `
        <h2>Neue Anfrage über die Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(vorname)} ${escapeHtml(nachname)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Dienstleistung:</strong> ${escapeHtml(dienstleistung)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(nachricht).replace(/\n/g, '<br />')}</p>
      `,
    });

    await resend.emails.send({
      from: 'info@menvoti.de',
      to: email,
      subject: 'Vielen Dank für Ihre Anfrage | MENVOTI',
      html: `
        <div style="margin:0;padding:0;background:#ffffff;font-family:Arial,sans-serif;color:#111111;">
          <div style="max-width:640px;margin:0 auto;border:1px solid #eaeaea;">
            <div style="background:#000000;padding:20px 28px;">
              <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:0.08em;">MENVOTI</p>
            </div>

            <div style="padding:32px 28px;">
              <h1 style="margin:0 0 16px 0;font-size:32px;line-height:1.2;color:#111111;">Vielen Dank für Ihre Anfrage!</h1>
              <p style="margin:0 0 24px 0;font-size:16px;line-height:1.7;color:#333333;">
                Wir haben Ihre Nachricht erfolgreich erhalten und melden uns innerhalb von 24 Stunden persoenlich bei Ihnen.
              </p>

              <div style="border:1px solid #e5e5e5;border-radius:12px;padding:18px 16px;background:#fafafa;">
                <p style="margin:0 0 10px 0;font-size:14px;"><strong>Vorname:</strong> ${escapeHtml(vorname)}</p>
                <p style="margin:0 0 10px 0;font-size:14px;"><strong>Nachname:</strong> ${escapeHtml(nachname)}</p>
                <p style="margin:0 0 10px 0;font-size:14px;"><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
                <p style="margin:0;font-size:14px;"><strong>Dienstleistung:</strong> ${escapeHtml(dienstleistung)}</p>
              </div>

              <div style="margin-top:28px;">
                <a href="https://menvoti.de" style="display:inline-block;background:#000000;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-size:14px;font-weight:600;">
                  Website besuchen
                </a>
              </div>
            </div>

            <div style="padding:22px 28px;border-top:1px solid #eaeaea;background:#ffffff;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#111111;">MENVOTI</p>
              <p style="margin:6px 0 0 0;font-size:14px;color:#444444;">Premium Home Services</p>
              <p style="margin:6px 0 0 0;font-size:14px;color:#444444;">info@menvoti.de</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Resend send failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}