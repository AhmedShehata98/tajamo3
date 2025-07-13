<template>
  <div
    class="relative w-full max-w-full flex-col flex items-start justify-start p-4 space-y-6"
  >
    <div class="w-full flex justify-between items-center">
      <h1 class="text-2xl font-bold text-text-primary">Tickets</h1>
      <button
        class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
      >
        <Icon name="mdi:plus" class="text-2xl" />
        Add New Ticket
      </button>
    </div>

    <!-- Quick Search Bar -->
    <div class="w-full max-w-md">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by event name or ID..."
          class="w-full px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        />
        <span class="absolute right-3 top-2.5 text-gray-400">
          <Icon name="mdi:search" class="text-2xl" />
        </span>
      </div>
    </div>

    <!-- Filters -->
    <div class="w-full flex gap-4 flex-wrap">
      <select
        v-model="eventFilter"
        class="px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
      >
        <option value="">All Events</option>
        <option v-for="event in uniqueEvents" :key="event" :value="event">
          {{ event }}
        </option>
      </select>
      <select
        v-model="stateFilter"
        class="px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
      >
        <option value="">All States</option>
        <option value="active">Active</option>
        <option value="used">Used</option>
        <option value="cancelled">Cancelled</option>
      </select>
      <input
        v-model="dateFilter"
        type="date"
        class="px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
      />
    </div>

    <!-- Tickets Table -->
    <div class="w-full flex overflow-hidden bg-card rounded-md p-2">
      <div
        class="max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-8rem)] xl:max-w-[calc(100vw-16rem)]"
      >
        <UiTable>
          <UiTableCaption> Tickets </UiTableCaption>
          <UiTableHeader>
            <UiTableRow>
              <UiTableHead
                v-for="header in headers"
                :key="header.key"
                class="text-left"
              >
                {{ header.label }}
              </UiTableHead>
            </UiTableRow>
          </UiTableHeader>
          <UiTableBody>
            <template v-if="ticketsList && ticketsList.data.length >= 1">
              <UiTableRow v-for="ticket in ticketsList.data" :key="ticket.id">
                <UiTableCell>
                  {{ `#${ticket.id}` }}
                </UiTableCell>
                <UiTableCell>
                  <img
                    class="inline-block rounded-md object-cover"
                    :src="ticket.order_id.event_id.image"
                    alt="event-img"
                  />
                </UiTableCell>
                <UiTableCell>
                  <strong
                    class="inline-block text-sm font-semibold min-w-[10rem] max-w-[13rem] text-wrap"
                  >
                    {{ ticket.order_id.event_id.name }}
                  </strong>
                </UiTableCell>
                <UiTableCell>
                  {{ formatDate(ticket.order_id.event_id.start_at) }}
                </UiTableCell>
                <UiTableCell>
                  {{ formatDate(ticket.order_id.event_id.end_at) }}
                </UiTableCell>
                <UiTableCell>
                  <span
                    :class="OrderStateStyles(ticket.order_id.status)"
                    class="px-2 py-1 shadow-sm uppercase rounded text-xs font-semibold"
                  >
                    {{ ticket.order_id.status }}
                  </span>
                </UiTableCell>
                <UiTableCell>
                  <code>
                    {{ ticket.code }}
                  </code>
                </UiTableCell>
                <UiTableCell>
                  <code>
                    {{ priceFormat(ticket.order_id.final_amount || 0) }}
                  </code>
                </UiTableCell>
                <UiTableCell>
                  {{
                    `${ticket.user_id?.first_name} ${ticket.user_id?.last_name}`
                  }}
                </UiTableCell>
                <UiTableCell>
                  {{ formatDate(ticket.purchased_at) }}
                </UiTableCell>

                <UiTableCell>
                  <UiButton variant="outline">View</UiButton>
                </UiTableCell>
              </UiTableRow>
            </template>
            <UiTableRow v-else>
              <UiTableCell />
              <UiTableCell />
              <UiTableCell />
              <UiTableCell class="text-center text-gray-400 py-8 font-bold">
                No tickets found matching your criteria.
              </UiTableCell>
              <UiTableCell />
              <UiTableCell />
              <UiTableCell />
            </UiTableRow>
          </UiTableBody>
        </UiTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchemaType } from "~/types/backend-response";
import type { TicketTable } from "~/types/tickets";

const searchQuery = ref("");
const eventFilter = ref("");
const stateFilter = ref("");
const dateFilter = ref("");
const { userStore } = useUser();
const { data: ticketsList, error } = useFetch<
  ResponseSchemaType<Array<TicketTable>>
>(`/api/tickets/user/${userStore.value?.id}`, {
  key: QUERY_KEYS.TICKETS,
  method: "GET",
  watch: [() => userStore.value?.id],
  immediate: Boolean(userStore.value?.id),
});
const headers = [
  { key: "id", label: "Ticket ID" },
  { key: "eventImage", label: "image" },
  { key: "eventName", label: "Event Name" },
  { key: "eventDateStart", label: "Event Start" },
  { key: "eventDateEnd", label: "Event End" },
  { key: "state", label: "State" },
  { key: "code", label: "Code" },
  { key: "totalAmount", label: "Total Amount" },
  { key: "ownerName", label: "Owner Name" },
  { key: "purchaseDate", label: "Purchase Date" },
  { key: "actions", label: "Actions" },
];

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-EG", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

const priceFormat = (price: number) => {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
  }).format(price);
};

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "default",
  },
  layout: "dashboard",
});
useHeadSafe({
  title: "Tickets - Dashboard",
  meta: [
    {
      name: "description",
      content: "Manage your tickets and view details in the dashboard.",
    },
  ],
});
</script>
