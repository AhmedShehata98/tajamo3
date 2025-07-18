<template>
  <div class="w-full flex-col flex items-start justify-start">
    <figure class="relative w-full h-72 bg-secondary/50 backdrop-blur-md">
      <img
        :src="eventDetails?.data?.image"
        :alt="eventDetails?.data?.name"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90 rounded-t-sm flex items-end justify-between justify-end max-md:flex-col max-md:items-center max-md:justify-end p-4"
      >
        <div
          class="max-md:w-full flex flex-col items-start space-y-6 md:flex-1"
        >
          <span
            v-if="eventDetails?.data?.event_type"
            :class="eventTypeBackgroundFactory(eventDetails?.data?.event_type)"
            class="px-3 py-1 rounded-full text-white text-xs font-medium mb-3"
          >
            {{ eventDetails?.data?.event_type }}
          </span>
          <h3 class="text-white md:text-2xl font-bold mb-3">
            {{ eventDetails?.data?.name }}
          </h3>
        </div>
        <div
          v-if="status === 'success'"
          class="max-md:w-full flex items-center justify-start gap-2"
        >
          <UiButton type="button" variant="outline">
            <Icon name="mdi:share" class="w-4 h-4" />
            <p class="text-sm font-medium">Share</p>
          </UiButton>
          <EventsChooseTicketWrapper
            v-if="
              !eventDetails?.data?.is_registered &&
              eventDetails?.data.created_by !== userStore?.id
            "
            :ticketTypes="ticketTypes?.data || []"
            ref="ticketModal"
            @buy="handleBuyTicket"
            @select="handleSelectTicket"
          >
            <template #trigger>
              <UiButton type="button"> enroll now </UiButton>
            </template>
          </EventsChooseTicketWrapper>
          <button
            v-if="success || eventDetails?.data?.is_registered"
            type="button"
            disabled
            class="flex items-center justify-start gap-2 bg-accent/20 text-gray-400 px-3 py-2 rounded-lg cursor-not-allowed"
          >
            <Icon name="mdi:check" class="w-4 h-4" />
            <p class="text-inherit text-sm font-medium">enrolled</p>
          </button>
        </div>
      </div>
    </figure>
    <div class="w-full flex items-center justify-between gap-4 p-4">
      <ul
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-start gap-5"
      >
        <li
          class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full"
        >
          <Icon name="mdi:calendar" class="text-2xl text-accent shrink-0" />
          <p
            class="text-xs font-semibold capitalize text-text-secondary max-w-full overflow-hidden text-ellipsis"
          >
            <strong class="text-gray-800"> start : </strong>
            {{ dateFormatter(eventDetails?.data?.start_at) }}
          </p>
        </li>
        <li
          class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full"
        >
          <Icon
            name="mdi:calendar-range"
            class="text-2xl text-accent shrink-0"
          />
          <p
            class="text-xs font-semibold capitalize text-text-secondary max-w-full overflow-hidden text-ellipsis"
          >
            <strong class="text-gray-800"> end : </strong>
            {{ dateFormatter(eventDetails?.data?.end_at) }}
          </p>
        </li>
        <li
          v-if="eventDetails?.data?.location_type === LocationType.OFFLINE"
          class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full"
        >
          <Icon name="mdi:location" class="text-2xl text-accent shrink-0" />
          <p
            class="text-xs font-semibold capitalize text-center text-text-secondary max-w-full overflow-hidden text-ellipsis"
          >
            {{ eventDetails?.data?.location_type }}
          </p>
        </li>
        <li
          class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full"
        >
          <Icon name="mdi:users" class="text-2xl text-accent shrink-0" />
          <p
            class="text-xs font-semibold capitalize text-center text-text-secondary max-w-full overflow-hidden text-ellipsis"
          >
            {{ eventDetails?.data?.capacity }} attendees
          </p>
        </li>
      </ul>
    </div>
    <div
      class="w-full flex items-start justify-start max-md:flex-col gap-4 py-2 px-4"
    >
      <ul
        class="w-full md:w-1/2 lg:w-[60%] flex items-center flex-col justify-start gap-4"
      >
        <li
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-xl capitalize font-semibold text-text-primary">
            description
          </h3>
          <p class="text-sm font-medium text-text-secondary">
            {{ eventDetails?.data?.description }}
          </p>
        </li>
        <li
          v-if="eventDetails?.data?.location_type === LocationType.OFFLINE"
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-xl capitalize font-semibold text-text-primary">
            Location
          </h3>
          <p class="text-sm font-medium text-text-secondary">
            {{ eventDetails?.data?.location }}
          </p>
          <!-- <p class="text-sm font-medium text-text-secondary">
            Nasr City, Cairo, Egypt
          </p> -->
          <div
            class="w-full h-[260px] bg-background/50 backdrop-blur-md rounded-lg overflow-hidden text-center"
          >
            <ClientOnly>
              <AppLeafletMaps
                :selectedLocation="{
                  lat: eventDetails?.data?.latitude,
                  lng: eventDetails?.data?.longitude,
                }"
                style="height: 100%"
              />
            </ClientOnly>
          </div>
        </li>
        <li
          v-if="eventDetails?.data?.location_type === LocationType.ONLINE"
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3 class="text-xl capitalize font-semibold text-text-primary">
            event link
          </h3>
          <p class="text-sm font-medium text-text-secondary">
            this event is online, you can join it using the link below
          </p>
          <div
            class="w-full h-48 flex items-center justify-center flex-col bg-accent/10 backdrop-blur-md rounded-sm text-center p-4"
          >
            <span
              class="flex items-center justify-center bg-accent/40 w-fit p-4 rounded-full aspect-square m-auto"
            >
              <Icon name="mdi:link" class="text-4xl text-accent" />
            </span>
            <nuxt-link
              :href="eventDetails?.data?.invitation_url"
              class="flex items-center justify-center gap-2 text-sm font-medium text-accent mt-4 bg-accent/20 p-2 rounded-sm"
            >
              <p>
                {{ eventDetails?.data?.invitation_url }}
              </p>
              <Icon name="mdi:open-in-new" class="text-base" />
            </nuxt-link>
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
                class="text-sm min-w-20 font-medium capitalize text-text-primary"
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
                class="text-sm min-w-20 font-medium capitalize text-text-primary"
              >
                start date:
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                {{ dateFormatter(eventDetails?.data?.start_at) }}
              </p>
            </li>
            <li class="flex items-start justify-start gap-3.5">
              <p
                class="text-sm min-w-20 font-medium capitalize text-text-primary"
              >
                end date:
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                {{ dateFormatter(eventDetails?.data?.end_at) }}
              </p>
            </li>
            <li
              v-if="eventDetails?.data?.location_type === LocationType.OFFLINE"
              class="flex items-start justify-start gap-3.5"
            >
              <p
                class="text-sm min-w-20 font-medium capitalize text-text-primary"
              >
                location:
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.location }}
              </p>
            </li>
            <li
              v-if="eventDetails?.data?.company_id"
              class="flex items-start justify-start gap-3.5"
            >
              <p
                class="text-sm min-w-20 font-medium capitalize text-text-primary"
              >
                organizer:
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.company_id }}
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.created_by }}
              </p>
            </li>
            <li class="flex items-start justify-start gap-3.5">
              <p
                class="text-sm min-w-20 font-medium capitalize text-text-primary"
              >
                created by:
              </p>
              <p class="text-sm font-medium capitalize text-text-secondary">
                {{ eventDetails?.data?.creator_name }}
              </p>
            </li>
          </ul>
        </li>
        <li
          class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"
        >
          <h3
            class="text-xl capitalize font-semibold text-text-primary mb-4 capitalize"
          >
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
              <p
                class="text-sm font-medium text-center capitalize text-text-secondary"
              >
                Total Attendees
              </p>
            </div>
            <div
              class="w-full flex flex-col bg-background/90 backdrop-blur-md rounded-sm items-center justify-start gap-2 p-4"
            >
              <p class="text-3xl font-bold capitalize text-text-primary">
                {{ eventRegistrations?.data?.length || 0 }}
              </p>
              <p
                class="text-sm text-center font-medium capitalize text-text-secondary"
              >
                confirmed
              </p>
            </div>
          </div>
          <div class="w-full flex items-center justify-start gap-2 mt-4">
            <LazyEventsAttendeesModal :registrations="eventRegistrations?.data">
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
import type { ResponseSchemaTypeWithPagination } from "~/server/utils/response-schema";
import type { Registration } from "~/types/registerations";
import { LocationType } from "~/types/events";
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

const { data: eventRegistrations, execute: executeRegistrations } =
  useAsyncData(
    `${QUERY_KEYS.EVENT_REGISTRATIONS}__${eventId.value}`,
    () => useRequestFetch()(`/api/registrations/${eventId.value}`),
    {
      watch: [eventId],
    }
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
