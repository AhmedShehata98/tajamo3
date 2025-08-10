<template>
  <main class="relative min-h-screen flex items-start justify-start flex-col">
    <UiDashboardHeader
      :is-open-sidebar="isOpenSidebar"
      @toggle-sidebar="() => (isOpenSidebar = !isOpenSidebar)"
    />
    <slot />
  </main>
</template>
<script setup lang="ts">
const route = useRoute();
const {
  setup: setupNotificationsEventSource,
  close: closeNotificationsEventSource,
} = useNotifications();

const isOpenSidebar = shallowRef(false);

// console.log("route:");

onMounted(() => {
  setupNotificationsEventSource();
});

// onUnmounted(() => {
// closeNotificationsEventSource();
// });

watch(isOpenSidebar, (newValue) => {
  if (newValue) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
definePageMeta({
  middleware: "auth",
});
</script>
