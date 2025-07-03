import type { Event as EventType, EventForm } from "~/types/events";

export interface EventCommand<T> {
  execute(): Promise<T>;
  undo(): Promise<void>;
}

export class EventCreateCommand implements EventCommand<EventType> {
  private eventId: number | null = null;
  private cookies = useRequestHeader("Cookie");

  constructor(private readonly event: EventForm) {}

  async execute(): Promise<EventType> {
    const createdEvent = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(this.event),
      headers: {
        "Content-Type": "application/json",
        Cookie: this.cookies ?? "",
      },
    });
    const data = await createdEvent.json();
    if (!createdEvent.ok) {
      throw new Error(data.message || "Failed to create event");
    }
    this.eventId = data.data.id;
    return data?.data;
  }

  async undo(): Promise<void> {
    const deletedEvent = await fetch(`/api/events/${this.eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: this.cookies ?? "",
      },
    });
    if (!deletedEvent.ok) {
      const data = await deletedEvent.json();
      throw new Error(data.message || "Failed to delete event");
    }
  }
}
