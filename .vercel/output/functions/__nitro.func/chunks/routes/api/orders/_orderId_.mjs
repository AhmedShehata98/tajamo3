import { d as defineEventHandler, m as getRouterParam, c as createError, o as orders, R as ResponseSchema, r as readBody } from '../../../_/nitro.mjs';
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
  try {
    const orderId = getRouterParam(event, "orderId");
    switch (event.method) {
      case "GET":
        const orderDetails = await orders.getOrderById(Number(orderId));
        if (!orderDetails) {
          return createError({
            statusCode: 404,
            statusMessage: "Order not found"
          });
        }
        return new ResponseSchema(
          orderDetails,
          true,
          "Order retrieved successfully"
        );
      case "PUT":
        const body = await readBody(event);
        const updateOrder = await orders.updateOrder(Number(orderId), body);
        return new ResponseSchema(
          updateOrder,
          true,
          "Order updated successfully"
        );
      case "DELETE":
        const removedOrder = await orders.removeOrderById(Number(orderId));
        return new ResponseSchema(
          removedOrder,
          true,
          "Order removed successfully"
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
      statusMessage: error instanceof Error ? error.message : "Failed to update order"
    });
  }
});

export { _orderId_ as default };
//# sourceMappingURL=_orderId_.mjs.map
