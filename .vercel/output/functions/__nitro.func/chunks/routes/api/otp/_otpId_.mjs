import { d as defineEventHandler, m as getRouterParam, c as createError, q as otp, R as ResponseSchema } from '../../../_/nitro.mjs';
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

const _otpId_ = defineEventHandler(async (event) => {
  const otpId = getRouterParam(event, "otpId");
  if (!otpId) {
    return createError({
      statusCode: 400,
      statusMessage: "OTP ID is required"
    });
  }
  try {
    if (event.method === "DELETE") {
      const otp$1 = await otp.removeById(Number(otpId));
      if (!otp$1) {
        return createError({
          statusCode: 404,
          statusMessage: "OTP not found"
        });
      }
      return new ResponseSchema(otp$1, true, "OTP fetched successfully");
    }
    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed"
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : "Internal server error"
    });
  }
});

export { _otpId_ as default };
//# sourceMappingURL=_otpId_.mjs.map
