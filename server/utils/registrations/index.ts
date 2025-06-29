import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "~/server/utils/supabase";

export class Registrations {
  constructor(private readonly db: SupabaseClient) {}

  async createUserRegistration(formData: {
    event_id: string;
    user_id: number;
  }) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .insert({
          ...formData,
          registered_at: new Date().toISOString(),
          attended: false,
          created_at: new Date().toISOString(),
        })
        .select("id,created_at,event_id,user_id")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async createGuestRegistration(formData: {
    event_id: string;
    guest_name: string;
    guest_phone: string;
  }) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .insert(formData)
        .select("id,created_at,event_id,guest_name,guest_phone")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async getRegistrationsAsUser(userId: string) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .select("id,created_at,event_id,user_id,attended")
        .eq("user_id", userId);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async getRegistrationsAsGuest(phone: string) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .select("id,created_at,event_id,guest_name,guest_phone,attended")
        .eq("guest_phone", phone);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async getEventRegistrationsAsAll(eventId: string) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .select(
          `id,
          created_at,
          user:users (
            id,
            first_name,
            last_name,
            email,
            phone
          ),
          guest_name,
          guest_phone,
          attended
        `
        )
        .eq("event_id", eventId);
      console.log("error: ", error);
      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async getUserRegistrations(userId: string) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .select("id,created_at,event_id,user_id,attended")
        .eq("user_id", userId);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async updateRegistrationMarkUserAsAttended(registrationId: string) {
    try {
      const { data, error } = await this.db
        .from("event_registrations")
        .update({ attended: true })
        .eq("id", registrationId)
        .select(
          "id,created_at,event_id,user_id,guest_name,guest_phone,attended"
        )
        .single();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  async removeRegistrationById(registrationId: string) {
    try {
      const { error } = await this.db
        .from("event_registrations")
        .delete()
        .eq("id", registrationId);

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
  }
}

export default new Registrations(supabase);
