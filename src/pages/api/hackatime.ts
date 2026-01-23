import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  
  try {
    const res = await fetch(
      `https://hackatime.hackclub.com/api/v1/users/Lukas/stats?start_date=${today}`
    );

    const data = await res.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
