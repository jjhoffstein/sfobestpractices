import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data on backend:', formData);

    // Basic server-side validation
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // *** IMPORTANT ***
    // Replace with your actual Formspree endpoint URL
    // For security, it's highly recommended to use an environment variable
    // e.g., process.env.FORMSPREE_ENDPOINT
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT; // <-- Replace with your actual env variable name if different

    if (!formspreeEndpoint) {
         console.error('FORMSPREE_ENDPOINT environment variable is not set.');
         // Return a generic error to the client for security
        return NextResponse.json({ message: 'Failed to send message. Server configuration error.' }, { status: 500 });
    }

    // Send data to Formspree
    const formspreeResponse = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check Formspree response
    if (formspreeResponse.ok) {
      // Formspree indicates success
      // TODO: Add analytics tracking for successful form submission (server-side)
      // This would typically involve sending an event to an analytics service from the backend
      // For this project, we are tracking completion client-side after receiving this success response.

      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } else {
      // Formspree returned an error
      const errorData = await formspreeResponse.json();
      console.error('Formspree submission failed:', formspreeResponse.status, errorData);
       // Return a generic error to the client for security
      return NextResponse.json({ message: 'Failed to send message. Please try again later.' }, { status: formspreeResponse.status });
    }

  } catch (error) {
    console.error('Error processing contact form submission:', error);
     // Return a generic error to the client for security
    return NextResponse.json({ message: 'Failed to send message. An unexpected error occurred.' }, { status: 500 });
  }
} 