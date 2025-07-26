import { d as defineEventHandler, m as getRouterParam, c as createError, z as ticketTypes, R as ResponseSchema } from '../../../_/nitro.mjs';
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

const _ticketId_ = defineEventHandler(async (event) => {
  const ticketId = getRouterParam(event, "ticketId");
  if (!ticketId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Ticket ID is required"
    });
  }
  try {
    switch (event.method) {
      case "GET":
        const ticketData = await ticketTypes.getTicketTypeById(
          Number(ticketId)
        );
        return new ResponseSchema(
          ticketData,
          true,
          "ticket fetched successfully"
        );
      case "DELETE":
        const deletedTicket = await ticketTypes.removeTicketTypeById(
          Number(ticketId)
        );
        if (!deletedTicket) {
          throw createError({
            statusCode: 404,
            statusMessage: "Ticket type not found"
          });
        }
        return new ResponseSchema(
          deletedTicket,
          true,
          "ticket type deleted successfully"
        );
      default:
        throw new Error("Method not allowed");
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "something went wrong while getting ticket types , please try again"
    });
  }
});

export { _ticketId_ as default };
//# sourceMappingURL=_ticketId_.mjs.map
