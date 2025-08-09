import otp from "~/server/utils/otps";
import { ResponseSchema } from "~/server/utils/response-schema";
export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody<{ contact_source: string; code: string }>(
        event
      );
      if (!body.contact_source || !body.code) {
        throw new Error(
          "Please provide contact_source (Email or phone number) and otp code"
        );
      }
      const { contact_source, code } = body;
      const isVerified = await otp.verifyOtp(contact_source, code);

      return new ResponseSchema(
        isVerified.isValid,
        true,
        "OTP verified successfully"
      );
    }
    return createError({
      statusCode: 405,
      statusMessage: "method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "internal server error",
    });
  }
});
