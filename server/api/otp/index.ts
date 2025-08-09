import { sendVerifyEmail } from "~/server/utils/email";
import otp from "~/server/utils/otps";
import { ResponseSchema } from "~/server/utils/response-schema";
import { generateOtp } from "~/utils/generate-otp";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody<{ contact_source: string }>(event);
      const code = generateOtp();
      if (!body.contact_source) {
        throw new Error(
          "Contact source ( email or phone number ) and code is required."
        );
      }
      const otpCode = await otp.createOtp(body.contact_source, code.toString());

      await sendVerifyEmail({
        email: decodeURIComponent(body.contact_source),
        otp: code.toString(),
      });

      return new ResponseSchema(otpCode, true, "OTP created successfully");
    }

    if (event.method === "DELETE") {
      const body = await readBody<{ contact_source: string; code: string }>(
        event
      );
      if (!body.contact_source || !body.code) {
        throw new Error("Contact source and code are required.");
      }
      const deleted = await otp.deleteOtp(body.contact_source, body.code);
      if (!deleted) {
        throw new Error(
          "Failed to delete OTP. Please check the contact source and code."
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
