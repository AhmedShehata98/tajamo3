import { d as defineEventHandler, m as getRouterParam, c as createError, y as registrations, R as ResponseSchema } from '../../../_/nitro.mjs';
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
  try {
    const eventId = getRouterParam(event, "eventId");
    if (!eventId) {
      return createError({
        statusCode: 400,
        statusMessage: "Event ID is required"
      });
    }
    if (event.method === "GET") {
      const data = await registrations.getEventRegistrationsAsAll(eventId);
      console.log(data);
      return new ResponseSchema(
        data,
        true,
        "Registrations fetched successfully"
      );
    }
    if (event.method === "DELETE") {
      const data = await registrations.removeRegistrationById(eventId);
      return data;
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Internal server error"
    });
  }
});

export { _eventId_ as default };
//# sourceMappingURL=_eventId_.mjs.map
