import jwt from "jsonwebtoken";
import { TokenPayload } from "~/types/tokens";
import registrations from "~/server/utils/registrations";
import { ResponseSchema } from "~/server/utils/response-schema";

export default defineEventHandler(async (event) => {
  try {
    const jwtSecret = useRuntimeConfig().jwtSecret;
    const cookies = parseCookies(event);

    const token = cookies.token;
    if (!token) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, jwtSecret as string) as TokenPayload;

    if (!jwtSecret) {
      return createError({
        statusCode: 500,
        statusMessage: "JWT secret is not set",
      });
    }

    if (event.method === "POST") {
      const body = await readBody(event);
      const data = await registrations.createUserRegistration({
        event_id: body.event_id,
        user_id: decoded.id,
      });

      if (!data) {
        return createError({
          statusCode: 404,
          statusMessage: "Registration failed",
        });
      }

      return new ResponseSchema(data, true, "User registered successfully");
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
      message: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode:
        error instanceof Error && "statusCode" in error
          ? (error as any).statusCode
          : 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
      message: error instanceof Error ? error.message : "Internal server error",
    });
  }
});
