import { d as defineEventHandler, r as readBody, q as otp, R as ResponseSchema, c as createError } from '../../../_/nitro.mjs';
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

const verify = defineEventHandler(async (event) => {
  var _a;
  try {
    if (event.method === "POST") {
      const body = await readBody(event);
      if (!body || ((_a = Object.values(body)) == null ? void 0 : _a.some((value) => !value))) {
        throw new Error("bad request");
      }
      const { phone, code } = body;
      const isVerified = await otp.verifyOtp(phone, code);
      if (isVerified == null ? void 0 : isVerified.id) {
        await otp.deleteOtp(phone, code);
      }
      return new ResponseSchema(isVerified, true, "OTP verified successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "internal server error"
    });
  }
});

export { verify as default };
//# sourceMappingURL=verify.mjs.map
