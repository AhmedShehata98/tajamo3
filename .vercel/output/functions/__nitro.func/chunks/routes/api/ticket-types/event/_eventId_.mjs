import { d as defineEventHandler, m as getRouterParam, c as createError, z as ticketTypes, R as ResponseSchema } from '../../../../_/nitro.mjs';
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

const _eventId_ = defineEventHandler(async (event) => {
  const eventId = getRouterParam(event, "eventId");
  if (!eventId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Event ID is required"
    });
  }
  try {
    switch (event.method) {
      case "GET":
        const ticketTypesData = await ticketTypes.getTicketTypesByEventId(
          Number(eventId)
        );
        return new ResponseSchema(
          ticketTypesData,
          true,
          "ticket types fetched successfully"
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

export { _eventId_ as default };
//# sourceMappingURL=_eventId_.mjs.map
