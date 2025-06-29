import jwt from "jsonwebtoken";
import { ResponseSchema } from "~/server/utils/response-schema";
import type { TokenPayload } from "~/types/tokens";

export default defineEventHandler(async (event) => {
  try {
    const jwtSecret = useRuntimeConfig(event).jwtSecret;
    if (!jwtSecret) {
      throw createError({
        statusCode: 500,
        statusMessage: "JWT_SECRET is not set",
      });
    }

    if (event.method === "POST") {
      const body = await readBody<{
        id: string;
      }>(event);
      const token = jwt.sign({ id: body.id }, jwtSecret as string, {
        expiresIn: "8h",
      });

      setCookie(event, "token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 8 * 60 * 60,
      });

      return new ResponseSchema(token, true, "Token created successfully");
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
