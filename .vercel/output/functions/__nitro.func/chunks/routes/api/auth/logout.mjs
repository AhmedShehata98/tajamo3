import { d as defineEventHandler, s as setCookie, R as ResponseSchema, c as createError } from '../../../_/nitro.mjs';
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

const logout = defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      setCookie(event, "token", "", {
        httpOnly: true,
        secure: true,
        maxAge: 0,
        path: "/"
      });
      return new ResponseSchema(null, true, "Logged out successfully");
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "internal server error"
    });
  }
});

export { logout as default };
//# sourceMappingURL=logout.mjs.map
