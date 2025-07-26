import { d as defineEventHandler, h as getQuery, q as otp, R as ResponseSchema, c as createError } from '../../../_/nitro.mjs';
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
    if (event.method === "GET") {
      const body = getQuery(event);
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
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "internal server error"
    });
  }
});

export { index as default };
//# sourceMappingURL=index2.mjs.map
