import type { ResponseSchemaType } from "~/server/utils/response-schema";
import type { TicketTypeForm, TicketType } from "~/types/ticket-type";

export async function createTicketType(
  ticketTypeForm: TicketTypeForm
): Promise<TicketType> {
  try {
    const res = await $fetch<TicketType>("/api/ticket-types", {
      method: "POST",
      body: JSON.stringify(ticketTypeForm),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to create ticket type");
  }
}

export async function getTicketType(
  id: number
): Promise<ResponseSchemaType<TicketType>> {
  try {
    const res = await fetch(`/api/ticket-types/${id}`);
    if (!res.ok) {
      throw new Error("Failed to get ticket type");
    }
    const data = await res.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to get ticket type"
    );
  }
}
