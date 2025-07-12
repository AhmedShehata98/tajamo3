export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "userId");

  try {
    if (event.method === "GET") {
      if (!userId) {
        throw createError({
          statusCode: 400,
          statusMessage: "User ID is required",
        });
      }

      console.log("=======================");
      console.log(userId);

      const tickets = await ticket.getTicketsByUserId(Number(userId));

      if (!tickets || tickets.length === 0) {
        return createError({
          statusCode: 404,
          statusMessage: "Tickets not found for the given user ID",
        });
      }

      return new ResponseSchema(
        tickets,
        true,
        "Tickets retrieved successfully"
      );
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
