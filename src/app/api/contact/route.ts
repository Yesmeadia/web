import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Periodically prune expired entries
  if (rateLimitMap.size > 500) {
    for (const [key, entry] of rateLimitMap.entries()) {
      if (now >= entry.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }

  const existing = rateLimitMap.get(ip);
  if (!existing || now >= existing.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// POST handler for contact form
export async function POST(req: Request) {
  try {
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid submission data" },
        { status: 400 }
      );
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const trimmedName = name.trim().replace(/[\r\n]/g, "");
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (
      trimmedName.length > 100 ||
      trimmedEmail.length > 150 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) ||
      trimmedMessage.length > 2000
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid submission data" },
        { status: 400 }
      );
    }

    const cleanName = escapeHtml(trimmedName);
    const cleanEmail = escapeHtml(trimmedEmail);
    const cleanMessage = escapeHtml(trimmedMessage);

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // set true if using 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // Your receiving email
      subject: `New Contact Form Submission from ${cleanName}`,
      text: `New Contact Message\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage:\n${trimmedMessage}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Message:</strong><br>${cleanMessage.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    }

    console.error("Mail Error:", message);

    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
