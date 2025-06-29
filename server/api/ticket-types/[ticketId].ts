import ticketTypes from "~/server/utils/ticket-types";

export default defineEventHandler(async (event) => {
  const ticketId = getRouterParam(event, "ticketId");
  if (!ticketId) {
    throw createError({
      statusCode: 400,
      statusMessage: "Ticket ID is required",
    });
  }

  try {
    switch (event.method) {
      case "GET":
        const ticketData = await ticketTypes.getTicketTypeById(
          Number(ticketId)
        );
        return new ResponseSchema(
          ticketData,
          true,
          "ticket fetched successfully"
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
