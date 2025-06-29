import { Notifications as NotificationsType } from "~/types/notifications";

export class Notifications {
  private readonly supabase: SupabaseClient;

  constructor(supabase: SupabaseClient) {
    this.supabase = supabase;
  }

  async getNotifications(userId: number) {
    const { data, error } = await this.supabase
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Error fetching notifications: ${error.message}`);
    }

    return data;
  }

  async createNewNotification(
    data: Omit<NotificationsType, "id" | "created_at">
  ) {
    const { data: createdNotification, error } = await this.supabase
      .from("notifications")
      .insert(data)
      .select("*")
      .single<NotificationsType>();

    if (error) {
      throw new Error(`Error creating notification: ${error.message}`);
    }

    return createdNotification;
  }

  async markAsRead(notificationIds: number[]) {
    console.log(notificationIds);
    const { data, error } = await this.supabase
      .from("notifications")
      .update({ is_read: true })
      .in("id", notificationIds)
      .select("*");

    if (error) {
      throw new Error(`Error marking notification as read: ${error.message}`);
    }

    return data;
  }

  async deleteNotifications(notificationIds: string[]) {
    const { data, error } = await this.supabase
      .from("notifications")
      .delete()
      .in("id", notificationIds);

    if (error) {
      throw new Error(`Error deleting notifications: ${error.message}`);
    }

    return data;
  }

  async updateNotification(
    notificationId: number,
    updates: Partial<Omit<NotificationsType, "id" | "created_at">>
  ) {
    const { data, error } = await this.supabase
      .from("notifications")
      .update(updates)
      .eq("id", notificationId)
      .select("*")
      .single<NotificationsType>();

    if (error) {
      throw new Error(`Error updating notification: ${error.message}`);
    }

    return data;
  }
}

export default new Notifications(supabase);
