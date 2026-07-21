"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const sessionTypes = ["Portrait", "Wedding", "Editorial & brand", "Something else"];

interface FormState {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  date: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  sessionType: sessionTypes[0],
  date: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-white/70 bg-white/55 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/70 outline-none transition focus:border-sky-400 focus:bg-white/80";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Let us know what to call you.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Tell us a little about the session.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Simulated submission — wire this up to your email service or form
    // endpoint of choice (Resend, Formspree, a Next.js route handler, etc).
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-sky-600" strokeWidth={1.5} />
        <h3 className="font-display text-xl text-ink-900">Message sent</h3>
        <p className="max-w-xs text-sm text-ink-700">
          Thanks, {form.name.split(" ")[0]}. We&apos;ll reply within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-2 text-sm font-medium text-sky-700 hover:text-sky-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-700">
            Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={update("name")}
            className={inputClasses}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className={inputClasses}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-ink-700">
            Phone <span className="text-ink-500">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputClasses}
            placeholder="+91 00000 00000"
          />
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-xs font-medium text-ink-700">
            Preferred date <span className="text-ink-500">(optional)</span>
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={update("date")}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="sessionType" className="mb-1.5 block text-xs font-medium text-ink-700">
          Session type
        </label>
        <select
          id="sessionType"
          value={form.sessionType}
          onChange={update("sessionType")}
          className={inputClasses}
        >
          {sessionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-700">
          Message
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          rows={4}
          className={inputClasses}
          placeholder="Tell us about the day, the people, or the brand..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-sky-500 to-sky-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_32px_-14px_rgba(46,134,190,0.75)] transition hover:from-sky-400 hover:to-sky-500 disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
