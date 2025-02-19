import type { APIRoute } from 'astro';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  organizationName: z.string().min(1, "Organization name is required"),
  countryOfProgram: z.string().min(1, "Country is required"),
  interestedInTalkingBooks: z.enum(["yes", "no"]),
  message: z.string().min(1, "Message is required"),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse and validate the incoming data
    const data = await request.json();
    const validatedData = contactSchema.parse(data);
    
    // Forward the validated data to Payload CMS
    const response = await fetch(`${import.meta.env.PUBLIC_PAYLOAD_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Payload CMS');
    }

    // Return success response
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    
    // Return error response
    return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}