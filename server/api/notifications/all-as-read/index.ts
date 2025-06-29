export default defineEventHandler(async (event) => {
  try {
    if (event.method === "PATCH") {
      const body = await readBody<{ ids: number[] }>(event);
      if (!body?.ids || !Array.isArray(body.ids)) {
        return createError({
          statusCode: 400,
          statusMessage: "Invalid request body - 'ids' must be an array",
        });
      }
      const markedAsRead = await notifications.markAsRead(body.ids);
      return new ResponseSchema(
        markedAsRead,
        true,
        "Notifications marked as read successfully"
      );
    }
  } catch (error) {
    if (import.meta.dev) {
      console.error("Error in notifications/all-as-read:", error);
    }
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal Server Error",
    });
  }
});
