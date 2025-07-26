import { d as defineEventHandler, m as getRouterParam, c as createError, x as ticket, R as ResponseSchema } from '../../../../_/nitro.mjs';
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
  try {
    if (event.method === "GET") {
      if (!userId) {
        throw createError({
          statusCode: 400,
          statusMessage: "User ID is required"
        });
      }
      const tickets = await ticket.getTicketsByUserId(Number(userId));
      if (!tickets || tickets.length === 0) {
        return createError({
          statusCode: 404,
          statusMessage: "Tickets not found for the given user ID"
        });
      }
      return new ResponseSchema(
        tickets,
        true,
        "Tickets retrieved successfully"
      );
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
