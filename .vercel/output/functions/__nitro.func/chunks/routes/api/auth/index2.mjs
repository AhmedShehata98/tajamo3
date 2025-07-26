import { d as defineEventHandler, a as useRuntimeConfig, e as parseCookies, c as createError, R as ResponseSchema } from '../../../_/nitro.mjs';
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
  const jwtSecret = useRuntimeConfig(event).jwtSecret;
  const cookies = parseCookies(event);
  try {
    if (event.method === "GET") {
      const token = cookies.token;
      if (!token) {
        throw createError({
          statusCode: 401,
          statusMessage: "Unauthorized"
        });
      }
      const decoded = jwt.verify(token, jwtSecret);
      return new ResponseSchema(decoded, true, "Token verified successfully");
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
