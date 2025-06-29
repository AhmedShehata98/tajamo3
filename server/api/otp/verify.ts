import otp from "~/server/utils/otps";
import { ResponseSchema } from "~/server/utils/response-schema";
export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody(event);
      if (!body || Object.values(body)?.some((value) => !value)) {
        throw new Error("bad request");
      }
      const { phone, code } = body;
      const isVerified = await otp.verifyOtp(phone, code);
      if (isVerified?.id) {
        await otp.deleteOtp(phone, code);
      }

      return new ResponseSchema(isVerified, true, "OTP verified successfully");
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
