import { d as defineEventHandler, r as readBody, z as ticketTypes, R as ResponseSchema, c as createError } from '../../_/nitro.mjs';
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
  const body = await readBody(event);
  console.log("body: ", body);
  try {
    switch (event.method) {
      case "POST":
        const createdTicketType = await ticketTypes.createTicketTypes(body);
        return new ResponseSchema(
          createdTicketType,
          true,
          "Ticket type created successfully"
        );
      default:
        throw new Error("Method not allowed");
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "something went wrong while creating ticket types , please try again"
    });
  }
});

export { index as default };
//# sourceMappingURL=index7.mjs.map
