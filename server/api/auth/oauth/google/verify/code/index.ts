import { OAuth2Client } from "google-auth-library";

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();

    if (event.method === "POST") {
      const { code } = await readBody(event);
      if (!code) {
        return createError({
          statusCode: 400,
          statusMessage: "Authorization code is required",
        });
      }

      const client = new OAuth2Client(
        config.google.clientId,
        config.google.clientSecret,
        config.google.redirectUri
      );
      const result = await client.getToken(code as string);
      client.setCredentials(result.tokens);

      return result.tokens;
    }
  } catch (error) {
    console.error("Error in Google OAuth handler:", error);
    return createError({
      statusCode:
        error instanceof Error && error.message.includes("configuration")
          ? 500
          : 401,
      statusMessage:
        error instanceof Error ? error.message : "Authentication failed",
    });
  }
});
