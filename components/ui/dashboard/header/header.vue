<template>
  <header
    class="sticky top-0 left-0 z-50 isolate w-full h-(--header-height) flex items-center justify-between px-4 py-3 border-b bg-transparent backdrop-blur-md border-border"
  >
    <div class="app-container flex items-center justify-between">
      <nuxt-link href="/">
        <h3 class="text-xl font-semibold uppercase text-primary">Tajamou</h3>
      </nuxt-link>
      <div class="flex items-center justify-start gap-4">
        <nav class="hidden lg:flex item-center justify-center gap-1">
          <nuxt-link
            href="/dashboard"
            class="px-4 py-1.5 text-primary font-semibold text-sm capitalize rounded-full"
            :class="{
              'bg-primary/90 text-white':
                route.path.includes('/dashboard') &&
                route.path === '/dashboard',
            }"
          >
            home
          </nuxt-link>
          <nuxt-link
            href="/dashboard/events"
            class="px-4 py-1.5 text-primary font-semibold text-sm capitalize rounded-full"
            :class="{
              'bg-primary/90 text-white':
                route.path.includes('/dashboard/events'),
            }"
          >
            events
          </nuxt-link>
          <nuxt-link
            href="/dashboard/orders"
            class="px-4 py-1.5 text-primary font-semibold text-sm capitalize rounded-full"
            :class="{
              'bg-primary/90 text-white':
                route.path.includes('/dashboard/orders'),
            }"
          >
            orders
          </nuxt-link>
          <nuxt-link
            href="/dashboard/tickets"
            class="px-4 py-1.5 text-primary font-semibold text-sm capitalize rounded-full"
            :class="{
              'bg-primary/90 text-white':
                route.path.includes('/dashboard/ticket'),
            }"
          >
            tickets
          </nuxt-link>
          <nuxt-link
            href="/dashboard/settings"
            class="px-4 py-1.5 text-primary font-semibold text-sm capitalize rounded-full"
            :class="{
              'bg-primary/90 text-white': route.path.includes(
                '/dashboard/settings'
              ),
            }"
          >
            settings
          </nuxt-link>
        </nav>
      </div>
      <div class="relative flex items-center max-md:ms-auto max-md:pe-3 gap-4">
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
        <!-- user menu start -->
        <div class="relative">
          <button @click="openUserMenu = !openUserMenu">
            <span class="relative flex item-center justify-center gap-2">
              <p
                class="hidden md:inline-block place-self-center text-sm font-semibold capitalize leading-3 cursor-pointer"
              >
                {{ fullName }}
              </p>
              <!-- Temporarily replaced nuxt-img with standard img tag due to @nuxt/image initialization issue -->

              <img
                v-if="userStore?.avatar"
                src="https://picsum.photos/200"
                alt="avatar"
                width="40"
                height="40"
                class="w-10 h-10 object-cover rounded-full"
              />
              <h4
                class="size-9 md:size-10 flex items-center justify-center text-xl font-medium uppercase text-white bg-secondary rounded-full"
              >
                {{ getInitialLetters(fullName) }}
              </h4>
            </span>
          </button>
          <div
            ref="userMenuRef"
            class="absolute isolate top-full right-0 md:right-8 z-20 w-56 p-2 mt-2 border border-(--border) shadow-xl rounded-md bg-background transition-all duration-300"
            :class="
              openUserMenu ? '' : '-translate-y-4 pointer-events-none opacity-0'
            "
          >
            <p class="text-center py-2 font-semibold">My Account</p>
            <hr />
            <ul class="w-full grid grid-auto-rows gapy-2 py-1">
              <li
                v-for="item in USER_MENU_ITEMS"
                class="w-full py-1 px-1.5 flex item-center justify-between hover:bg-purple-100 hover:text-primary rounded-md"
              >
                <NuxtLink
                  :href="item.href"
                  class="w-full flex items-center justify-between gap-2"
                >
                  <p class="text-inherit">{{ item.label }}</p>
                  <span class="flex item-center justify-center">
                    <Icon :name="item.icon" class="text-xl" />
                  </span>
                </NuxtLink>
              </li>
            </ul>
            <hr />
            <li
              class="w-full py-1 px-1.5 flex item-center justify-between hover:bg-purple-100 hover:text-primary rounded-md mt-2"
            >
              <button
                type="button"
                @click="handleLogout"
                class="w-full flex items-center justify-between gap-2"
              >
                <p class="text-inherit">Log out</p>
                <span class="flex item-center justify-center">⇧⌘Q</span>
              </button>
            </li>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors lg:hidden"
        @click="openMobileMenu = !openMobileMenu"
      >
        <Icon
          :name="openMobileMenu ? 'iconamoon:close-fill' : 'gg:menu-right-alt'"
          class="text-3xl text-muted-foreground max-md:hidden"
        />
      </button>
    </div>
  </header>
  <MobileNavMenu
    :class="
      openMobileMenu
        ? ''
        : 'pointer-events-none translate-x-full opacity-10 scale-98'
    "
    @close="openMobileMenu = false"
  />
</template>
<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { toast } from "vue-sonner";
import useUser from "~/composables/use-user";

const USER_MENU_ITEMS = [
  {
    label: "settings",
    href: "/dashboard/settings",
    icon: "heroicons:cog-6-tooth",
  },
];
const userMenuTarget = useTemplateRef<HTMLElement>("userMenuRef");
const { userStore, fullName, logout } = useUser();
const openUserMenu = shallowRef<boolean>(false);
const openMobileMenu = shallowRef<boolean>(false);
const route = useRoute();
const { unreadCount: unreadNotificationsCount } = useNotifications();

onClickOutside(userMenuTarget, () => (openUserMenu.value = false));

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
