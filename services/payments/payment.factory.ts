import type { PaymentMethod } from "~/types/payments";
import {
  PaymobCreditCardStrategy,
  FawryStrategy,
  Payment,
} from "./payment.strategy";

interface PaymentFactory {
  createPayment(method: PaymentMethod): Payment;
}

class PaymentFactoryContext implements PaymentFactory {
  createPayment(method: PaymentMethod): Payment {
    switch (method) {
      case "paymob_credit_card":
        return new Payment(new PaymobCreditCardStrategy());
      case "fawry":
        return new Payment(new FawryStrategy());
      default:
        throw new Error("Invalid payment method");
    }
  }
}

export { PaymentFactoryContext, type PaymentMethod, type PaymentFactory };
