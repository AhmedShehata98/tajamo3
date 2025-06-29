import otp from "~/server/utils/otps";
import {ResponseSchema} from "~/server/utils/response-schema";

export default defineEventHandler(async (event)=>{
    try {
        if (event.method === "GET") {
            const body = getQuery<{ email: string }>(event);
            if (!body || !body.email) {
                throw new Error("Email is required.");
            }

            const otpCode = await otp.getByEmail(body.email);
            if (!otpCode) {
                throw new Error("No OTP found for the provided Email Address.");
            }

            return new ResponseSchema(otpCode, true, "OTP retrieved successfully");
        }
        return createError({
            statusCode: 405,
            statusMessage: "Method not allowed"
        });
    }catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: error instanceof Error ? error.message : "Internal server error"
        });
    }
})