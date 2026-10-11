const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();

    const {
      name,
      email,
      brand,
      website,
      instagram,
      product_category,
      project_type,
      budget,
      timeline,
      message,
    } = body;

    const emailSubject = "NEW ZENEX LABS PROJECT INQUIRY";
    const emailBody = [
      `Name: ${name || ""}`,
      `Email: ${email || ""}`,
      `Brand: ${brand || ""}`,
      `Website: ${website || ""}`,
      `Instagram: ${instagram || ""}`,
      `Product: ${product_category || ""}`,
      `Project Type: ${project_type || ""}`,
      `Budget: ${budget || ""}`,
      `Timeline: ${timeline || ""}`,
      `Message: ${message || ""}`,
    ].join("\n");

    // If Resend API key is configured, send email notification
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const notifyEmail = Deno.env.get("ZENIX_NOTIFY_EMAIL") ||
      "contact@zenexlabs.com";

    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Zenex Labs <noreply@zenexlabs.com>",
          to: [notifyEmail],
          subject: emailSubject,
          text: emailBody,
        }),
      });

      if (!resendResponse.ok) {
        console.error("Resend API error:", await resendResponse.text());
      }
    } else {
      console.log("Email notification (no Resend key configured):");
      console.log(emailSubject);
      console.log(emailBody);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("Error processing inquiry notification:", err);
    return new Response(
      JSON.stringify({ error: "Failed to process notification" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
