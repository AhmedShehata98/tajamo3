export type Event = {
  id: number;
  name: string;
  image: string;
  description: string;
  created_at: string;
  updated_at: string;
  start_at: string;
  end_at: string;
  location: string;
  location_type: LocationType;
  event_type: EventType;
  capacity: number;
  audience: AudienceType;
  longitude?: number;
  latitude?: number;
  company_id: number | null;
  created_by: number;
};

export type EventForm = Omit<
  Event,
  "id" | "created_at" | "updated_at" | "company_id" | "created_by"
>;

export type EventDetails = Event & {
  is_registered: boolean;
};

export enum EventType {
  EVENT = "event",
  WORKSHOP = "workshop",
  WEBINAR = "webinar",
}

export enum LocationType {
  ONLINE = "on-line",
  OFFLINE = "off-line",
}

export enum AudienceType {
  PUBLIC = "public",
  PRIVATE = "private",
}
