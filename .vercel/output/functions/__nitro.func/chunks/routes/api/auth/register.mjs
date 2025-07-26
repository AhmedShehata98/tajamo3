import { d as defineEventHandler, r as readBody, c as createError, b as auth, s as setCookie, R as ResponseSchema } from '../../../_/nitro.mjs';
import 'jsonwebtoken';
import '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const register = defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody(event);
      if (Object.keys(body).length < 3) {
        throw createError({
          statusCode: 400,
          statusMessage: "Missing required fields phone, first_name, last_name"
        });
      }
      const { userId, phone, token } = await auth.register(body);
      setCookie(event, "token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 8
      });
      return new ResponseSchema(
        {
          userId,
          phone
        },
        true,
        "User registered successfully"
      );
    }
    throw createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Internal server error"
    });
  }
});

export { register as default };
//# sourceMappingURL=register.mjs.map
