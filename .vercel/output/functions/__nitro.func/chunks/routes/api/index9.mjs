import { d as defineEventHandler, R as ResponseSchema, w as users, r as readBody, c as createError } from '../../_/nitro.mjs';
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
      return new ResponseSchema(
        await users.getUsers(),
        true,
        "Users fetched successfully"
      );
    }
    if (event.method === "POST") {
      const body = await readBody(event);
      if (!body || !body.first_name || !body.last_name || !body.phone || !body.email || !body.country || !body.city) {
        return createError({
          statusCode: 400,
          statusMessage: "Required fields are missing (first_name, last_name, phone, email,country, city)"
        });
      }
      const createdUser = await users.createUser(body);
      console.log("createdUser: ", createdUser);
      if (!createdUser) {
        return createError({
          statusCode: 400,
          statusMessage: createdUser
        });
      }
      return new ResponseSchema(createdUser, true, "User created successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error == null ? void 0 : error.message : "internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index9.mjs.map
