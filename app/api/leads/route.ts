import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, industry, companySize } = body;
    if (!name || !email || !industry || !companySize) {
      return NextResponse.json(
        { error: 'Bad Request', message: 'Missing required fields: name, email, industry, and companySize are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.WEB_LEADS_API_KEY || 'xcorp_app_234@32#2abasdfrlnou';

    const response = await fetch('https://leads.xperc.com/api/leads/web', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        name,
        email,
        industry,
        companySize,
        company: body.company || undefined,
        jobTitle: body.jobTitle || undefined,
        challenge: body.challenge || undefined,
        preferMeetingDate: body.preferMeetingDate || undefined,
        preferMeetingTime: body.preferMeetingTime || undefined,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data.error || 'Bad Request',
          message: data.message || 'Failed to register lead.',
          details: data.details
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    console.error('Error proxying lead registration:', error);
    return NextResponse.json(
      { error: 'Server Error', message: error.message || 'Internal server error occurred.' },
      { status: 500 }
    );
  }
}
