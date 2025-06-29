export default defineEventHandler(async (event) => {
  try {
    const userId = getRouterParam(event, "userId");
    if (!userId) {
      return createError({
        statusCode: 400,
        statusMessage: "User ID is required",
      });
    }

    if (event.method === "GET") {
      const data = await registrations.getRegistrationsAsUser(userId);
      return data;
    }

    if (event.method === "PATCH") {
      const data = await registrations.updateRegistrationMarkUserAsAttended(
        userId
      );
      return data;
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    createError({
      statusCode: error instanceof Error ? error.statusCode : 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
