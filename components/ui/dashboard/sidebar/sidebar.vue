<template>
  <aside
    class="min-h-screen w-full min-w-full md:min-w-(--sidebar-width) md:w-(--sidebar-width) bg-secondary backdrop-blur-md border-r border-r-border sticky top-0 left-0 z-50 max-lg:absolute max-md:top-16 max-lg:top-19 max-md:left-0 max-md:w-full max-md:min-w-full max-md:border-none overflow-x-auto transition-all duration-300 ease-in-out"
    :class="{
      'opacity-100 translate-x-0': isOpenSidebar,
      'opacity-50 -translate-x-full': !isOpenSidebar,
    }"
  >
    <div class="w-full flex items-center justify-between px-6 py-4">
      <h1 class="text-2xl font-bold text-accent">Tajamoe</h1>
    </div>
    <div class="w-full flex flex-col gap-1 mb-5">
      <ul class="w-full flex flex-col px-2 gap-1">
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="heroicons:home"
            to="/dashboard"
            @click="$emit('toggle-sidebar')"
          >
            dashboard
          </UiDashboardSidebarNavLink>
        </li>
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="heroicons:calendar"
            to="/dashboard/events"
            @click="$emit('toggle-sidebar')"
          >
            events
          </UiDashboardSidebarNavLink>
        </li>
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="iconamoon:shopping-bag"
            to="/dashboard/orders"
            @click="$emit('toggle-sidebar')"
          >
            orders
          </UiDashboardSidebarNavLink>
        </li>
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="heroicons:ticket"
            to="/dashboard/tickets"
            @click="$emit('toggle-sidebar')"
          >
            tickets
          </UiDashboardSidebarNavLink>
        </li>
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="heroicons:users"
            to="/dashboard/teams"
            @click="$emit('toggle-sidebar')"
          >
            teams
          </UiDashboardSidebarNavLink>
        </li>
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="heroicons:building-office"
            to="/dashboard/company"
            @click="$emit('toggle-sidebar')"
          >
            company
          </UiDashboardSidebarNavLink>
        </li>
        <li class="w-full">
          <UiDashboardSidebarNavLink
            icon="heroicons:cog-6-tooth"
            to="/dashboard/settings"
          >
            settings
          </UiDashboardSidebarNavLink>
        </li>
      </ul>
    </div>
    <div class="w-full flex items-center justify-center p-3">
      <nuxt-link
        to="/dashboard/events/create"
        type="button"
        class="btn bg-accent w-full"
      >
        <p class="text-sm font-medium text-white capitalize leading-3">
          new event
        </p>
        <Icon name="heroicons:plus" class="text-xl" />
      </nuxt-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineEmits<{
  (e: "toggle-sidebar"): void;
}>();

defineProps<{
  isOpenSidebar: boolean;
}>();
</script>
