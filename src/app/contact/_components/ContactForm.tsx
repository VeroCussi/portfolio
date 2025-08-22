"use client";

import { useState } from "react";

type ContactFormProps = {
  locale: "en" | "fr";
};

export default function ContactForm({ locale }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const t = {
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: status === "loading" ? "Sending…" : "Send message",
      success: "Thanks! I'll get back to you soon.",
      error: "Sorry, something went wrong. Please try again.",
    },
    fr: {
      name: "Nom",
      email: "Email",
      message: "Message",
      submit: status === "loading" ? "Envoi…" : "Envoyer",
      success: "Merci ! Je vous répondrai rapidement.",
      error: "Désolé, une erreur s'est produite. Réessayez.",
    },
  }[locale];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(t.error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="block text-sm font-medium" style={{ color: 'var(--ink)' }}>
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          style={{
            borderColor: 'var(--grid)',
            backgroundColor: 'var(--paper)',
            color: 'var(--ink)'
          }}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium" style={{ color: 'var(--ink)' }}>
          {t.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          style={{
            borderColor: 'var(--grid)',
            backgroundColor: 'var(--paper)',
            color: 'var(--ink)'
          }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium" style={{ color: 'var(--ink)' }}>
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          style={{
            borderColor: 'var(--grid)',
            backgroundColor: 'var(--paper)',
            color: 'var(--ink)'
          }}
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:opacity-60"
          style={{
            backgroundColor: 'var(--ink-2)',
            color: 'var(--paper)'
          }}
        >
          {t.submit}
        </button>
        <div id="form-status" className="text-sm">
          {status === "success" && <span style={{ color: 'rgb(34, 197, 94)' }}>{t.success}</span>}
          {status === "error" && <span style={{ color: 'rgb(239, 68, 68)' }}>{error}</span>}
        </div>
      </div>
    </form>
  );
}


