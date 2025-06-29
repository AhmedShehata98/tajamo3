import { SupabaseClient } from "@supabase/supabase-js";
import { PaymentForm } from "~/types/payments";

export class Payments {
  private readonly supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async getPaymentById(id: number) {
    try {
      const { data, error } = await this.supabase
        .from("payments")
        .select("*")
        .eq("id", id)
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        throw new Error(
          `Failed to create payments :${
            error instanceof Error ? error.message : ""
          }`
        );
      }
      throw new Error("Failed to create payment");
    }
  }

  async createPayment(payment: PaymentForm) {
    try {
      const { data, error } = await this.supabase
        .from("payments")
        .insert(payment)
        .select("*")
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        throw new Error(
          `Failed to create payments :${
            error instanceof Error ? error.message : ""
          }`
        );
      }
      throw new Error("Failed to create payment");
    }
  }

  async updatePayment(id: number, payment: Partial<PaymentForm>) {
    try {
      const { data, error } = await this.supabase
        .from("payments")
        .update(payment)
        .eq("id", id)
        .select("*")
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        throw new Error(
          `Failed to update payments :${
            error instanceof Error ? error.message : ""
          }`
        );
      }
      throw new Error("Failed to update payment");
    }
  }

  async removePaymentById(id: number) {
    try {
      const { data, error } = await this.supabase
        .from("payments")
        .delete()
        .eq("id", id)
        .select("*")
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      if (import.meta.dev) {
        throw new Error(
          `Failed to remove payments :${
            error instanceof Error ? error.message : ""
          }`
        );
      }
      throw new Error("Failed to remove payments");
    }
  }
}

export default new Payments(supabase);
