import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { Resend } from 'resend';
import { site } from '@/lib/site';

// Run as an on-demand serverless function, not a static file.
export const prerender = false;

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  // Honeypot: real users never fill this hidden field.
  company?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

function validate(body: Payload): { ok: true; data: { name: string; email: string; message: string } } | { ok: false; error: string } {
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length > 100) return { ok: false, error: 'Please enter your name.' };
  if (!EMAIL_RE.test(email) || email.length > 200)
    return { ok: false, error: 'Please enter a valid email address.' };
  if (message.length < 10 || message.length > 5000)
    return { ok: false, error: 'Message must be between 10 and 5000 characters.' };

  return { ok: true, data: { name, email, message } };
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );

export const POST: APIRoute = async ({ request }) => {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return json({ ok: true });
  }

  const result = validate(body);
  if (!result.ok) return json({ ok: false, error: result.error }, 400);

  const apiKey = getSecret('RESEND_API_KEY');
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not configured.');
    return json(
      { ok: false, error: 'Email service is not configured yet. Please email me directly.' },
      503,
    );
  }

  const from = getSecret('CONTACT_FROM_EMAIL') || 'onboarding@resend.dev';
  const to = getSecret('CONTACT_TO_EMAIL') || site.email;
  const { name, email, message } = result.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${site.name} Portfolio <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New message from ${name} — portfolio contact`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0f172a">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 12px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <div style="white-space:pre-wrap;padding:12px;border-left:3px solid #2e7cf6;background:#f1f5f9;border-radius:6px">${escapeHtml(message)}</div>
        </div>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return json({ ok: false, error: 'Failed to send. Please try again later.' }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return json({ ok: false, error: 'Something went wrong. Please try again.' }, 500);
  }
};
