import jwt from "jsonwebtoken";
import { ResponseSchema } from "~/server/utils/response-schema";

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
        contact_source: string;
      }>(event);
      console.log("==========================");
      console.log("body:", body);

      const user = await users.getUserByContactSource(body.contact_source);
      console.log("user", user);
      if (user === null) {
        throw createError({
          statusCode: 404,
          statusMessage: "User not found",
        });
      }

      const token = jwt.sign({ id: user.id }, jwtSecret as string, {
        expiresIn: "24h",
      });
      console.log("token:", token);
      setCookie(event, "token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60,
      });

      return new ResponseSchema(token, true, "Token created successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    console.log(error);
    console.log("========================");
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
