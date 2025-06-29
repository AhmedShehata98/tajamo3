export type User = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  is_verified?: boolean;
  created_at?: string;
  avatar?: string;
  email: string;
  country: string;
  city: string;
};

export type UserForm = Omit<User, "id" | "created_at" | "is_verified">;
