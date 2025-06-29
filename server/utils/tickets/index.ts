import { TicketForm, Ticket as TicketType } from "~/types/tickets";

export class Ticket {
  constructor(private readonly supabase: SupabaseClient) {}

  async createTicket(form: TicketForm) {
    try {
      const { data, error } = await this.supabase
        .from("tickets")
        .insert(form)
        .select("*")
        .single<TicketType>();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }

  async getTicketByCode(code: string) {
    try {
      const { data, error } = await this.supabase
        .from("tickets")
        .select("*")
        .eq("code", code)
        .maybeSingle<Ticket>();
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }

  async getTicketsByEventId(eventId: number) {
    try {
      const { data, error } = await this.supabase
        .from("tickets")
        .select("*")
        .eq("event_id", eventId);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }

  async getTicketsByUserId(userId: number) {
    try {
      const { data, error } = await this.supabase
        .from("tickets")
        .select("*")
        .eq("user_id", userId);
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }

  async getTicketById(ticketId: number) {
    try {
      const { data, error } = await this.supabase
        .from("tickets")
        .select("*")
        .eq("id", ticketId)
        .single<TicketType>();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }

  async getTicketByOrderId(orderId: number) {
    try {
      const { data, error } = await this.supabase
        .from("tickets")
        .select("*")
        .limit(1)
        .eq("order_id", orderId)
        .single<Ticket>();
      if (error) {
        throw new Error(error.message, { cause: error.cause });
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }
}

export const ticket = new Ticket(supabase);
