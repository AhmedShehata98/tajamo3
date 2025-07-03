import ticketTypes from "~/server/utils/ticket-types";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("body: ", body);

  try {
    switch (event.method) {
      case "POST":
        const createdTicketType = await ticketTypes.createTicketTypes(body);

        return new ResponseSchema(
          createdTicketType,
          true,
          "Ticket type created successfully"
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
            : "something went wrong while creating ticket types , please try again",
      });
    }
    return createError({
      statusCode: 500,
      statusMessage:
        "something went wrong while creating ticket types , please try again",
    });
  }
});
