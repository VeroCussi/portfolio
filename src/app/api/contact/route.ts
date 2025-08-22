import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Server not configured (missing MAILERLITE_API_KEY)" },
        { status: 500 }
      );
    }

    const groupId = process.env.MAILERLITE_GROUP_ID;
    const messageFieldKey = process.env.MAILERLITE_MESSAGE_FIELD_KEY; // optional custom field key for message

    const apiBase = "https://connect.mailerlite.com/api";

    const payload: { email: string; fields: Record<string, string>; groups?: string[] } = {
      email,
      fields: {
        name,
      },
    };

    if (groupId) {
      (payload as any).groups = [groupId];
    }

    if (messageFieldKey) {
      payload.fields[messageFieldKey] = message;
    }

    const mlRes = await fetch(`${apiBase}/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      // Revalidate disabled: we want a fresh network call
      cache: "no-store",
    });

    if (!mlRes.ok) {
      if (mlRes.status === 409 || mlRes.status === 422) {
        // Already subscribed or validation error like "already exists" → treat as success
        return NextResponse.json({ ok: true });
      }
      const errorText = await mlRes.text();
      console.error("MailerLite API error:", mlRes.status, errorText);
      return NextResponse.json(
        { ok: false, error: "MailerLite request failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


