import { Users } from "~/server/utils/users";
import { Otp } from "../otps";
import supabase from "~/server/utils/supabase";
import { User } from "~/types/users";
import jwt from "jsonwebtoken";
import { TokenPayload } from "~/types/tokens";

class Auth {
  constructor(private readonly users: Users, private readonly otps: Otp) {}

  async login(phone: string) {
    try {
      const user = await this.users.getUserByPhone(phone);

      if (!user) {
        throw new Error("there is no user with this phone number");
      }
      const oldOtp = await this.otps.getByPhoneNumber(phone);
      if (oldOtp?.id) {
        await this.otps.deleteOtp(phone, oldOtp.code);
      }
      const otp = await this.otps.createOtp(phone);
      if (!otp?.id) {
        throw new Error("Failed to send OTP");
      }
      if (import.meta.dev) {
        return {
          userId: user?.id,
          phone: user?.phone,
          otpId: otp.id,
          otpCode: otp.code,
        };
      }
      return {
        phone: user?.phone,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }

  async register(data: Omit<User, "id" | "created_at">) {
    const jwtSecret = useRuntimeConfig().jwtSecret;
    try {
      const user = await this.users.createUser(data);
      if (!user?.id) {
        throw new Error("Failed to create user");
      }
      const token = jwt.sign({ id: user.id } as TokenPayload, jwtSecret, {
        expiresIn: "8h",
      });

      if (import.meta.dev) {
        return {
          userId: user.id,
          phone: data.phone,
          token,
        };
      }
      return {
        phone: data.phone,
        token,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Internal server error"
      );
    }
  }
}

export default new Auth(new Users(supabase), new Otp(supabase));
