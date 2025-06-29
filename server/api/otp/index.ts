import otp from "~/server/utils/otps";
import { ResponseSchema } from "~/server/utils/response-schema";
import { Otp as OtpType } from "~/types/otps";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "PATCH") {
      const body = await readBody<OtpType>(event);

      const updatedOtp = await otp.updateOtp(body);
      if (!updatedOtp) {
        throw new Error("Failed to update OTP.");
      }
      return new ResponseSchema(updatedOtp, true, "OTP updated successfully");
    }
    if (event.method === "POST") {
      const body = await readBody<{ phoneNumber: string }>(event);
      if (!body || !body.phoneNumber) {
        throw new Error("Phone number is required.");
      }

      const otpCode = await otp.createOtp(body.phoneNumber);
      return new ResponseSchema(otpCode, true, "OTP created successfully");
    }

    if (event.method === "DELETE") {
      const body = await readBody<{ phoneNumber: string; code: string }>(event);
      if (!body || !body.phoneNumber || !body.code) {
        throw new Error("Phone number and code are required.");
      }
      const deleted = await otp.deleteOtp(body.phoneNumber, body.code);
      if (!deleted) {
        throw new Error(
          "Failed to delete OTP. Please check the phone number and code."
        );
      }

      return new ResponseSchema(deleted, true, "OTP deleted successfully");
    }

    return createError({
      statusCode: 405,
      statusMessage: "method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error?.message : "internal server error",
    });
  }
});
