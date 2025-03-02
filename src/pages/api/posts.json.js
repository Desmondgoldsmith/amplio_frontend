export async function get({ request }) {
    const url = new URL(request.url);
    const params = url.searchParams;
    
    const PAYLOAD_URL = import.meta.env.PUBLIC_PAYLOAD_URL;
    
    // Fix the URL to use PAYLOAD_URL
    const response = await fetch(`${PAYLOAD_URL}/api/posts?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
        
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          // Add CORS headers for the response
          'Access-Control-Allow-Origin': request.headers.get('origin') || 'http://localhost:4321',
          'Access-Control-Allow-Credentials': 'true',
        }
      });
    }
    
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Add CORS headers for the response
        'Access-Control-Allow-Origin': request.headers.get('origin') || 'http://localhost:4321',
        'Access-Control-Allow-Credentials': 'true',
      }
    });
}