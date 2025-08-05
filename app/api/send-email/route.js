import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // Send email to company (Dressland CEO)
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_ADDRESS}>`,
      to: "dresslandwebsite@gmail.com", 
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation email to visitor
    await transporter.sendMail({
      from: `"Dressland" <${process.env.EMAIL_ADDRESS}>`,
      to: email,
      subject: "Thank you for your enquiry!",
      html: `
        <p>Hello ${name},</p>
        <p>Thank you for contacting Dressland. We have received your enquiry and will get back to you shortly.</p>
        <br>
        <p>Best regards,<br>Dressland Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
