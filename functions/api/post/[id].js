const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequestOptions() {
  return new Response(null, {
    headers: corsHeaders,
  });
}

export async function onRequestGet(context) {
  const { params, env } = context;

  try {
    // Get the id from the URL parameters
    const { id } = params;

    // Fetch data from KV storage
    const data = await env.PICKER_KV.get(id);

    if (!data) {
      return new Response(JSON.stringify({ error: "List not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    }

    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error fetching list:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch list",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
}
