import type { TicketType, TicketTypeForm } from "~/types/ticket-type";

export interface EventCommand<T> {
  execute(): Promise<T>;
  undo(): Promise<void>;
}

export class TicketTypeCreateCommand implements EventCommand<TicketType> {
  private ticketTypeId: number | null = null;
  private cookies = useRequestHeader("Cookie");

  constructor(private readonly ticketType: TicketTypeForm[] | TicketTypeForm) {}

  async execute(): Promise<TicketType> {
    const createdTicketType = await fetch("/api/ticket-types", {
      method: "POST",
      body: JSON.stringify(this.ticketType),
      headers: {
        "Content-Type": "application/json",
        Cookie: this.cookies ?? "",
      },
    });
    const data = await createdTicketType.json();
    if (!createdTicketType.ok) {
      throw new Error(data.message || "Failed to create ticket type");
    }
    this.ticketTypeId = data.data.id;
    return data;
  }

  async undo(): Promise<void> {
    const deletedTicketType = await fetch(
      `/api/ticket-types/${this.ticketTypeId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: this.cookies ?? "",
        },
      }
    );
    if (!deletedTicketType.ok) {
      const data = await deletedTicketType.json();
      throw new Error(data.message || "Failed to delete ticket type");
    }
  }
}
