<template>
  <div
    class="relative flex gap-3 p-3 rounded-sm bg-secondary backdrop-blur-md border border-border"
  >
    <span
      v-show="!notification.is_read"
      class="absolute -top-1 right-1 size-3 shadow-lg rounded-full bg-emerald-500 flex items-center justify-center"
    >
    </span>
    <Icon
      :name="notificationIconStrategy(notification.type)"
      class="text-4xl shrink-0"
      :class="notificationIconBgStrategy(notification.type)"
    />
    <div class="flex flex-col gap-1">
      <p class="text-text-primary text-sm font-medium capitalize">
        {{ notification.title }}
      </p>
      <p class="text-xs text-text-secondary capitalize">
        {{ notification.description }}
      </p>
      <time
        :datetime="notification.created_at"
        class="text-xs text-text-secondary capitalize mt-2"
      >
        {{
          Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(notification.created_at))
        }}
      </time>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Notifications, NotificationType } from "~/types/notifications";

const props = defineProps<{
  notification: Notifications;
}>();

const notificationIconBgStrategy = (type: NotificationType) => {
  switch (type) {
    case "done":
      return "text-green-700";
    case "urgent":
      return "text-red-700";
    case "warn":
      return "text-orange-500";
    case "info":
      return "text-blue-500";
  }
};

const notificationIconStrategy = (type: NotificationType) => {
  switch (type) {
    case "done":
      return "solar:check-square-bold";
    case "urgent":
      return "solar:danger-square-bold";
    case "warn":
      return "solar:shield-warning-bold";
    case "info":
      return "solar:info-square-bold";
  }
};
</script>
