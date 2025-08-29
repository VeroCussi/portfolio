"use client";

import { useState } from "react";

type ContactFormProps = {
  locale: "en" | "fr" | "es";
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
    es: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: status === "loading" ? "Enviando…" : "Enviar mensaje",
      success: "¡Gracias! Te responderé pronto.",
      error: "Lo siento, algo salió mal. Por favor, inténtalo de nuevo.",
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
    } catch {
      setStatus("error");
      setError(t.error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border bg-theme border-theme px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-primary placeholder:text-muted"
          placeholder={t.name}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary">
          {t.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border bg-theme border-theme px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-primary placeholder:text-muted"
          placeholder={t.email}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="mt-1 w-full rounded-xl border bg-theme border-theme px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-primary placeholder:text-muted"
          placeholder={t.message}
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:opacity-60 bg-theme-secondary text-paper hover:bg-opacity-90 contact-button"
        >
          {t.submit}
        </button>
        <div id="form-status" className="text-sm">
          {status === "success" && <span className="text-green-500">{t.success}</span>}
          {status === "error" && <span className="text-red-500">{error}</span>}
        </div>
      </div>
    </form>
  );
}


