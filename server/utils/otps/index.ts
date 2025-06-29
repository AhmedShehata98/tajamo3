import supabase from "~/server/utils/supabase";
import type { Otp as OtpType } from "~/types/otps";
export class Otp {
  constructor(private readonly supabase: SupabaseClient) {}
  private toLocalISOStringWithTZ(date = new Date()) {
    const pad = (n) => String(n).padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    const tzOffset = -date.getTimezoneOffset(); // in minutes
    const sign = tzOffset >= 0 ? "+" : "-";
    const tzHours = pad(Math.floor(Math.abs(tzOffset) / 60));
    const tzMinutes = pad(Math.abs(tzOffset) % 60);

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${sign}${tzHours}:${tzMinutes}`;
  }

  private generateOtp(length: number = 6) {
    return Math.floor(
      10 ** (length - 1) + Math.random() * 9 * 10 ** (length - 1)
    ).toString();
  }
  async createOtp(phone: string) {
    try {
      const otp = this.generateOtp();
      const expires_at = this.toLocalISOStringWithTZ(
        new Date(Date.now() + 1000 * 60 * 5)
      );
      const now = this.toLocalISOStringWithTZ(new Date());
      const { data, error } = await this.supabase
        .from("otp_codes")
        .insert({
          code: otp,
          phone,
          expires_at,
          created_at: now,
        })
        .select("id,code,phone,expires_at,created_at")
        .single<{
          id: string;
          code: string;
          expires_at: string;
          phone: string;
          created_at: string;
        }>();
      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return data;
    } catch (error) {
      throw new Error(error?.message || "internal server error");
    }
  }

  async deleteOtp(phone: string, code: string) {
    try {
      const { data, error } = await this.supabase
        .from("otp_codes")
        .delete()
        .eq("phone", phone)
        .eq("code", code)
        .select("id")
        .single();
      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }

  async removeById(id: number): Promise<OtpType | null> {
    try {
      const { data, error } = await this.supabase
        .from("otp_codes")
        .delete()
        .eq("id", id)
        .select("id,code,expires_at,phone,created_at,is_used")
        .single<OtpType>();

      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }

  async updateOtp(form: OtpType): Promise<OtpType> {
    try {
      const { id, ...rest } = form;
      const { data, error } = await this.supabase
        .from("otp_codes")
        .update(rest)
        .eq("id", id)
        .select("id,code,expires_at,phone,created_at,is_used")
        .single<OtpType>();

      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async getByPhoneNumber(phone: string, code: string): Promise<OtpType | null> {
    try {
      const now = this.toLocalISOStringWithTZ(new Date());

      const { data, error } = await this.supabase
        .from("otp_codes")
        .select("id,code,expires_at,phone,created_at")
        .eq("phone", phone)
        .eq("code", code)
        .single<OtpType>();

      if (error) {
        throw new Error(error?.message || "bad request");
      }
      if (!data) {
        throw new Error("OTP not found");
      }
      if (now > data.expires_at) {
        throw new Error("OTP expired, try to generate a new one");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(email: string): Promise<OtpType | null> {
    try {
      const now = this.toLocalISOStringWithTZ(new Date());

      const { data, error } = await this.supabase
        .from("otp_codes")
        .select("id,code,expires_at")
        .eq("email", email)
        .single<OtpType>();

      if (data && now > data?.expires_at) {
        throw new Error("OTP expired try to generate a new one");
      }
      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }

  async verifyOtp(
    phone: string,
    code: string
  ): Promise<{ id: string | undefined }> {
    try {
      const { data, error } = await this.supabase
        .from("otp_codes")
        .select("id")
        .eq("phone", phone)
        .eq("code", code)
        .order("created_at", { ascending: false })
        .limit(1);
      console.log(data);
      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return { id: data?.[0]?.id as string | undefined };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
}
const otp = new Otp(supabase);

export default otp;
