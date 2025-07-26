import { d as defineEventHandler, r as readBody, a as useRuntimeConfig, c as createError } from '../../../_/nitro.mjs';
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
  var _a;
  const body = await readBody(event);
  const secretKey = useRuntimeConfig().paymob.secretKey;
  const publicKey = useRuntimeConfig().public.paymobPublickKey;
  const paymobAcceptUrl = "https://accept.paymob.com/v1/intention/";
  try {
    if (event.method === "POST") {
      const response = await fetch(paymobAcceptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${secretKey}`
        },
        body: JSON.stringify({
          ...body
        })
      });
      const responseData = await response.json();
      const checkoutUrl = `https://accept.paymob.com/unifiedcheckout/?publicKey=${publicKey}&clientSecret=${responseData.client_secret}`;
      if (response.ok) {
        return {
          paymentId: responseData.id,
          currency: responseData.intention_detail.currency,
          amount: responseData.intention_detail.amount,
          orderId: (_a = responseData.payment_keys.at(0)) == null ? void 0 : _a.order_id,
          confirmed: responseData.confirmed,
          status: responseData.status,
          date: (/* @__PURE__ */ new Date()).toISOString(),
          checkoutUrl
        };
      } else {
        throw createError({
          statusCode: 400,
          statusMessage: response.statusText || "Bad Request"
        });
      }
    }
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed"
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
