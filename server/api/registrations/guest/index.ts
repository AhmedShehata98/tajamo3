export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (event.method === "POST") {
      if (!body.guest_phone || !body.guest_name || !body.event_id) {
        return createError({
          statusCode: 400,
          statusMessage: "Missing required fields phone, name, event_id",
        });
      }
      const data = await registrations.createGuestRegistration({
        guest_phone: body.guest_phone,
        guest_name: body.guest_name,
        event_id: body.event_id,
      });
      return data;
    }
  } catch (error) {
    createError({
      statusCode: error instanceof Error ? error.statusCode : 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
