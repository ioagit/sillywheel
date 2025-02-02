export async function onRequest(context) {
  const { request, params, env } = context;

  if (request.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    // Extract the id from the URL parameters
    const { id } = params;
    
    // Construct the target URL using the environment variable and the id
    const targetUrl = `${env.TARGET_API_URL}/api/data/${id}`;
    const apiKey = env.API_KEY;

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
