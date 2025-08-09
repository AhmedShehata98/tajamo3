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
const {
  setup: setupNotificationsEventSource,
  close: closeNotificationsEventSource,
} = useNotifications();

const isOpenSidebar = shallowRef(false);

// FIXME: this layout is remounted on every page navigation, which causes the EventSource to be re-established.
// This is not ideal, but for now, we will keep it as is.
onMounted(() => {
  setupNotificationsEventSource();
});
// onBeforeUnmount(() => {
//   closeNotificationsEventSource();
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
