import { Resend } from 'resend';

// Route enquiry types to the right inbox
const ENQUIRY_INBOX = {
  general: process.env.CONTACT_EMAIL_TO || 'support@arlinks.com',
  booking: process.env.CONTACT_EMAIL_TO || 'support@arlinks.com',
  partnership: 'partners@arlink28.com',
  career: 'careers@arlink28.com',
  investor: 'investors@arlink28.com',
};

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { first_name, last_name, email, phone, subject, message, enquiry_type } = body;

    if (!first_name || !last_name || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const toAddress = ENQUIRY_INBOX[enquiry_type] || ENQUIRY_INBOX.general;

    await resend.emails.send({
      from: 'ARLinks Website <noreply@arlink28.com>',
      to: toAddress,
      replyTo: email,
      subject: `[${(enquiry_type || 'general').toUpperCase()}] ${subject}`,
      html: `
        <h2>New ${enquiry_type || 'general'} enquiry from the ARLinks website</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      `,
    });

    await resend.emails.send({
      from: 'ARLinks <noreply@arlink28.com>',
      to: email,
      subject: 'We received your message — ARLinks',
      html: `
        <p>Hi ${first_name},</p>
        <p>Thanks for reaching out to ARLinks. We've received your message and our team will respond within 24 hours.</p>
        <p>— The ARLinks Team</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return Response.json(
      { error: 'Something went wrong sending your message. Please try again.' },
      { status: 500 }
    );
  }
}