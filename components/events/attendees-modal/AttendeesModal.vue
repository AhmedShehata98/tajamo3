<template>
  <UiDialog ref="attendeesRef">
    <UiDialogTrigger class="w-full">
      <slot name="trigger" />
    </UiDialogTrigger>
    <UiDialogContent class="lg:!max-w-lg">
      <UiDialogHeader>
        <UiDialogTitle>all attendees</UiDialogTitle>
        <UiDialogDescription>
          Here you can see all the attendees of this event. If you want to show
          your tickets, you can do it in the <strong>Orders</strong>
          section.
        </UiDialogDescription>
      </UiDialogHeader>
      <ul class="grid grid-cols-1 items-center justify-center gap-x-4 py-4">
        <EventsAttendeesModalAttendeesItem
          v-for="item in registrations"
          :key="item"
          :data="item"
        />
      </ul>
    </UiDialogContent>
  </UiDialog>
</template>
<script setup lang="ts">
import { QUERY_KEYS } from "~/constants/query-keys";

const eventId = computed(() => useRoute().params.eventId);
const attendeesRef = ref<HTMLDialogElement | null>(null);

defineProps<{
  registrations: Registration;
}>();
</script>
