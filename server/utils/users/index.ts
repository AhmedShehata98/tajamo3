import type { User } from "~/types/users";
import supabase, { SupabaseClient } from "~/server/utils/supabase";
import { SignUpForm } from "~/services/auth/auth.strategy";

export class Users {
  constructor(private readonly supabase: SupabaseClient) {}

  async createUser(user: SignUpForm): Promise<User> {
    try {
      const { data, error } = await this.supabase
        .from("users")
        .insert([user])
        .select("id,phone,first_name,last_name,avatar,created_at")
        .single<User>();
      if (error) {
        throw new Error(error?.details || "internal server error", {
          cause: error.cause,
        });
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getUserByPhone(
    phone: string
  ): Promise<Omit<User, "created_at"> | null> {
    try {
      const { data, error } = await this.supabase
        .from("users")
        .select("id,phone,first_name,last_name,avatar")
        .eq("phone", phone)
        .maybeSingle<User>();

      if (error) {
        throw new Error(error?.details || "bad request or not found");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(
    email: string
  ): Promise<Omit<User, "created_at"> | null> {
    try {
      const { data, error } = await this.supabase
        .from("users")
        .select("id,phone,first_name,last_name,avatar")
        .eq("email", email)
        .maybeSingle<User>();
      if (error) {
        throw new Error(error?.details || "bad request or not found");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      if (!import.meta.dev) {
        return createError({
          statusCode: 403,
          statusMessage: "not allowed in production",
        });
      }
      const { data, error } = await this.supabase.from("users").select("*");
      if (error || data?.error) {
        throw new Error(error?.details || "internal server error");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: number): Promise<User> {
    try {
      const { data, error } = await this.supabase
        .from("users")
        .select("id,email,phone,created_at,first_name,last_name,avatar")
        .eq("id", userId)
        .single<User>();
      if (error || data?.error) {
        throw new Error(error?.details || "bad request");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async removeUserById(userId: number): Promise<User | null> {
    try {
      const { data, error } = await this.supabase
        .from("users")
        .delete()
        .eq("id", userId)
        .select("id,phone,first_name,last_name,avatar,created_at")
        .single<User>();
      if (error) {
        throw new Error(error?.details || "bad request");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(
    userId: number,
    user: Omit<User, "id" | "created_at">
  ): Promise<User> {
    try {
      const { data, error } = await this.supabase
        .from("users")
        .update(user)
        .eq("id", userId)
        .select("id,phone,first_name,last_name,avatar,created_at")
        .single<User>();
      if (error) {
        throw new Error(error?.details || "bad request");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}
const users = new Users(supabase);
export default users;
