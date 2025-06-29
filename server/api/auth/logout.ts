export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      setCookie(event, "token", "", {
        httpOnly: true,
        secure: true,
        maxAge: 0,
        path: "/",
      });
      return new ResponseSchema(null, true, "Logged out successfully");
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "internal server error",
    });
  }
});
