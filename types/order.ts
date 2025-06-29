export type Order = {
  id: number;
  event_id: number;
  ticket_type_id: number;
  user_id: number;
  final_amount: number;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
};

export type OrderStatus = "pending" | "completed" | "cancelled" | "refunded";
export type OrderForm = Omit<Order, "id" | "created_at" | "updated_at">;
