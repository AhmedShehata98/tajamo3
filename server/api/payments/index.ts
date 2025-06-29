import payments from "~/server/utils/payments";
import { PaymentForm } from "~/types/payments";

export default defineEventHandler(async (event) => {
  const body = await readBody<PaymentForm>(event);

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
          statusMessage: "Method not allowed",
        });
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Failed to create payment",
    });
  }
});
