import { d as defineEventHandler, a as useRuntimeConfig, c as createError, r as readBody, s as setCookie, R as ResponseSchema } from '../../../_/nitro.mjs';
import jwt from 'jsonwebtoken';
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

const index = defineEventHandler(async (event) => {
  try {
    const jwtSecret = useRuntimeConfig(event).jwtSecret;
    if (!jwtSecret) {
      throw createError({
        statusCode: 500,
        statusMessage: "JWT_SECRET is not set"
      });
    }
    if (event.method === "POST") {
      const body = await readBody(event);
      const token = jwt.sign({ id: body.id }, jwtSecret, {
        expiresIn: "8h"
      });
      setCookie(event, "token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 8 * 60 * 60
      });
      return new ResponseSchema(token, true, "Token created successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
