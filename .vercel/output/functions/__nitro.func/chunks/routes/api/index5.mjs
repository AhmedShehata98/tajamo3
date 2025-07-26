import { d as defineEventHandler, r as readBody, q as otp, R as ResponseSchema, c as createError } from '../../_/nitro.mjs';
import 'jsonwebtoken';
import '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const index = defineEventHandler(async (event) => {
  try {
    if (event.method === "PATCH") {
      const body = await readBody(event);
      const updatedOtp = await otp.updateOtp(body);
      if (!updatedOtp) {
        throw new Error("Failed to update OTP.");
      }
      return new ResponseSchema(updatedOtp, true, "OTP updated successfully");
    }
    if (event.method === "POST") {
      const body = await readBody(event);
      if (!body || !body.phoneNumber) {
        throw new Error("Phone number is required.");
      }
      const otpCode = await otp.createOtp(body.phoneNumber);
      return new ResponseSchema(otpCode, true, "OTP created successfully");
    }
    if (event.method === "DELETE") {
      const body = await readBody(event);
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
      statusMessage: "method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error == null ? void 0 : error.message : "internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index5.mjs.map
