import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, contact, subject, message, _honey } = data;

    // Honeypot anti-spam check
    if (_honey) {
      return NextResponse.json({ success: true, filtered: true });
    }

    if (!name?.trim() || !contact?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract Origin and Referer from incoming request to comply with FormSubmit anti-bot checks
    const reqOrigin = request.headers.get('origin');
    const reqReferer = request.headers.get('referer');
    const siteUrl = reqOrigin && !reqOrigin.includes('localhost') ? reqOrigin : 'https://mostafaabedi.ir';
    const siteReferer = reqReferer && !reqReferer.includes('localhost') ? reqReferer : `${siteUrl}/`;

    const isEmail = contact.trim().includes('@');
    const senderEmail = isEmail ? contact.trim() : 'no-reply@mostafaabedi.ir';

    // Direct background dispatch to FormSubmit for mostafa.abedi554@gmail.com
    const response = await fetch('https://formsubmit.co/ajax/mostafa.abedi554@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Origin: siteUrl,
        Referer: siteReferer,
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      body: JSON.stringify({
        name: name.trim(),
        contact: contact.trim(),
        email: senderEmail,
        _replyto: senderEmail,
        subject: subject?.trim() || 'پیام جدید از وب‌سایت پورتفولیو',
        message: message.trim(),
        _subject: `[Portfolio Message] ${subject?.trim() || 'Inquiry'} - ${name.trim()}`,
        _template: 'table',
        _captcha: 'false',
        _url: siteUrl,
      }),
    });

    const json = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.warn('FormSubmit HTTP response error:', response.status, json);
      // Return 502 error so client-side fallback can trigger direct AJAX if desired
      return NextResponse.json(
        { success: false, error: json?.message || 'FormSubmit delivery error' },
        { status: 502 }
      );
    }

    const isActivationRequired =
      typeof json?.message === 'string' &&
      json.message.toLowerCase().includes('activation');

    return NextResponse.json({
      success: true,
      pendingActivation: isActivationRequired,
      message: json?.message || 'Sent successfully',
      data: json,
    });
  } catch (error) {
    console.error('API Contact route error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message || 'Server error' },
      { status: 500 }
    );
  }
}
