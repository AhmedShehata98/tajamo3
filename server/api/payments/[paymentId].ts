import payments from "~/server/utils/payments";
import { PaymentForm } from "~/types/payments";

export default defineEventHandler(async (event) => {
  const paymentId = getRouterParam(event, "paymentId");
  const body = await readBody<Partial<PaymentForm>>(event);

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
          statusMessage: "Method not allowed",
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Failed to update payment",
    });
  }
});
