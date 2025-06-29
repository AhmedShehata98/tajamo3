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
          v-for="item in eventRegistrations.data"
          :key="item"
          :data="item"
        />
      </ul>
    </UiDialogContent>
  </UiDialog>
</template>
<script setup lang="ts">
import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchemaTypeWithPagination } from "~/server/utils/response-schema";
import type { Registration } from "~/types/registerations";

const eventId = computed(() => useRoute().params.eventId);
const attendeesRef = ref<HTMLDialogElement | null>(null);

const { data: eventRegistrations } = useAsyncData(
  `${QUERY_KEYS.EVENT_REGISTRATIONS}__${eventId.value}`,
  () => useRequestFetch()(`/api/registrations/${eventId.value}`),
  {
    watch: [eventId],
  }
);

console.log("eventRegistrations: ", eventRegistrations?.value);
</script>
