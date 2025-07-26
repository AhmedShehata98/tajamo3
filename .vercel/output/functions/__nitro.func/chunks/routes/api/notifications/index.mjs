import { d as defineEventHandler, r as readBody, c as createError, n as notifications, R as ResponseSchema } from '../../../_/nitro.mjs';
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
    if (event.method === "PATCH") {
      const body = await readBody(event);
      if (!(body == null ? void 0 : body.ids) || !Array.isArray(body.ids)) {
        return createError({
          statusCode: 400,
          statusMessage: "Invalid request body - 'ids' must be an array"
        });
      }
      const markedAsRead = await notifications.markAsRead(body.ids);
      return new ResponseSchema(
        markedAsRead,
        true,
        "Notifications marked as read successfully"
      );
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Internal Server Error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
