import { d as defineEventHandler, r as readBody, x as ticket, c as createError, R as ResponseSchema } from '../../_/nitro.mjs';
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
    if (event.method === "POST") {
      const body = await readBody(event);
      const ticketResponse = await ticket.createTicket(body);
      if (!ticketResponse) {
        return createError({
          statusCode: 400,
          statusMessage: "Ticket creation failed"
        });
      }
      return new ResponseSchema(
        ticketResponse,
        true,
        "Ticket created successfully"
      );
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index8.mjs.map
