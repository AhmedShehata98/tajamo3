<template>
  <header
    class="sticky top-0 left-0 z-50 isolate w-full flex items-center justify-between px-4 py-3 border-b bg-transparent backdrop-blur-md border-border"
  >
    <div class="flex items-center justify-start gap-4">
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors lg:hidden"
        @click="$emit('toggle-sidebar')"
      >
        <Icon
          :name="
            isOpenSidebar
              ? 'iconamoon:close-fill'
              : 'heroicons:bars-3-center-left-20-solid'
          "
          class="text-3xl text-muted-foreground max-md:hidden"
        />
      </button>
      <form action="" class="max-md:hidden w-56">
        <span
          class="relative flex items-center justify-start gap-2 rounded-md input px-3.5"
        >
          <label
            for="search"
            class="cursor-pointer flex items-center justify-start text-muted-foreground"
          >
            <Icon name="heroicons:magnifying-glass" class="text-2xl" />
          </label>
          <input
            type="text"
            placeholder="Search"
            class="w-full px-4 py-2 rounded-sm focus:outline-none focus:border-none"
          />
        </span>
      </form>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center justify-center gap-2">
        <UiDashboardHeaderNotificationSheet>
          <button
            type="button"
            class="relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-slate-800 hover:bg-slate-600 transition-colors"
          >
            <span
              v-if="unreadNotificationsCount > 0"
              class="absolute -top-1 -left-1 bg-zinc-700 size-5 rounded-full text-white flex items-center justify-center text-xs font-medium"
            >
              {{ unreadNotificationsCount }}
            </span>
            <Icon name="heroicons:bell" class="text-xl" />
          </button>
        </UiDashboardHeaderNotificationSheet>
        <button
          type="button"
          class="relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-slate-800 hover:bg-slate-600 transition-colors"
        >
          <Icon name="heroicons:moon" class="text-xl" />
        </button>
      </div>
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <p class="text-sm font-semibold capitalize leading-3 cursor-pointer">
            {{ fullName }}
          </p>
          <nuxt-img
            src="https://picsum.photos/200"
            alt="avatar"
            width="40"
            height="40"
            class="w-10 h-10 object-cover rounded-full"
          />
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="w-56">
          <UiDropdownMenuLabel class="text-center"
            >My Account</UiDropdownMenuLabel
          >
          <UiDropdownMenuSeparator />
          <UiDropdownMenuGroup>
            <UiDropdownMenuItem>
              <NuxtLink
                to="/profile"
                class="w-full flex items-center justify-between gap-2"
              >
                <small>Profile</small>
                <UiDropdownMenuShortcut>
                  <Icon name="heroicons:user" class="text-xl" />
                </UiDropdownMenuShortcut>
              </NuxtLink>
            </UiDropdownMenuItem>
            <UiDropdownMenuItem>
              <NuxtLink
                to="/settings"
                class="w-full flex items-center justify-between gap-2"
              >
                <small>Settings</small>
                <UiDropdownMenuShortcut>
                  <Icon name="heroicons:cog-6-tooth" class="text-xl" />
                </UiDropdownMenuShortcut>
              </NuxtLink>
            </UiDropdownMenuItem>
          </UiDropdownMenuGroup>
          <UiDropdownMenuSeparator />
          <UiDropdownMenuItem variant="destructive">
            <button
              type="button"
              @click="handleLogout"
              class="w-full flex items-center justify-between gap-2 cursor-pointer"
            >
              <small>Log out</small>
              <UiDropdownMenuShortcut>⇧⌘Q</UiDropdownMenuShortcut>
            </button>
          </UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </div>
  </header>
</template>
<script setup lang="ts">
import { toast } from "vue-sonner";
import useUser from "~/composables/use-user";
const { fullName, logout } = useUser();
const { unreadCount: unreadNotificationsCount } = useNotifications();
const handleLogout = async () => {
  try {
    await logout();
    navigateTo("/");
    toast.success("Logged out successfully");
  } catch (error) {
    toast.error("Failed to logout");
    console.error(error);
  }
};
defineEmits<{
  (e: "toggle-sidebar"): void;
}>();

defineProps<{
  isOpenSidebar: boolean;
}>();
</script>
