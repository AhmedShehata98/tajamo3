<template>
  <div class="w-full flex-col flex items-start justify-start">
    <figure class="relative w-full h-72 bg-secondary/50 backdrop-blur-md">
      <img
        :src="eventDetails?.data?.image"
        :alt="eventDetails?.data?.name"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 rounded-t-sm flex flex-col items-start justify-end p-4"
      >
        <span
          v-if="eventDetails?.data?.event_type"
          :class="eventTypeBackgroundFactory(eventDetails?.data?.event_type)"
          class="px-3 py-1 rounded-full text-white text-xs font-medium mb-3"
        >
          {{ eventDetails?.data?.event_type }}
        </span>
        <h3 class="text-white text-2xl font-bold mb-3">
          {{ eventDetails?.data?.name }}
        </h3>
      </div>
    </figure>
    <div class="w-full flex items-center justify-between gap-4 py-2 px-4">
      <ul class="flex items-center justify-start gap-5">
        <li class="flex items-center justify-start gap-2">
          <Icon name="mdi:calendar" class="text-2xl text-text-primary" />
          <p class="text-sm font-medium text-text-secondary">
            {{ dateFormatter(eventDetails?.data?.start_at) }}
          </p>
        </li>
        <li class="flex items-center justify-start gap-2">
          <Icon name="mdi:calendar-range" class="text-2xl text-text-primary" />
          <p class="text-sm font-medium text-text-secondary">
            {{ dateFormatter(eventDetails?.data?.end_at) }}
          </p>
        </li>
        <li class="flex items-center justify-start gap-2">
          <Icon name="mdi:location" class="text-2xl text-text-primary" />
          <p class="text-sm font-medium text-text-secondary">
            {{ eventDetails?.data?.location }}
          </p>
        </li>
        <li class="flex items-center justify-start gap-2">
          <Icon name="mdi:ticket" class="text-2xl text-text-primary" />
          <p class="text-sm font-medium text-text-secondary">
            {{ eventDetails?.data?.capacity }}
          </p>
        </li>
      </ul>
      <div
        v-if="status === 'success'"
        class="flex items-center justify-start gap-2"
      >
        <UiButton type="button" variant="outline">
          <Icon name="mdi:share" class="w-4 h-4" />
          <p class="text-sm font-medium">Share</p>
        </UiButton>
        <!-- TODO: CHECK IF USER IS ENROLLED AND HIDE BUTTON IF TRUE -->

        <EventsChooseTicketWrapper
          :ticketTypes="ticketTypes?.data || []"
          ref="ticketModal"
          @buy="handleBuyTicket"
          @select="handleSelectTicket"
        >
          <template #trigger>
            <UiButton
              v-if="
                !eventDetails?.data?.is_registered &&
                eventDetails?.data.created_by !== userStore?.id
              "
              type="button"
            >
              enroll now
            </UiButton>
          </template>
        </EventsChooseTicketWrapper>

        <!-- TODO: CHECK IF USER IS ENROLLED -->
        <UiButton
          v-if="success || eventDetails?.data?.is_registered"
          type="button"
          disabled
          variant="ghost"
        >
          <Icon name="mdi:check" class="w-4 h-4" />
          <p class="text-sm font-medium">enrolled</p>
        </UiButton>
      </div>
    </div>
    <div class="w-full flex items-start justify-start gap-4 py-2 px-4 mt-4">
      <ul
        class="w-full md:w-1/2 lg:w-[60%] flex items-center flex-col justify-start gap-4"
      >
        <li
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-2xl font-semibold text-text-primary">description</h3>
          <p class="text-sm font-medium text-text-secondary">
            {{ eventDetails?.data?.description }}
          </p>
        </li>
        <li
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-2xl font-semibold text-text-primary">Location</h3>
          <p class="text-sm font-medium text-text-secondary">
            {{ eventDetails?.data?.location }}
          </p>
          <!-- <p class="text-sm font-medium text-text-secondary">
            Nasr City, Cairo, Egypt
          </p> -->
          <div
            class="w-full h-48 bg-background/50 backdrop-blur-md rounded-sm text-center p-4"
          >
            <p>maps placeholder</p>
          </div>
        </li>
      </ul>
      <ul
        class="flex items-center flex-col justify-start gap-4 w-full md:w-1/2 lg:w-[40%]"
      >
        <li
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-xl font-semibold text-text-primary mb-4 capitalize">
            event details
          </h3>
          <ul class="w-full grid grid-cols-1 gap-2">
            <li
              v-if="eventDetails?.data?.event_type"
              class="flex items-start justify-start gap-3.5"
            >
              <p
                class="text-base min-w-20 font-medium capitalize text-text-primary"
              >
                type:
              </p>
              <span
                :class="
                  eventTypeBackgroundFactory(eventDetails?.data?.event_type)
                "
                class="px-3 py-1 rounded-full text-xs font-bold capitalize min-w-16 text-center mix-blend-difference"
              >
                {{ eventDetails?.data?.event_type }}
              </span>
            </li>
            <li class="flex items-start justify-start gap-3.5">
              <p
                class="text-base min-w-20 font-medium capitalize text-text-primary"
              >
                start date:
              </p>
              <p class="text-base font-medium capitalize text-text-secondary">
                {{ dateFormatter(eventDetails?.data?.start_at) }}
              </p>
            </li>
            <li class="flex items-start justify-start gap-3.5">
              <p
                class="text-base min-w-20 font-medium capitalize text-text-primary"
              >
                end date:
              </p>
              <p class="text-base font-medium capitalize text-text-secondary">
                {{ dateFormatter(eventDetails?.data?.end_at) }}
              </p>
            </li>
            <li class="flex items-start justify-start gap-3.5">
              <p
                class="text-base min-w-20 font-medium capitalize text-text-primary"
              >
                location:
              </p>
              <p class="text-base font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.location }}
              </p>
            </li>
            <li
              v-if="eventDetails?.data?.company_id"
              class="flex items-start justify-start gap-3.5"
            >
              <p
                class="text-base min-w-20 font-medium capitalize text-text-primary"
              >
                organizer:
              </p>
              <p class="text-base font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.company_id }}
              </p>
              <p class="text-base font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.created_by }}
              </p>
            </li>
            <li class="flex items-start justify-start gap-3.5">
              <p
                class="text-base min-w-20 font-medium capitalize text-text-primary"
              >
                created by:
              </p>
              <p class="text-base font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.created_by }}
              </p>
            </li>
          </ul>
        </li>
        <li
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-2xl font-semibold text-text-primary mb-4 capitalize">
            event stats
          </h3>
          <p class="text-sm font-medium text-text-secondary">
            Manage your event attendees here
          </p>
          <div class="w-full grid grid-cols-2 gap-2">
            <div
              class="w-full flex flex-col bg-background/90 backdrop-blur-md rounded-sm items-center justify-start gap-2 p-4"
            >
              <p class="text-3xl font-bold capitalize text-text-primary">
                {{ eventDetails?.data?.capacity }}
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                Total Attendees
              </p>
            </div>
            <div
              class="w-full flex flex-col bg-background/90 backdrop-blur-md rounded-sm items-center justify-start gap-2 p-4"
            >
              <p class="text-3xl font-bold capitalize text-text-primary">70</p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                confirmed
              </p>
            </div>
          </div>
          <div class="w-full flex items-center justify-start gap-2 mt-4">
            <LazyEventsAttendeesModal>
              <template #trigger>
                <UiButton type="button" class="w-full">
                  <Icon name="mdi:account-multiple" class="w-4 h-4" />
                  <p class="text-sm font-medium text-white">Manage attendees</p>
                </UiButton>
              </template>
            </LazyEventsAttendeesModal>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QUERY_KEYS } from "~/constants/query-keys";
import { dateFormatter, eventTypeBackgroundFactory } from "~/lib/utils";
import type { EventDetails } from "~/types/events";
import { ResponseSchema } from "~/server/utils/response-schema";
import { toast } from "vue-sonner";
import type { TicketType } from "~/types/tickets";
import useEventDetailsState from "~/composables/use-event-details-state";

const route = useRoute();
const eventId = computed(() => route.params.eventId);
const ticketModal = shallowRef(false);
const attendanceModal = shallowRef(false);
const { userStore } = useUser();
const {
  eventDetailsState,
  handleSetEventDetails,
  handleSetSelectedTicketType,
} = useEventDetailsState();
const { pending, execute, success } = useApiMutation();
const { data: eventDetails, status } = useAsyncData<
  ResponseSchemaType<EventDetails>
>(
  `${QUERY_KEYS.EVENT_DETAILS}__${eventId.value}`,
  () =>
    $fetch(`/api/events/${eventId.value}`, {
      method: "GET",
      headers: {
        ...useRequestHeaders(["cookie"]),
      },
    }),
  { watch: [eventId] }
);
const { data: ticketTypes, error } = useAsyncData<
  ResponseSchemaType<TicketType[]>
>(`${QUERY_KEYS.TICKET_TYPES}__${eventId.value}`, () =>
  $fetch(`/api/ticket-types/event/${eventId.value}`, {
    method: "GET",
  })
);

const handleBuyTicket = (ticket: TicketType | null) => {
  handleSetSelectedTicketType(ticket);
  navigateTo({
    path: `/dashboard/payments`,
  });
};

const handleSelectTicket = (ticket: TicketType | null) => {
  handleSetSelectedTicketType(ticket);
};

const unwatchEventDetails = watch(
  [eventDetails],
  () => {
    if (!eventDetails.value) return;
    handleSetEventDetails(eventDetails.value.data);
  },
  { immediate: true }
);

if (
  eventDetailsState.value.event &&
  eventDetailsState.value.selectedTicketType
) {
  unwatchEventDetails();
}

useServerSeoMeta({
  title: () => eventDetails?.value?.data?.name || `Event ${eventId.value}`,
  description: () =>
    eventDetails?.value?.data?.description || `Event ${eventId.value} details`,
});
definePageMeta({
  pageTransition: { name: "page", mode: "default" },
  layout: "dashboard",
});
</script>
