import {
  createOtpCode,
  deleteOtp,
  generateToken,
  getUserByEmail,
  getUserByPhone,
  verifyOtpCode,
} from "./auth-shared";

const createUser = async ({
  email,
  phoneNumber,
  firstName,
  lastName,
}: {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
}) => {
  try {
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        email,
        phone: phoneNumber,
        first_name: firstName,
        last_name: lastName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to create user");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

export const sendRegisterOtpCodeFacade = async ({
  email,
  phoneNumber,
}: {
  email: string;
  phoneNumber: string;
}) => {
  try {
    const userByEmail = await getUserByEmail(email);
    const userByPhone = await getUserByPhone(phoneNumber);

    if (userByEmail?.isExists) throw new Error("Email already exists");
    if (userByPhone?.isExists) throw new Error("Phone number already exists");
    const otpData = await createOtpCode({
      contact_source: email,
    });
    return { success: otpData.data };
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

export const validateOtpWithCreateUserFacade = async ({
  email,
  phoneNumber,
  firstName,
  lastName,
  otp,
}: {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  otp: string;
}) => {
  try {
    const isOtpValid = await verifyOtpCode({
      contact_source: email,
      code: otp,
    });

    if (!isOtpValid.data) throw new Error("OTP is invalid");

    await deleteOtp({
      contact_source: email,
      code: otp,
    });

    const user = await createUser({
      email,
      phoneNumber,
      firstName,
      lastName,
    });

    if (!user) throw new Error("Failed to create user");

    await generateToken(email);

    return {
      message: "OTP sent successfully ,Check your email address",
      success: Boolean(isOtpValid.data) && Boolean(user.data),
    };
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};
