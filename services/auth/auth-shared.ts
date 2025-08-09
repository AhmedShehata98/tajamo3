import type { ResponseSchemaType } from "~/types/backend-response";
import type { Otp } from "~/types/otps";
import type { User } from "~/types/users";

const deleteOtp = async ({
  contact_source,
  code,
}: {
  contact_source: string;
  code: string;
}) => {
  try {
    const res = await fetch("/api/otp", {
      method: "DELETE",
      body: JSON.stringify({
        contact_source,
        code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok)
      throw new Error("Failed to delete otp code, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

const getUserByEmail = async (
  email: string
): Promise<{ isExists: boolean }> => {
  try {
    const res = await fetch(`/api/users/check-existing?email=${email}`);
    if (!res.ok) throw new Error("Failed to fetch user, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

const getUserByPhone = async (
  phoneNumber: string
): Promise<{ isExists: boolean }> => {
  try {
    const res = await fetch(`/api/users/check-existing?phone=${phoneNumber}`);
    if (!res.ok) throw new Error("Failed to fetch user, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

const getMeData = async (): Promise<ResponseSchemaType<User>> => {
  try {
    const res = await fetch("/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to get user data, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

const generateToken = async (contact_source: string) => {
  try {
    const res = await fetch("/api/auth/gen-token", {
      method: "POST",
      body: JSON.stringify({
        contact_source,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to create token, " + res.statusText);
    const data = await res.json();
    return data?.token;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

const createOtpCode = async ({
  contact_source,
}: {
  contact_source: string;
}): Promise<ResponseSchemaType<Otp>> => {
  try {
    const res = await fetch("/api/otp", {
      method: "POST",
      body: JSON.stringify({
        contact_source: contact_source,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok)
      throw new Error("Failed to create otp code, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

const verifyOtpCode = async ({
  contact_source,
  code,
}: {
  contact_source: string;
  code: string;
}) => {
  try {
    const res = await fetch("/api/otp/verify", {
      method: "POST",
      body: JSON.stringify({
        contact_source,
        code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok)
      throw new Error("Failed to verify otp code, " + res.statusText);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

export {
  deleteOtp,
  generateToken,
  createOtpCode,
  verifyOtpCode,
  getMeData,
  getUserByEmail,
  getUserByPhone,
};
