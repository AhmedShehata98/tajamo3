export type Ticket = {
  id: string;
  code: string;
  ticket_type_id: number;
  purchased_at: string;
  created_at: string;
  user_id: number;
  order_id: number;
};

export type TicketForm = Omit<Ticket, "id" | "created_at">;

export type TicketType = "VIP" | "FREE" | "PREMIUM";

export type TicketStatus = "reserved" | "paid" | "cancelled" | "refunded";
