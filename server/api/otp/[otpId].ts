export default defineEventHandler(async (event) => {
  const otpId = getRouterParam(event, "otpId");

  if (!otpId) {
    return createError({
      statusCode: 400,
      statusMessage: "OTP ID is required",
    });
  }

  try {
    if (event.method === "DELETE") {
      const otp = await otps.removeById(Number(otpId));
      if (!otp) {
        return createError({
          statusCode: 404,
          statusMessage: "OTP not found",
        });
      }
      return new ResponseSchema(otp, true, "OTP fetched successfully");
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
