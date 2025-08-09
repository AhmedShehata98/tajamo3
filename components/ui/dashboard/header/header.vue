<template>
  <header
    class="sticky top-0 left-0 z-50 isolate w-full h-(--dashboard-header-height) flex items-center justify-between px-4 py-3 border-b bg-transparent backdrop-blur-md border-border"
  >
    <div class="app-container relative flex items-center justify-between gap-3">
      <nuxt-link href="/dashboard" class="text-2xl font-bold text-primary">
        Tajamu
      </nuxt-link>
      <nav
        ref="mobileMenuRef"
        class="flex items-center justify-start gap-2 transition-all duration-300 max-lg:fixed max-lg:top-(--dashboard-header-height) max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:z-50 max-lg:flex-col max-lg:gap-2 max-lg:px-4 max-lg:py-3"
        :class="
          !isOpenMobileMenu &&
          'max-lg:-translate-y-4 max-lg:opacity-0 max-lg:pointer-events-none max-lg:scale-99'
        "
      >
        <nuxt-link
          href="/dashboard"
          class="text-sm px-3 py-2 capitalize font-semibold text-gray-700 rounded-full max-lg:w-full max-lg:py-3.5 max-lg:rounded-sm"
          :class="
            route.fullPath === '/dashboard'
              ? '!text-primary bg-primary/15'
              : 'hover:bg-primary/10'
          "
        >
          Home
        </nuxt-link>
        <nuxt-link
          href="/dashboard/events"
          class="text-sm px-3 py-2 capitalize font-semibold text-gray-700 rounded-full max-lg:w-full max-lg:py-3.5 max-lg:rounded-sm"
          :class="
            route.fullPath.includes('/events')
              ? '!text-primary bg-primary/15'
              : 'hover:bg-primary/10'
          "
        >
          events
        </nuxt-link>
        <nuxt-link
          href="/dashboard/orders"
          class="text-sm px-3 py-2 capitalize font-semibold text-gray-700 rounded-full max-lg:w-full max-lg:py-3.5 max-lg:rounded-sm"
          :class="
            route.fullPath.includes('/orders')
              ? '!text-primary bg-primary/15'
              : 'hover:bg-primary/10'
          "
        >
          orders
        </nuxt-link>
        <nuxt-link
          href="/dashboard/tickets"
          class="text-sm px-3 py-2 capitalize font-semibold text-gray-700 rounded-full max-lg:w-full max-lg:py-3.5 max-lg:rounded-sm"
          :class="
            route.fullPath.includes('/tickets')
              ? '!text-primary bg-primary/15'
              : 'hover:bg-primary/10'
          "
        >
          tickets
        </nuxt-link>
      </nav>
      <div class="flex items-center gap-4 max-lg:ms-auto">
        <div class="flex items-center justify-center gap-2 max-lg:hidden">
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
            <p
              class="text-sm font-semibold capitalize leading-3 cursor-pointer max-lg:hidden"
            >
              {{ `${user?.first_name || "N"} ${user?.last_name || "A"}` }}
            </p>
            <nuxt-img
              src="https://picsum.photos/200"
              alt="avatar"
              width="40"
              height="40"
              class="max-md:size-9 size-10 object-cover rounded-full"
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
      <div class="lg:hidden flex items-center justify-start gap-4">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
          @click="$emit('toggle-sidebar')"
        >
          <Icon
            :name="
              isOpenMobileMenu
                ? 'iconamoon:close-fill'
                : 'heroicons:bars-3-center-left-20-solid'
            "
            @click="isOpenMobileMenu = !isOpenMobileMenu"
            class="text-3xl text-muted-foreground max-md:hidden"
          />
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { toast } from "vue-sonner";
import { getUserState, setUserState } from "~/stores/user";

const user = getUserState();
const token = useCookie("token");
const { unreadCount: unreadNotificationsCount } = useNotifications();
const isOpenMobileMenu = shallowRef(false);
const route = useRoute();
const mobileMenuRef = ref<HTMLDivElement | null>(null);
onClickOutside(mobileMenuRef, () => {
  isOpenMobileMenu.value = false;
});

const handleLogout = async () => {
  try {
    token.value = null;
    setUserState(null);
    toast.success("Logged out successfully", {
      onAutoClose: () => navigateTo("/login"),
      richColors: true,
      duration: 2000,
    });
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
