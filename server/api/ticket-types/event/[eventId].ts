import ticketTypes from "~/server/utils/ticket-types";

export default defineEventHandler(async (event) => {
  const eventId = getRouterParam(event, "eventId");
  if (!eventId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Event ID is required",
    });
  }

  try {
    switch (event.method) {
      case "GET":
        const ticketTypesData = await ticketTypes.getTicketTypesByEventId(
          Number(eventId)
        );
        return new ResponseSchema(
          ticketTypesData,
          true,
          "ticket types fetched successfully"
        );
      default:
        throw new Error("Method not allowed");
    }
  } catch (error) {
    if (import.meta.dev) {
      return createError({
        statusCode: 500,
        statusMessage:
          error instanceof Error
            ? error.message
            : "something went wrong while getting ticket types , please try again",
      });
    }
    return createError({
      statusCode: 500,
      statusMessage:
        "something went wrong while getting ticket types , please try again",
    });
  }
});
