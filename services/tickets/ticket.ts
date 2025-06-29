import type { Ticket, TicketForm } from "~/types/tickets";

export async function createTicket(ticket: TicketForm) {
  try {
    const res = await $fetch<Ticket>("/api/tickets", {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to create ticket");
  }
}
