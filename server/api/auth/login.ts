import auth from "~/server/utils/auth";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody(event);
      const response = await auth.login(body.phone);
      return new ResponseSchema(
        response,
        true,
        "OTP sent to your phone number"
      );
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
