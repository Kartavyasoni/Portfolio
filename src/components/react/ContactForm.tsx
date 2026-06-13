import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  'w-full rounded-lg border border-border bg-surface-2/60 px-4 py-3 text-sm text-text placeholder:text-faint transition-colors focus:border-accent focus:outline-none';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const validate = (form: HTMLFormElement): string | null => {
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();
    if (!name) return 'Please enter your name.';
    if (!EMAIL_RE.test(email)) return 'Please enter a valid email address.';
    if (message.length < 10) return 'Message must be at least 10 characters.';
    return null;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validationError = validate(form);
    if (validationError) {
      setStatus('error');
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError('');

    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value, // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(json.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-[var(--radius-card)] border border-accent/30 bg-accent/5 p-10 text-center"
      >
        <span className="grid size-14 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <div>
          <h3 className="text-xl font-semibold text-text">Message sent</h3>
          <p className="mt-2 text-sm text-muted">
            Thanks for reaching out — I’ll get back to you soon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm text-accent transition-colors hover:text-accent-hover"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot — visually hidden, ignored by humans */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
            Name
          </label>
          <input id="name" name="name" type="text" required maxLength={100} placeholder="Your name" className={fieldBase} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldBase} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} maxLength={5000} placeholder="Tell me about the problem you’re solving…" className={`${fieldBase} resize-y`} />
      </div>

      <AnimatePresence>
        {status === 'error' && error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group/btn mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-accent-contrast shadow-[0_8px_30px_-8px_var(--glow)] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_10px_40px_-6px_var(--glow)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-accent-contrast/40 border-t-accent-contrast" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
