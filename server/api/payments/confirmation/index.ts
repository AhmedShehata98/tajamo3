import { PaymobTransactionResponse } from "~/types/paymob";
import notifications from "~/server/utils/notifications";
import { nanoid } from "nanoid";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody<
        PaymobTransactionResponse & {
          orderId: string;
          paymentId: string;
        }
      >(event);

      console.log("api/payments/confirmation :: body ", body);
      const userPhoneNumber = body.obj.order.shipping_data.phone_number;

      const user = await users.getUserByPhone(userPhoneNumber);

      if (!user) {
        throw createError({
          statusCode: 404,
          statusMessage: "User not found",
        });
      }

      console.log("user: ", user);

      const apiObject = body?.obj?.payment_key_claims?.extra?.api;

      if (!apiObject.orderId) {
        return createError({
          statusCode: 400,
          statusMessage: "Invalid API object, orderId is missing",
        });
      }

      if (!apiObject.paymentId) {
        return createError({
          statusCode: 400,
          statusMessage: "Invalid API object, paymentId is missing",
        });
      }

      if (body.obj.success) {
        const updatedOrder = await orders.updateOrder(
          parseInt(apiObject.orderId),
          {
            status:
              body.obj.order.payment_status === "PAID"
                ? "completed"
                : "pending",
          }
        );
        console.log("updatedOrder: ", updatedOrder);
        await payments.updatePayment(parseInt(apiObject.paymentId), {
          status: body.obj.order.payment_status === "PAID" ? "paid" : "pending",
          paid_at: new Date().toISOString(),
        });
        await ticket.createTicket({
          code: `TICKET-${apiObject.orderId}-${nanoid(10)}`,
          order_id: updatedOrder.id,
          purchased_at: new Date().toISOString(),
          ticket_type_id: updatedOrder.ticket_type_id,
          user_id: user.id,
        });
        await notifications.createNewNotification({
          type: "done",
          title: "Payment Processed Successfully",
          description: `Payment for order ${
            body.obj.order.items.at(0)?.name
          } has been processed successfully check your tickets.`,
          is_read: false,
          user_id: user.id,
        });
        console.log(
          "Payment processed successfully for order: ",
          apiObject.orderId
        );
      } else {
        await payments.updatePayment(parseInt(apiObject.paymentId), {
          status: "failed",
          paid_at: new Date().toISOString(),
        });

        await notifications.createNewNotification({
          type: "warn",
          title: "Payment Failed to Process transaction",
          description: `Payment for order ${apiObject.orderId} failed. Please try again.`,
          is_read: false,
          user_id: user.id,
        });
      }
      console.log(
        "Payment notification processed successfully for order: ",
        apiObject.orderId
      );
      return {
        success: body.obj.success,
        status: body.obj.order.payment_status,
        message: `Payment notification processed ${
          body.obj.success ? "success" : "failed"
        }`,
      };
    }
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  } catch (error) {
    console.log("Internal Server Error:", error);
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});
