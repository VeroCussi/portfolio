import { NextResponse } from "next/server";
import { Resend } from 'resend';

const API_BASE = "https://api.mailerlite.com/api/v2";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    
    if (!process.env.MAILERLITE_CLASSIC_API_KEY) {
      return NextResponse.json({ ok: false, error: "Missing MAILERLITE_CLASSIC_API_KEY" }, { status: 500 });
    }

    const groupId = process.env.MAILERLITE_GROUP_ID;
    const messageFieldKey = process.env.MAILERLITE_MESSAGE_FIELD_KEY;

    // Si tenemos groupId, añadimos el contacto directamente al grupo
    const url = groupId
      ? `${API_BASE}/groups/${groupId}/subscribers`
      : `${API_BASE}/subscribers`;

    const body: any = {
      email,
      name,
      ...(messageFieldKey ? { fields: { [messageFieldKey]: message } } : {}),
      ...(groupId ? { resubscribe: true, autoresponders: true, type: "active" } : {}),
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": process.env.MAILERLITE_CLASSIC_API_KEY as string,
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json().catch(() => ({}));

    // Si el suscriptor ya existe en el grupo, lo tratamos como éxito
    if (!resp.ok) {
      if (resp.status === 409 || resp.status === 422) {
        return NextResponse.json({ ok: true, message: "Subscriber already exists" });
      }
      return NextResponse.json(
        { ok: false, error: data?.error?.message || data?.message || "MailerLite Classic error", details: data },
        { status: resp.status }
      );
    }

    // ENVIAR NOTIFICACIÓN A TU EMAIL PERSONAL
    try {
      if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
        await resend.emails.send({
          from: 'Portfolio <noreply@tu-dominio.com>',
          to: [process.env.NOTIFICATION_EMAIL],
          subject: `Nuevo mensaje desde tu Portfolio - ${name}`,
          html: `
            <h2>Nuevo mensaje de contacto recibido</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>Mensaje enviado desde tu portfolio el ${new Date().toLocaleString('es-ES')}</em></p>
          `,
        });
        console.log('Notificación enviada a tu email personal');
      }
    } catch (emailError) {
      console.error('Error enviando notificación:', emailError);
      // No fallamos la petición principal si falla el email
    }

    return NextResponse.json({ ok: true, data });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}


