import { Event, EventForm } from "~/types/events";

export class Events {
  constructor(private readonly db: SupabaseClient) {}
  private _eventSelectedFields =
    "id, name,description, created_at, updated_at, start_at, event_type, location_type, end_at,image , location,  event_type, capacity, company_id, created_by";

  async createEvent(event: EventForm) {
    const { data, error } = await this.db
      .from("events")
      .insert(event)
      .select(this._eventSelectedFields)
      .single<Event>();
    if (error) throw new Error(error?.message);
    return data;
  }

  async getEvents({
    limit = 10,
    offset = 0,
    order = "created_at",
    direction = "desc",
    orderBy = "created_at",
    search = undefined,
    eventType = undefined,
    myEvents = false,
    userId,
  }: {
    limit?: number;
    offset?: number;
    order?: string;
    direction?: "desc" | "asc";
    orderBy?: string;
    search?: string;
    eventType?: string;
    myEvents?: boolean;
    userId: number;
  }) {
    console.log(search, eventType);
    const toOffset = offset + limit - 1;
    let queryBuilder = this.db.from("events").select(this._eventSelectedFields);

    if (search && search.trim() !== "") {
      queryBuilder.textSearch("name", search);
    }

    if (eventType && eventType.trim() !== "all") {
      queryBuilder.eq("event_type", eventType);
    }

    if (myEvents) {
      queryBuilder.eq("created_by", userId);
    }

    if (orderBy) {
      queryBuilder.order(orderBy, { ascending: direction === "asc" });
    }

    const { data, error } = await queryBuilder.range(offset, toOffset);

    if (error) throw new Error(error?.message);
    return data;
  }

  async getEventById(id: number) {
    const { data, error } = await this.db
      .from("events")
      .select(this._eventSelectedFields)
      .eq("id", id)
      .maybeSingle<Event>();
    if (error) throw new Error(error?.message);
    return data;
  }

  async getEventDetails({
    eventId,
    userId,
  }: {
    eventId: number;
    userId: number;
  }) {
    const { data, error } = await this.db
      .rpc("get_event_details_for_user", {
        target_event_id: eventId,
        target_user_id: userId,
      })
      .maybeSingle();
    console.log("data:", data);
    console.log("error:", error);
    if (error) throw new Error(error?.message);
    return data;
  }
  async updateEvent(id: number, event: Partial<Event>) {
    const { data, error } = await this.db
      .from("events")
      .update(event)
      .eq("id", id)
      .select(this._eventSelectedFields)
      .single<Event>();
    if (error) throw new Error(error?.message);
    return data;
  }

  async deleteEvent(id: number) {
    const { data, error } = await this.db
      .from("events")
      .delete()
      .eq("id", id)
      .select("id")
      .single<{ id: number }>();
    if (error) throw new Error(error?.message);
    return data;
  }
}

export const events = new Events(supabase);
