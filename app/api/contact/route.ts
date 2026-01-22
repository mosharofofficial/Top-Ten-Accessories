// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Create transporter - Configure with your email service
    // For Gmail, you need to enable "App Passwords" in your Google Account
    const transporter = nodemailer.createTransport({
      service: "gmail", // or 'smtp.gmail.com'
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your app password
      },
    });

    // Alternative: Using custom SMTP (e.g., for cPanel hosting)
    // const transporter = nodemailer.createTransporter({
    //   host: process.env.SMTP_HOST, // e.g., 'mail.yourdomain.com'
    //   port: Number(process.env.SMTP_PORT) || 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    // Email to company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "zillur@toptenaccessories.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #38B980; border-bottom: 2px solid #38B980; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <p style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${message}
              </p>
            </div>
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the Top Ten Accessories contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
