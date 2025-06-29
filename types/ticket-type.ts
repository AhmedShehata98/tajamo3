export type TicketType = {
  id: number;
  event_id: number;
  name: string;
  description?: string | null;
  price: number;
  quantity_available: number;
  created_at: string;
  updated_at: string;
  sale_start: string;
  sale_end: string;
};

export type TicketTypeForm = Omit<
  TicketType,
  "id" | "created_at" | "updated_at"
>;
