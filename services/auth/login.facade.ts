import { createOtpCode, getUserByEmail } from "./auth-shared";

const loginByEmailFacade = async (email: string) => {
  const otp = generateOtp();
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error("User not found with this email or not registered");
    }

    const otpData = await createOtpCode({
      contact_source: email,
    });

    return {
      isSuccess: Boolean(user) && Boolean(otpData),
      user: user.data,
    };
  } catch (error) {
    throw error instanceof Error ? error : new Error("Internal server error");
  }
};

export { loginByEmailFacade };
