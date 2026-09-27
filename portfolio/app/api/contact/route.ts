import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Silent drop for automated spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message dispatched" });
    }

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email?.trim() || "")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = typeof subject === "string" && subject.trim().length > 0
      ? subject.trim()
      : "Portfolio Contact Inquiry";
    const cleanMessage = message.trim();

    // 2. Read environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const targetRecipient = process.env.CONTACT_RECIPIENT_EMAIL || "guruprasadhraghavan@gmail.com";
    const emailFrom = process.env.EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured in .env.local" },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const emailSubject = `[Portfolio Contact] ${cleanSubject} — from ${cleanName}`;

    const textContent = `
New message from portfolio contact form:
------------------------------------------------
Visitor Name:  ${cleanName}
Visitor Email: ${cleanEmail}
Subject:       ${cleanSubject}
Date:          ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST

Message:
${cleanMessage}
------------------------------------------------
Reply directly to this email to respond to ${cleanName} at ${cleanEmail}.
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0b0e14; color: #f3f4f6; padding: 24px; }
    .card { background-color: #121620; border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; }
    .badge { display: inline-block; background-color: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; margin-bottom: 12px; }
    .title { font-size: 20px; font-weight: 700; color: #ffffff; margin: 0 0 20px 0; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.05em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #f9fafb; }
    .value a { color: #fbbf24; text-decoration: none; }
    .message-box { background-color: #0b0e14; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 18px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #e5e7eb; white-space: pre-wrap; }
    .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 12px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Portfolio Transmission</div>
    <h1 class="title">New Message Received</h1>

    <div class="field">
      <div class="label">Visitor Name</div>
      <div class="value"><strong>${cleanName}</strong></div>
    </div>

    <div class="field">
      <div class="label">Email Address</div>
      <div class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></div>
    </div>

    <div class="field">
      <div class="label">Subject</div>
      <div class="value">${cleanSubject}</div>
    </div>

    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${cleanMessage}</div>
    </div>

    <div class="footer">
      Hit "Reply" in your email client to respond directly to ${cleanName} (${cleanEmail}).
    </div>
  </div>
</body>
</html>
    `.trim();

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [targetRecipient],
      replyTo: cleanEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Message successfully transmitted to developer inbox.",
      id: data?.id,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("Contact exception:", errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}