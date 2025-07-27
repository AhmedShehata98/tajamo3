<template>
  <UiSheet style="background-image: url('/images/dashboard-bg.webp')">
    <UiSheetTrigger as-child>
      <slot />
    </UiSheetTrigger>
    <UiSheetContent>
      <UiSheetHeader
        class="flex items-center justify-between flex-row py-4 mt-8 w-full max-w-full"
      >
        <UiSheetTitle>Notifications</UiSheetTitle>
        <button
          type="button"
          class="text-sm text-accent capitalize"
          @click="async () => await markAllAsRead()"
          :disabled="inPendingMarkAllAsRead"
          v-if="unreadCount > 0"
        >
          <span v-if="!inPendingMarkAllAsRead" class="flex items-center gap-2">
            <p class="text-inherit font-semibold">mark all as read</p>
            <Icon name="lucide:check" class="inline-block" />
          </span>
          <Icon
            v-else
            name="line-md:loading-twotone-loop"
            class="text-zinc-500 inline-block text-xl ps-8"
          ></Icon>
        </button>
      </UiSheetHeader>
      <UiScrollArea class="h-[calc(100vh-13rem)] px-4">
        <ul class="flex flex-col gap-2 pt-2">
          <UiDashboardHeaderNotificationCard
            v-for="notification in notifications"
            :key="notification.title"
            :notification="notification"
          />
        </ul>
      </UiScrollArea>
      <UiSheetFooter>
        <div class="flex items-center justify-between">
          <p class="text-sm text-muted-foreground">
            {{ notifications.length }} notifications
          </p>
          <button
            type="button"
            class="flex items-center gap-2 text-sm text-red-500 capitalize rounded-md px-3 py-1 font-medium hover:bg-red-200"
            @click="async () => await clearAll()"
            v-if="notifications.length > 0"
          >
            <p class="text-inherit">clear all</p>
            <Icon name="lucide:trash-2" class="inline-block" />
          </button>
        </div>
      </UiSheetFooter>
    </UiSheetContent>
  </UiSheet>
</template>

<script setup lang="ts">
const inPendingMarkAllAsRead = shallowRef(false);
const inPendingClearAll = shallowRef(false);

const { notifications, markAllAsRead, clearAll, unreadCount } =
  useNotifications();
</script>
