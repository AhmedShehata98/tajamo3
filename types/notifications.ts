export type Notifications = {
  id: number;
  title: string;
  type: NotificationType;
  description: string;
  is_read: boolean;
  created_at: string;
  user_id: number;
};

export type NotificationType = "urgent" | "info" | "done" | "warn";
