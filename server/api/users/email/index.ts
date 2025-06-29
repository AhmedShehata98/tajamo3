export default defineEventHandler(async (event) => {
  try {
    if (event.method === "GET") {
      const query = getQuery<{ email: string }>(event);
      if (!query.email) {
        return createError({
          statusCode: 400,
          message: "Email is required",
        });
      }
      const res = await users.getUserByEmail(query.email);
      if (!res) {
        return createError({
          statusCode: 404,
          message: "User not found with this email",
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
