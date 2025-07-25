export default defineEventHandler(async (event) => {
  try {
    const guestPhone = getRouterParam(event, "guestPhone");

    if (!guestPhone) {
      return createError({
        statusCode: 400,
        statusMessage: "Guest phone is required",
      });
    }

    if (event.method === "GET") {
      const data = await registrations.getRegistrationsAsGuest(guestPhone);
      return data;
    }

    if (event.method === "PATCH") {
      const body = await readBody(event);
      if (!body.event_id) {
        return createError({
          statusCode: 400,
          statusMessage: "Event ID is required",
        });
      }
      const data = await registrations.updateRegistrationMarkUserAsAttended(
        body.event_id
      );
      return data;
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: error instanceof Error ? error.statusCode : 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
