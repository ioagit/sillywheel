const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

async function handlePost(request, env) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.id || !data.name || !data.data) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Store directly in KV storage
    await env.PICKER_KV.put(
      data.id,
      JSON.stringify({
        id: data.id,
        name: data.name,
        des: data.des,
        data: data.data,
        site: data.site,
        created: new Date().toISOString(),
      })
    );

    return new Response(
      JSON.stringify({
        success: true,
        id: data.id,
        message: "List saved successfully",
      }),
      {
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error saving list:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to save list",
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

export function onRequestOptions() {
  return new Response(null, {
    headers: corsHeaders,
  });
}

export async function onRequestPost(context) {
  return handlePost(context.request, context.env);
}

export async function onRequestGet() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
      Allow: "POST, OPTIONS",
    },
  });
}
