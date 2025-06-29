import type { User } from "./users";

export type Registration = {
  id: number;
  created_at: string;
  registered_at: string;
  event_id: number;
  user_id: number;
  attended: boolean;
  guest_phone: string;
  guest_name: string;
};

export type RegistrationCard = Omit<Registration, "user_id" | "user_id"> & {
  event: Event;
  user: User;
};
