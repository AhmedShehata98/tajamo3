import { d as defineEventHandler, m as getRouterParam, c as createError, w as users, R as ResponseSchema, r as readBody } from '../../../_/nitro.mjs';
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

const _userId_ = defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "userId");
  if (!userId) {
    return createError({
      statusCode: 400,
      statusMessage: "User ID is required"
    });
  }
  try {
    if (event.method === "GET") {
      const user = await users.removeUserById(Number(userId));
      if (!user) {
        return createError({
          statusCode: 404,
          statusMessage: "User not found"
        });
      }
      return new ResponseSchema(user, true, "User fetched successfully");
    }
    if (event.method === "PATCH") {
      const body = await readBody(event);
      if (!body) {
        return createError({
          statusCode: 400,
          statusMessage: "Required at lest of fields (first_name, last_name, phone, email, country, city)"
        });
      }
      const updatedUser = await users.updateUser(Number(userId), body);
      if (!updatedUser) {
        return createError({
          statusCode: 400,
          statusMessage: "Failed to update user"
        });
      }
      return new ResponseSchema(updatedUser, true, "User updated successfully");
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

export { _userId_ as default };
//# sourceMappingURL=_userId_.mjs.map
