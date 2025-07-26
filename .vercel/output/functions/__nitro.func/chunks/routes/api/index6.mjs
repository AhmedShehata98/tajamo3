import { d as defineEventHandler, r as readBody, c as createError, v as payments, R as ResponseSchema } from '../../_/nitro.mjs';
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
  try {
    switch (event.method) {
      case "POST":
        const createPayment = await payments.createPayment(body);
        return new ResponseSchema(
          createPayment,
          true,
          "Payment created successfully"
        );
      default:
        return createError({
          statusCode: 405,
          statusMessage: "Method not allowed"
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to create payment"
    });
  }
});

export { index as default };
//# sourceMappingURL=index6.mjs.map
