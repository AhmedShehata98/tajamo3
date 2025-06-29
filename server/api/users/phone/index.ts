export default defineEventHandler(async (event) => {
  try {
    if (event.method === "GET") {
      const query = getQuery<{ phoneNumber: string }>(event);
      if (!query.phoneNumber) {
        return createError({
          statusCode: 400,
          message: "Phone number is required",
        });
      }
      const res = await users.getUserByPhone(query.phoneNumber);
      if (!res) {
        return createError({
          statusCode: 404,
          message: "User not found with this phone number",
        });
      }
      return new ResponseSchema(res, true, "Founded user successfully");
    }
    return createError({
      statusCode: 405,
      message: "method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : "internal server error",
    });
  }
});
