import orders from "~/server/utils/orders";
import { OrderForm } from "~/types/order";

export default defineEventHandler(async (event) => {
  try {
    const orderId = getRouterParam(event, "orderId");
    switch (event.method) {
      case "GET":
        const orderDetails = await orders.getOrderById(Number(orderId));
        if (!orderDetails) {
          return createError({
            statusCode: 404,
            statusMessage: "Order not found",
          });
        }
        return new ResponseSchema(
          orderDetails,
          true,
          "Order retrieved successfully"
        );
      case "PUT":
        const body = await readBody<Partial<OrderForm>>(event);
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
          statusMessage: "Method not allowed",
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Failed to update order",
    });
  }
});
