import jwt from "jsonwebtoken";
import { ResponseSchema } from "~/server/utils/response-schema";

export default defineEventHandler(async (event) => {
  const jwtSecret = useRuntimeConfig(event).jwtSecret;
  const cookies = parseCookies(event);
  try {
    if (event.method === "GET") {
      const token = cookies.token;
      if (!token) {
        throw createError({
          statusCode: 401,
          statusMessage: "Unauthorized",
        });
      }
      const decoded = jwt.verify(token, jwtSecret);

      return new ResponseSchema(decoded, true, "Token verified successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "internal server error",
    });
  }
});
