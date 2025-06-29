import { SupabaseClient } from "@supabase/supabase-js";
import { TicketTypeForm } from "~/types/ticket-type";
import supabase from "../supabase";

export class TicketTypes {
  constructor(private readonly supabase: SupabaseClient) {}

  async createTicketTypes(ticketTypes: TicketTypeForm[]) {
    try {
      const { data, error } = await this.supabase
        .from("ticket_types")
        .insert(ticketTypes)
        .select(
          "id,created_at,event_id,name,description,price,quantity_available,sale_start,sale_end"
        )
        .single();
      if (error) {
        throw new Error(
          `something went wrong while creating ticket types : ${error.message}`
        );
      }
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error("Error creating ticket types:", error);
      }
      throw new Error(
        "something went wrong while creating ticket types , please try again"
      );
    }
  }

  async getTicketTypesByEventId(eventId: number) {
    try {
      const { data, error } = await this.supabase
        .from("ticket_types")
        .select(
          "id,created_at,event_id,name,description,price,quantity_available,sale_start,sale_end"
        )
        .eq("event_id", eventId);
      if (error) {
        throw new Error(
          `something went wrong while getting ticket types : ${error.message}`
        );
      }
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error("Error getting ticket types:", error);
      }
      throw new Error(
        "something went wrong while getting ticket types , please try again"
      );
    }
  }

  async getTicketTypeById(ticketId: number) {
    try {
      const { data, error } = await this.supabase
        .from("ticket_types")
        .select("*")
        .eq("id", ticketId)
        .single();
      if (error) {
        throw new Error(
          `something went wrong while getting ticket type : ${error.message}`
        );
      }
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error("Error getting ticket type:", error);
      }
      throw new Error(
        "something went wrong while getting ticket type , please try again"
      );
    }
  }
}

export default new TicketTypes(supabase);
