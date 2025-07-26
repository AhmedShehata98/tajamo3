import { d as defineEventHandler, m as getRouterParam, r as readBody, c as createError, v as payments } from '../../../_/nitro.mjs';
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

const _paymentId_ = defineEventHandler(async (event) => {
  const paymentId = getRouterParam(event, "paymentId");
  const body = await readBody(event);
  try {
    switch (event.method) {
      case "GET":
        const payment = await payments.getPaymentById(Number(paymentId));
        return payment;
      case "PATCH":
        const updatePayment = await payments.updatePayment(
          Number(paymentId),
          body
        );
        return updatePayment;
      case "DELETE":
        const removedPayment = await payments.removePaymentById(
          Number(paymentId)
        );
        return removedPayment;
      default:
        return createError({
          statusCode: 405,
          statusMessage: "Method not allowed"
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to update payment"
    });
  }
});

export { _paymentId_ as default };
//# sourceMappingURL=_paymentId_.mjs.map
