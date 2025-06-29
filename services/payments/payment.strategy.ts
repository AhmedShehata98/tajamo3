import { nanoid } from "nanoid";
import type { Order } from "~/types/order";
import type {
  PaymentForm,
  Payment as PaymentType,
  BasePaymentForm,
  PaymentResult,
} from "~/types/payments";
import type { LocalPaymobResponse, PaymobForm } from "~/types/paymob";
import { createNewPayment, removePaymentById, updatePayment } from ".";

interface PaymentStrategy {
  pay(payment: BasePaymentForm): Promise<PaymentResult>;
}

const convertToCents = (amount: number): number => {
  return Math.round(amount * 100);
};

class PaymobCreditCardStrategy implements PaymentStrategy {
  async pay(
    payment: BasePaymentForm
  ): Promise<PaymentResult<{ checkoutUrl: string }>> {
    try {
      const origin =
        typeof window !== "undefined" ? window.location.origin : "";

      const apiForm: PaymentForm = {
        amount: payment.amount,
        method: "paymob_credit_card",
        status: "pending",
        paid_at: new Date().toISOString(),
        order_id: payment.orders[0].id,
        transaction_reference: null,
      };
      const createdPayment = await createNewPayment(apiForm);
      const paymobForm: PaymobForm = {
        amount: convertToCents(payment.amount),
        currency: payment.currency,
        payment_methods: ["card"],
        items: payment.orders.map((order) => ({
          id: order.id,
          name: order.name,
          amount: convertToCents(order.amount),
          description: order.description || "",
          quantity: order.quantity || 1,
        })),
        billing_data: payment.billingData,
        notification_url: `https://d91e-154-238-180-102.ngrok-free.app/api/payments/confirmation`,
        redirection_url: `${origin}/dashboard/payments/redirect`,
        extras: {
          api: {
            orderId: payment.orders.at(0)?.id,
            paymentId: createdPayment.data.id,
          },
        },
      };

      const response = await $fetch<LocalPaymobResponse>(
        "/api/payment-getaways/paymob",
        {
          method: "POST",
          body: JSON.stringify(paymobForm),
          headers: {
            "Content-Type": "application/json",
          },

          async onResponse({ response }) {
            if (response.ok) {
              const data = response._data as LocalPaymobResponse;
              await updatePayment({
                id: createdPayment.data.id,
                body: { transaction_reference: data.orderId.toString() },
              });
            } else {
              await removePaymentById(createdPayment.data.id);
            }
          },
        }
      );

      return {
        amount: response.amount,
        currency: response.currency,
        date: response.date,
        status: response.status,
        extraData: {
          checkoutUrl: response.checkoutUrl,
        },
      };
    } catch (error) {
      if (import.meta.dev) {
        throw new Error(
          `Failed to pay with credit card: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } else {
        throw new Error("Failed to pay with credit card");
      }
    }
  }
}

class FawryStrategy implements PaymentStrategy {
  async pay(payment: BasePaymentForm): Promise<PaymentResult> {
    try {
      // TODO: Implement fawry payment
      //...
      // TODO: create payment record with fawry reference
      const response = await $fetch<PaymentResult>("/api/payments", {
        method: "POST",
        body: JSON.stringify({ payment, method: "fawry" }),
      });
      return response;
    } catch (error) {
      if (import.meta.dev) {
        throw new Error(
          `Failed to pay with fawry: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } else {
        throw new Error("Failed to pay with fawry");
      }
    }
  }
}

class Payment implements PaymentStrategy {
  constructor(private readonly strategy: PaymentStrategy) {}

  pay(payment: BasePaymentForm): Promise<PaymentResult> {
    return this.strategy.pay(payment);
  }
}

export { PaymobCreditCardStrategy, FawryStrategy, Payment };
