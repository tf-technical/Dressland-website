import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { 
      name, 
      email, 
      phone, 
      city, 
      company, 
      gst, 
      message, 
      products 
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dresslanduniforms@gmail.com", 
        pass: process.env.EMAIL_PASSWORD,  
      },
    });

    // Format products for email
    const productsList = products && products.length > 0 
      ? products.map(product => `${product.name} (Qty: ${product.quantity})`).join('<br>')
      : 'No products selected';

    // Admin Email Template
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1c1c57; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #1c1c57; }
          .products-section { background: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Website Enquiry</h1>
            <p>You have received a new enquiry from Dressland website</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="field-label">Name:</span> ${name}
            </div>
            <div class="field">
              <span class="field-label">Email:</span> ${email}
            </div>
            <div class="field">
              <span class="field-label">Phone:</span> ${phone}
            </div>
            <div class="field">
              <span class="field-label">City:</span> ${city}
            </div>
            <div class="field">
              <span class="field-label">Company:</span> ${company || 'Not provided'}
            </div>
            <div class="field">
              <span class="field-label">GST Number:</span> ${gst || 'Not provided'}
            </div>
            <div class="products-section">
              <div class="field-label" style="margin-bottom: 10px;">Selected Products:</div>
              ${productsList}
            </div>
            <div class="field">
              <span class="field-label">Message:</span><br>
              ${message || 'No message provided'}
            </div>
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
              <p>Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Customer Email Template
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1c1c57; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .thank-you { font-size: 18px; color: #1c1c57; margin-bottom: 20px; }
          .details { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
          .detail-item { margin-bottom: 10px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; }
          .contact-info { background: #e8f4ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Dressland</h1>
            <p>Your Trusted Partner for Quality Apparel</p>
          </div>
          <div class="content">
            <div class="thank-you">
              <strong>Thank you for your enquiry, ${name}!</strong>
            </div>
            
            <p>We have received your enquiry and our team will get back to you within 24 hours.</p>
            
            <div class="details">
              <h3 style="color: #1c1c57; margin-bottom: 15px;">Your Enquiry Details:</h3>
              <div class="detail-item"><strong>Name:</strong> ${name}</div>
              <div class="detail-item"><strong>Email:</strong> ${email}</div>
              <div class="detail-item"><strong>Phone:</strong> ${phone}</div>
              <div class="detail-item"><strong>City:</strong> ${city}</div>
              ${company ? `<div class="detail-item"><strong>Company:</strong> ${company}</div>` : ''}
              ${products && products.length > 0 ? `
                <div class="detail-item">
                  <strong>Products Interested:</strong><br>
                  ${products.map(product => `• ${product.name} (Quantity: ${product.quantity})`).join('<br>')}
                </div>
              ` : ''}
              ${message ? `<div class="detail-item"><strong>Your Message:</strong> ${message}</div>` : ''}
            </div>

            <div class="contact-info">
              <h4 style="margin-top: 0; color: #1c1c57;">What happens next?</h4>
              <ul style="margin-bottom: 0;">
                <li>Our sales representative will contact you shortly</li>
                <li>We'll provide you with detailed product information and pricing</li>
                <li>Get answers to all your questions about our products</li>
              </ul>
            </div>

            <div class="footer">
              <p><strong>Dressland Team</strong></p>
              <p>Email: business@dresslanduniforms.in</p>
              <p>We look forward to serving you!</p>
              <p style="font-size: 12px; margin-top: 20px;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"Dressland Website" <dresslanduniforms@gmail.com>`,
      to: "business@dresslanduniforms.in",
      subject: `New Enquiry from ${name} - Dressland`,
      html: adminEmailHtml,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"Dressland" <dresslanduniforms@gmail.com`,
      to: email,
      subject: "Thank you for your enquiry - Dressland",
      html: customerEmailHtml,
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Enquiry submitted successfully"
      }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send enquiry. Please try again later." 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}