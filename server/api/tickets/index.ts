import { ticket } from "~/server/utils/tickets";
import { TicketForm, Ticket } from "~/types/tickets";

export default defineEventHandler(async (event) => {
  try {
    if (event.method === "POST") {
      const body = await readBody<TicketForm>(event);
      const ticketResponse = await ticket.createTicket(body);
      if (!ticketResponse) {
        return createError({
          statusCode: 400,
          statusMessage: "Ticket creation failed",
        });
      }
      return new ResponseSchema<Ticket>(
        ticketResponse,
        true,
        "Ticket created successfully"
      );
    }

    return createError({
      statusCode: 405,
      statusMessage: "Method not allowed",
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        error instanceof Error ? error.message : "Internal server error",
    });
  }
});
