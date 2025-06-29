import { QUERY_KEYS } from "~/constants/query-keys";
import type { Notifications } from "~/types/notifications";

class EventSourceSingleton {
  private static instance: EventSource | null = null;

  static getInstance(url: string): EventSource {
    if (!this.instance) {
      this.instance = new EventSource(url);
    }

    return this.instance;
  }

  static onMessage(callback: (event: MessageEvent) => void) {
    if (!this.instance) return;
    this.instance.onmessage = callback;
  }

  static onError(callback: (error: Event) => void) {
    if (!this.instance) return;
    this.instance.onerror = callback;
  }

  static close() {
    if (this.instance) {
      this.instance.close();
      this.instance = null;
    }
  }
}
const useNotifications = () => {
  const notifications = useState(QUERY_KEYS.NOTIFICATIONS, () =>
    ref<Notifications[]>([])
  );

  useFetch<{ data: Notifications[] }>("/api/notifications", {
    key: QUERY_KEYS.PREV_NOTIFICATIONS,
    onResponse: (response) => {
      if (!response.response.ok) return;
      const data = response.response._data as { data: Notifications[] };
      if (data && data.data.length > 0) {
        notifications.value = data.data;
      }
    },
  });

  const setup = () => {
    EventSourceSingleton.getInstance("/api/notifications/sse");
    EventSourceSingleton.onMessage((event) => {
      try {
        const notification = JSON.parse(event.data) as Notifications;
        notifications.value.unshift(notification);
      } catch (error) {
        if (import.meta.dev) {
          console.error("Error parsing notification data:", error);
        } else {
          console.error("Error parsing notification data");
        }
      }
      const data = JSON.parse(event.data);
    });

    EventSourceSingleton.onError((error) => {
      console.error("EventSource failed:", error);
    });
  };

  const clearAll = async () => {
    try {
      const response = await fetch("/api/notifications", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: notifications.value.map((n) => n.id) }),
      });

      if (!response.ok) {
        throw new Error("Failed to clear notifications");
      }

      notifications.value = [];
    } catch (error) {
      if (import.meta.dev) {
        console.error("Error clearing notifications:", error);
      } else {
        console.error("Error clearing notifications:");
      }
    }
  };

  const markAllAsRead = async () => {
    try {
      const response = await fetch("/api/notifications/all-as-read", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ids: notifications.value.map((n) => n.id),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to mark notifications as read");
      }

      notifications.value.forEach((n) => (n.is_read = true));
    } catch (error) {
      if (import.meta.dev) {
        console.error("Error marking notifications as read:", error);
      } else {
        console.error("Error marking notifications as read:");
      }
    }
  };

  return {
    notifications,
    count: computed(() => notifications.value.length),
    unreadCount: computed(
      () => notifications.value.filter((n) => !n.is_read).length
    ),
    setup,
    clearAll,
    markAllAsRead,
    close: EventSourceSingleton.close,
  };
};

export default useNotifications;
