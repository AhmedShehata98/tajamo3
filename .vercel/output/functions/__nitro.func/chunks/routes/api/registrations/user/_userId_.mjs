import { d as defineEventHandler, m as getRouterParam, c as createError, y as registrations } from '../../../../_/nitro.mjs';
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
  try {
    const userId = getRouterParam(event, "userId");
    if (!userId) {
      return createError({
        statusCode: 400,
        statusMessage: "User ID is required"
      });
    }
    if (event.method === "GET") {
      const data = await registrations.getRegistrationsAsUser(userId);
      return data;
    }
    if (event.method === "PATCH") {
      const data = await registrations.updateRegistrationMarkUserAsAttended(
        userId
      );
      return data;
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    createError({
      statusCode: error instanceof Error ? error.statusCode : 500,
      statusMessage: error instanceof Error ? error.message : "Internal server error"
    });
  }
});

export { _userId_ as default };
//# sourceMappingURL=_userId_.mjs.map
