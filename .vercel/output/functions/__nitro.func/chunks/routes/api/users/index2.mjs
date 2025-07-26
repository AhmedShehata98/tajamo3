import { d as defineEventHandler, e as parseCookies, a as useRuntimeConfig, c as createError, w as users, R as ResponseSchema } from '../../../_/nitro.mjs';
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
    const cookies = parseCookies(event);
    const jwtSecret = useRuntimeConfig(event).jwtSecret;
    if (event.method === "GET") {
      if (!cookies.token) {
        return createError({
          statusCode: 401,
          statusMessage: "Unauthorized"
        });
      }
      const decoded = jwt.verify(cookies.token, jwtSecret);
      if (!("id" in decoded)) {
        return createError({
          statusCode: 400,
          statusMessage: "cannot get user id from token"
        });
      }
      const user = await users.getUserById(decoded.id);
      return new ResponseSchema(user, true, "User fetched successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index2.mjs.map
