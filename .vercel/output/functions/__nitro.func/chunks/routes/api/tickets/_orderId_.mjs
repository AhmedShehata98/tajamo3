import { d as defineEventHandler, m as getRouterParam, c as createError, x as ticket, R as ResponseSchema } from '../../../_/nitro.mjs';
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

const _orderId_ = defineEventHandler(async (event) => {
  const orderId = getRouterParam(event, "orderId");
  try {
    if (event.method === "GET") {
      if (!orderId) {
        throw createError({
          statusCode: 400,
          statusMessage: "Order ID is required"
        });
      }
      const tickets = await ticket.getTicketByOrderId(Number(orderId));
      if (!tickets) {
        throw createError({
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

export { _orderId_ as default };
//# sourceMappingURL=_orderId_.mjs.map
