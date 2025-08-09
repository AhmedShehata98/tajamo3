import jwt from "jsonwebtoken";
import { TokenPayload } from "~/types/tokens";

export default defineEventHandler(async (event) => {
  try {
    const authorizationHeader = getHeader(event, "Authorization");
    const jwtSecret = useRuntimeConfig(event).jwtSecret;

    if (event.method === "GET") {
      const [type, token] = authorizationHeader?.split(" ") || [];

      if (!authorizationHeader || type !== "Bearer" || !token) {
        return createError({
          statusCode: 401,
          statusMessage:
            "Authentication credentials were not provided or are invalid",
        });
      }
      const decoded = jwt.verify(token, jwtSecret) as TokenPayload;

      if (!("id" in decoded)) {
        return createError({
          statusCode: 400,
          statusMessage: "cannot get user from token",
        });
      }
      const user = await users.getUserById(decoded.id);
      return new ResponseSchema(user, true, "User fetched successfully");
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
