import type { Order, OrderForm } from "~/types/order";

export async function createOrder(order: OrderForm) {
  try {
    const res = await $fetch<Order>("/api/orders", {
      method: "POST",
      body: JSON.stringify(order),
    });
    return res;
  } catch (error) {
    throw new Error("Failed to create order");
  }
}

export async function updateOrder(id: number, order: Partial<OrderForm>) {
  try {
    const res = await $fetch<Order>(`/api/orders/${id}`, {
      method: "PUT",
      body: JSON.stringify(order),
    });
    return res;
  } catch (error) {
    throw new Error("Failed to update order");
  }
}

export async function removeOrderById(id: number) {
  try {
    const res = await $fetch<Order>(`/api/orders/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    throw new Error("Failed to remove order");
  }
}
