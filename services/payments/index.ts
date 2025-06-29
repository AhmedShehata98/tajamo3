import type { ResponseSchemaType } from "~/server/utils/response-schema";
import type { PaymentForm, Payment } from "~/types/payments";

export const updatePayment = async (form: {
  id: number;
  body: Partial<Payment>;
}) => {
  try {
    const res = await fetch(`/api/payments/${form.id}`, {
      method: "PATCH",
      body: JSON.stringify(form.body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createNewPayment = async (
  payment: PaymentForm
): Promise<ResponseSchemaType<Payment>> => {
  try {
    const res = await fetch("/api/payments", {
      method: "POST",
      body: JSON.stringify(payment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const removePaymentById = async (id: number) => {
  try {
    const res = await fetch(`/api/payments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
