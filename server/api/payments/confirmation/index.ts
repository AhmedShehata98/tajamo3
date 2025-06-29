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
      const userPhoneNumber = body.obj.order.shipping_data.phone_number;

      const user = await users.getUserByPhone(userPhoneNumber);

      if (!user) {
        throw createError({
          statusCode: 404,
          statusMessage: "User not found",
        });
      }

      // const paymobAuthKeyRes = await fetch(
      //   "https://accept.paymob.com/api/auth/tokens",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       // Authorization: `Bearer ${useRuntimeConfig().paymob.secretKey}`,
      //     },
      //     body: JSON.stringify({
      //       api_key: useRuntimeConfig().paymob.apiKey,
      //     }),
      //   }
      // );
      // const paymobAuthKey = await paymobAuthKeyRes.json();

      // console.log({ tokens: paymobAuthKey?.token });
      // console.log("*")
      // const orderDetailsRes = await fetch(
      //   `https://accept.paymob.com/api/ecommerce/orders/${345879733}`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${paymobAuthKey.token}`,
      //     },
      //   }
      // );
      // const orderDetails = await orderDetailsRes.json();

      // console.log({
      //   orderId: body.orderId,
      //   paymentId: body.paymentId,
      //   orderDetails,
      // });

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
