import { d as defineEventHandler, c as createError, r as readBody, o as orders, j as getCookie, a as useRuntimeConfig, R as ResponseSchema } from '../../_/nitro.mjs';
import jwt from 'jsonwebtoken';
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
    switch (event.method) {
      case "GET":
        const token = getCookie(event, "token");
        if (!token) {
          return createError({
            statusCode: 401,
            statusMessage: "Unauthorized"
          });
        }
        const user = jwt.verify(
          token,
          useRuntimeConfig().jwtSecret
        );
        const ordersList = await orders.getOrdersByUserId(user.id);
        return new ResponseSchema(
          ordersList,
          true,
          "Orders retrieved successfully"
        );
      case "POST":
        const body = await readBody(event);
        const createOrder = await orders.createOrder(body);
        return createOrder;
      default:
        return createError({
          statusCode: 405,
          statusMessage: "Method not allowed"
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Failed to create order"
    });
  }
});

export { index as default };
//# sourceMappingURL=index4.mjs.map
