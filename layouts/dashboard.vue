<template>
  <main
    class="relative flex items-start min-h-screen justify-start divide-x bg-fixed bg-cover bg-center"
  >
    <UiDashboardSidebar
      :is-open-sidebar="isOpenSidebar"
      @toggle-sidebar="() => (isOpenSidebar = !isOpenSidebar)"
    />
    <section class="flex flex-col flex-1 h-full isolate bg-[#F2F4F7]">
      <UiDashboardHeader
        :is-open-sidebar="isOpenSidebar"
        @toggle-sidebar="() => (isOpenSidebar = !isOpenSidebar)"
      />
      <slot />
    </section>
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
</script>
