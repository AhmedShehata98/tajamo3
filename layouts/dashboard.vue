<template>
  <main
    class="relative flex items-start min-h-screen justify-start divide-x bg-fixed bg-cover bg-center"
  >
    <UiDashboardSidebar />
    <section class="flex flex-col flex-1 h-full isolate bg-background">
      <UiDashboardHeader />
      <slot />
    </section>
  </main>
</template>
<script setup lang="ts">
const {
  setup: setupNotificationsEventSource,
  close: closeNotificationsEventSource,
} = useNotifications();

// FIXME: this layout is remounted on every page navigation, which causes the EventSource to be re-established.
// This is not ideal, but for now, we will keep it as is.
onMounted(() => {
  setupNotificationsEventSource();
});
// onBeforeUnmount(() => {
//   closeNotificationsEventSource();
// });
</script>
