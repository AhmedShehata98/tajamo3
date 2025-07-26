import { d as defineEventHandler, h as getQuery, c as createError, w as users, R as ResponseSchema } from '../../../_/nitro.mjs';
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

const index = defineEventHandler(async (event) => {
  try {
    if (event.method === "GET") {
      const query = getQuery(event);
      if (!query.phoneNumber) {
        return createError({
          statusCode: 400,
          message: "Phone number is required"
        });
      }
      const res = await users.getUserByPhone(query.phoneNumber);
      if (!res) {
        return createError({
          statusCode: 404,
          message: "User not found with this phone number"
        });
      }
      return new ResponseSchema(res, true, "Founded user successfully");
    }
    return createError({
      statusCode: 405,
      message: "method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index3.mjs.map
