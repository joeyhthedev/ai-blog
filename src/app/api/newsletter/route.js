import "dotenv/config"; // Ensure environment variables are loaded
import fetch from "node-fetch"; // Import fetch for server-side requests

export async function POST(req) {
  console.log("✅ POST request received at /api/newsletter");

  try {
    const { email } = await req.json();
    console.log("📩 Email received:", email);

    if (!email || !email.includes("@")) {
      console.error("❌ Invalid email format");
      return new Response(JSON.stringify({ error: "Invalid email address." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("🚀 Sending email to Mailchimp (manual fetch)...");

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !audienceId || !serverPrefix) {
      console.error(
        "🚨 Missing Mailchimp credentials in environment variables."
      );
      return new Response(
        JSON.stringify({ success: false, error: "Server misconfiguration" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
            "base64"
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "pending",
        }),
      }
    );

    const data = await response.json();
    console.log("✅ Mailchimp Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error("🚨 Mailchimp API Error:", data);
      return new Response(JSON.stringify({ success: false, error: data }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, message: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🚨 Unexpected Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
