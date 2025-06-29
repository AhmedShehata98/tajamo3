import type { BillingDataType, PaymentItem } from "./paymob";

export type Payment = {
  id: number;
  order_id: number;
  amount: number;
  transaction_reference?: string | null;
  status: PaymentStatus;
  created_at: string;
  updated_at: string;
  paid_at: string;
  method: PaymentMethod;
};

export type PaymentMethod = "paymob_credit_card" | "fawry";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type PaymentForm = Omit<Payment, "id" | "created_at" | "updated_at">;
export type PaymentResult<T = unknown> = {
  status: string;
  amount: number;
  currency: string;
  date: string;
  extraData: T;
};

export type BasePaymentForm = {
  amount: number;
  currency: string;
  orders: PaymentItem[];
  billingData: BillingDataType;
};
