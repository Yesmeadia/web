import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, role, location, experience, message } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone are required fields." },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter if environment variables are set
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const safeName = String(name).trim().replace(/[\r\n"]/g, "");
        const safeEmail = String(email).trim().replace(/[\r\n]/g, "");

        const mailOptions = {
          from: `"YES Careers Portal" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
          replyTo: `"${safeName}" <${safeEmail}>`,
          subject: `New Career Application: ${safeName} (${role || "General"})`,
          html: `
            <h2>New Career Application Received</h2>
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Area of Interest / Role:</strong> ${role || "Not specified"}</p>
            <p><strong>Preferred State / Region:</strong> ${location || "Any"}</p>
            <p><strong>Experience Level:</strong> ${experience || "Not specified"}</p>
            <p><strong>Portfolio / Profile / Message:</strong><br>${message || "No additional message provided."}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error("Nodemailer Error (Careers):", mailError);
        // Continue and return success to the applicant
      }
    } else {
      console.log("Career Application Received (No SMTP configured):", {
        name,
        email,
        phone,
        role,
        location,
        experience,
        message,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your application has been received successfully! Our HR team will review your profile.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    let message = "Unknown error occurred";
    if (error instanceof Error) {
      message = error.message;
    }

    console.error("Careers API Error:", message);
    return NextResponse.json(
      { success: false, message: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
