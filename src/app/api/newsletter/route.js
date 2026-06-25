import { Resend } from 'resend';

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!process.env.RESEND_AUDIENCE_ID) {
      return Response.json({ error: 'Newsletter is not configured yet.' }, { status: 500 });
    }

    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);

    if (err?.message?.toLowerCase().includes('already exists')) {
      return Response.json({ success: true, alreadySubscribed: true });
    }

    return Response.json(
      { error: 'Something went wrong subscribing. Please try again.' },
      { status: 500 }
    );
  }
}