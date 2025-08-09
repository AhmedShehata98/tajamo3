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

  private generateOtp() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async createOtp(contact_source: string, code: string) {
    try {
      const expires_at = this.toLocalISOStringWithTZ(
        new Date(Date.now() + 1000 * 60 * 5)
      );
      const now = this.toLocalISOStringWithTZ(new Date());
      const { data, error } = await this.supabase
        .from("otp_codes")
        .insert({
          code,
          contact_source,
          expires_at,
          created_at: now,
        })
        .select("id,contact_source,expires_at")
        .single<OtpType>();
      if (error) {
        if (error.message.match(/unique constraint/i)) {
          throw new Error("OTP already exists for this contact");
        }
        throw new Error(error?.message || "bad request");
      }
      return data;
    } catch (error) {
      throw new Error(error?.message || "internal server error");
    }
  }

  async deleteOtp(
    contact_source: string,
    code: string
  ): Promise<{ isDeleted: boolean }> {
    try {
      const { data, error } = await this.supabase
        .from("otp_codes")
        .delete()
        .eq("contact_source", contact_source)
        .eq("code", code)
        .select("id")
        .single();
      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return { isDeleted: Boolean(data) };
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
        .select("id,code,expires_at,contact_source,created_at,is_used")
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

  async verifyOtp(
    contact_source: string,
    code: string
  ): Promise<{ id: string | undefined; isValid: boolean }> {
    try {
      const { data, error } = await this.supabase
        .from("otp_codes")
        .select("*")
        .eq("contact_source", contact_source)
        .eq("code", code)
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) {
        throw new Error(error?.message || "bad request");
      }
      return {
        id: data?.[0]?.id as string | undefined,
        isValid: Boolean(data?.[0]?.contact_source) && Boolean(data?.[0]?.code),
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
}
const otp = new Otp(supabase);

export default otp;
