import orders from "~/server/utils/orders";
import { OrderForm } from "~/types/order";
import jwt from "jsonwebtoken";
import { TokenPayload } from "~/types/tokens";

export default defineEventHandler(async (event) => {
  try {
    switch (event.method) {
      case "GET":
        const token = getCookie(event, "token");
        if (!token) {
          return createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
          });
        }
        const user = jwt.verify(
          token,
          useRuntimeConfig().jwtSecret
        ) as TokenPayload;
        const ordersList = await orders.getOrdersByUserId(user.id);
        return new ResponseSchema(
          ordersList,
          true,
          "Orders retrieved successfully"
        );
      case "POST":
        const body = await readBody<OrderForm>(event);
        const createOrder = await orders.createOrder(body);
        return createOrder;
      default:
        return createError({
          statusCode: 405,
          statusMessage: "Method not allowed",
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Failed to create order",
    });
  }
});
