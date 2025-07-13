export type Ticket = {
  id: string;
  code: string;
  ticket_type_id: number;
  purchased_at: string;
  created_at: string;
  user_id: number;
  order_id: number;
};

export type TicketTable = {
  id: number;
  code: string;
  purchased_at: string;
  user_id: {
    id: number;
    full_name: string;
    last_name: string;
  };
  ticket_type_id: {
    name: string;
    price: number;
  };
  order_id: {
    id: number;
    status: string;
    event_id: {
      id: number;
      name: string;
      image: string;
      end_at: string;
      start_at: string;
    };
    final_amount: number;
  };
};

export type TicketForm = Omit<Ticket, "id" | "created_at">;

export type TicketType = "VIP" | "FREE" | "PREMIUM";

export type TicketStatus = "reserved" | "paid" | "cancelled" | "refunded";
