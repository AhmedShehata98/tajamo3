import { SupabaseClient } from "@supabase/supabase-js";
import { Order, OrderForm } from "~/types/order";

export class Orders {
  private readonly supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async createOrder(order: OrderForm) {
    try {
      const { data, error } = await this.supabase
        .from("orders")
        .insert(order)
        .select("*")
        .single();
      console.log("error: ", error);
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error(
          "Error creating order: ",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
      throw new Error("Failed to create order");
    }
  }

  async getOrderById(id: number) {
    try {
      const { data, error } = await this.supabase
        .from("orders")
        .select(
          `
          id,
          event:events (
            id,
            name,
            description,
            image,
            start_at,
            end_at,
            location,
            event_type,
            location_type
          ),
          ticket_type:ticket_types (
            id,
            name,
            description,
            price,
            sale_start,
            sale_end
          ),
          user:users (
            id,
            first_name,
            last_name,
            email
          ),
          final_amount,
          status,
          created_at
        `
        )
        .eq("id", id)
        .single();
      console.log(error);
      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error(
          "Error getting order by id: ",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
      throw new Error("Failed to get order by id");
    }
  }

  async getOrdersByUserId(userId: number) {
    try {
      const { data, error } = await this.supabase
        .from("orders")
        .select(
          `
          id,
          event_id:events (
            id,
            name,
            description
          ),
          ticket_type_id:ticket_types (
            id,
            name  
          ),
          user_id,
          final_amount,
          status,
          created_at
        `
        )
        .eq("user_id", userId);
      console.log("error : ", error);
      console.log("************************");
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error(
          "Error getting orders by user id: ",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
      throw new Error("Failed to get orders by user id");
    }
  }

  async getOrdersByEventId(eventId: number) {
    try {
      const { data, error } = await this.supabase
        .from("orders")
        .select("*")
        .eq("event_id", eventId);
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error(
          "Error getting orders by event id: ",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
      throw new Error("Failed to get orders by event id");
    }
  }

  async updateOrder(id: number, order: Partial<OrderForm>) {
    try {
      const { data, error } = await this.supabase
        .from("orders")
        .update(order)
        .eq("id", id)
        .select("*")
        .single<Order>();
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error(
          "Error updating order: ",
          error instanceof Error ? error.message : error
        );
      }
      throw new Error("Failed to update order");
    }
  }

  async removeOrderById(id: number) {
    try {
      const { data, error } = await this.supabase
        .from("orders")
        .delete()
        .eq("id", id)
        .select("*")
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        console.error(
          "Error removing order by id: ",
          error instanceof Error ? error.message : "Unknown error"
        );
      }
      throw new Error("Failed to remove order by id");
    }
  }
}

export default new Orders(supabase);
