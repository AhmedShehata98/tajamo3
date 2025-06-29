import otp from "~/server/utils/otps";
import { ResponseSchema } from "~/server/utils/response-schema";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "GET") {
      const body = getQuery<{ phoneNumber: string; code: string }>(event);
      if (!body || !body.phoneNumber) {
        throw new Error("Phone number is required.");
      }

      const otpCode = await otp.getByPhoneNumber(body.phoneNumber, body.code);

      if (!otpCode) {
        throw new Error("No OTP found for the provided phone number.");
      }

      return new ResponseSchema(otpCode, true, "OTP retrieved successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "internal server error",
    });
  }
});
