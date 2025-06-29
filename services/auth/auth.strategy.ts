import type { ResponseSchemaType } from "~/server/utils/response-schema";
import type { Otp as OtpType } from "~/types/otps";
import type { User, UserForm } from "~/types/users";
export type AuthFormArgs = {
  resource: string;
  otp: string;
};
export type AuthForm = {
  resource: string;
  otp: OtpType;
};
export interface AuthOTPStrategy {
  sendOtp(resource: string): Promise<AuthForm>;
  verifyOtp(form: AuthFormArgs): Promise<boolean>;
  createToken(userId: number): Promise<string>;
  createUser(form: UserForm): Promise<User>;
  getUserByPhoneNumber(phoneNumber: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
  removeOtp(otpId: number): Promise<OtpType>;
}

class PhoneAuthStrategy implements AuthOTPStrategy {
  async sendOtp(phoneNumber: string): Promise<AuthForm> {
    try {
      const res = await fetch(`/api/otp`, {
        method: "POST",
        body: JSON.stringify({
          phoneNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to send OTP.");
      }
      return {
        resource: phoneNumber,
        otp: data.data,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while sending OTP."
      );
    }
  }
  async verifyOtp(form: AuthFormArgs): Promise<boolean> {
    try {
      const res = await fetch(
        `/api/otp/verify-phone?phoneNumber=${form.resource}&code=${form.otp}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to verify OTP.");
      }

      if (data && data.data.code === form.otp) {
        const updateRes = await fetch(`/api/otp`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data.data,
            is_used: true,
          }),
        });
        const updatedOtp = await updateRes.json();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while verifying OTP."
      );
    }
  }
  async createToken(userId: number): Promise<string> {
    try {
      const res = await fetch("/api/auth/gen-token", {
        method: "POST",
        body: JSON.stringify({
          id: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create token.");
      }
      return data.data as string;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while creating token."
      );
    }
  }
  async createUser(form: UserForm): Promise<User> {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while signing up."
      );
    }
  }
  async getUserByEmail(email: string): Promise<User> {
    try {
      const res = await fetch(`/api/users/email?email=${email}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by email.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async getUserByPhoneNumber(phoneNumber: string): Promise<User> {
    try {
      const res = await fetch(`/api/users/phone?phoneNumber=${phoneNumber}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by phone.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async removeOtp(otpId: number): Promise<OtpType> {
    try {
      const res = await fetch(`/api/otp/${otpId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.statusText || "Failed to remove user.");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
}

class EmailAuthStrategy implements AuthOTPStrategy {
  async sendOtp(email: string): Promise<AuthForm> {
    try {
      const res = await fetch(`/api/otp`, {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to send OTP.");
      }
      return {
        resource: email,
        otp: data.data,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while sending OTP."
      );
    }
  }
  async verifyOtp(form: AuthFormArgs): Promise<boolean> {
    try {
      const res = await fetch(`/api/otp/verify-email?email=${form.resource}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to verify OTP.");
      }
      if (data && data.data.code === form.otp) {
        // TODO: Check date if expired
        return true; // OTP is valid
      } else {
        return false; // OTP is invalid;
      }
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while verifying OTP."
      );
    }
  }
  async createToken(userId: number): Promise<string> {
    try {
      const res = await fetch("/api/auth/gen-token", {
        method: "POST",
        body: JSON.stringify({
          id: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create token.");
      }
      return data.data as string;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while creating token."
      );
    }
  }
  async createUser(form: UserForm): Promise<User> {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while signing up."
      );
    }
  }
  async getUserByEmail(email: string): Promise<User> {
    try {
      const res = await fetch(`/api/users/email?email=${email}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by email.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async getUserByPhoneNumber(phoneNumber: string): Promise<User> {
    try {
      const res = await fetch(`/api/users/phone?phoneNumber=${phoneNumber}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by email.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async removeOtp(otpId: number): Promise<OtpType> {
    try {
      const res = await fetch(`/api/otp/${otpId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.statusText || "Failed to remove user.");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
}

export { PhoneAuthStrategy, EmailAuthStrategy };
