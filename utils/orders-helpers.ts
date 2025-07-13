import type { OrderStatus } from "~/types/order";

export function OrderStateStyles(state: OrderStatus) {
  switch (state) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "completed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    case "refunded":
      return "bg-slate-200 text-slate-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
