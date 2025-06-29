import { LocalPaymobResponse, PaymobForm } from "~/types/paymob";
import { PaymobIntentionResponse } from "~/types/paymob";

export default defineEventHandler(async (event) => {
  const body = await readBody<PaymobForm>(event);
  const secretKey = useRuntimeConfig().paymob.secretKey;
  const publicKey = useRuntimeConfig().public.paymobPublickKey;

  const paymobAcceptUrl = "https://accept.paymob.com/v1/intention/";

  try {
    if (event.method === "POST") {
      const response = await fetch(paymobAcceptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${secretKey}`,
        },
        body: JSON.stringify({
          ...body,
        }),
      });
      const responseData = (await response.json()) as PaymobIntentionResponse;
      const checkoutUrl = `https://accept.paymob.com/unifiedcheckout/?publicKey=${publicKey}&clientSecret=${responseData.client_secret}`;

      if (response.ok) {
        return {
          paymentId: responseData.id,
          currency: responseData.intention_detail.currency,
          amount: responseData.intention_detail.amount,
          orderId: responseData.payment_keys.at(0)?.order_id,
          confirmed: responseData.confirmed,
          status: responseData.status,
          date: new Date().toISOString(),
          checkoutUrl,
        } as LocalPaymobResponse;
      } else {
        throw createError({
          statusCode: 400,
          statusMessage: response.statusText || "Bad Request",
        });
      }
    }

    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    });
  } catch (error) {
    if (import.meta.dev) {
      console.error("error: ", error);
    }
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
