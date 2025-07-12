<template>
  <div class="w-full flex-col flex items-start justify-start p-4 space-y-6">
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
    <div class="w-full bg-card rounded-md p-2">
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
          <template v-if="!filteredTickets || filteredTickets?.length === 0">
            <UiTableRow v-for="ticket in filteredTickets" :key="ticket.id">
              <UiTableCell v-for="header in headers" :key="header.key">
                {{ ticket[header.key] }}
              </UiTableCell>
              <UiTableCell>
                <UiButton variant="outline">View</UiButton>
              </UiTableCell>
            </UiTableRow>
          </template>
          <UiTableRow>
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
</template>

<script setup>
import { ref, computed } from "vue";
import { QUERY_KEYS } from "~/constants/query-keys";

const searchQuery = ref("");
const eventFilter = ref("");
const stateFilter = ref("");
const dateFilter = ref("");
const { userStore } = useUser();
const { data: TicketsList, error } = useFetch(
  `/api/tickets/user/${userStore.value?.id}`,
  {
    key: QUERY_KEYS.TICKETS,
    method: "GET",
    watch: [() => userStore.value?.id],
    immediate: Boolean(userStore.value?.id),
  }
);
console.log("TicketsList: ", TicketsList.value);
console.log("TicketsList error: ", error.value);

const headers = [
  { key: "id", label: "Ticket ID" },
  { key: "eventName", label: "Event Name" },
  { key: "state", label: "State" },
  { key: "ownerName", label: "Owner Name" },
  { key: "purchaseDate", label: "Purchase Date" },
  { key: "eventDate", label: "Event Date" },
  { key: "actions", label: "Actions" },
];

// Sample data
const tickets = ref([
  {
    id: "TICK-001",
    eventName: "Tech Conference 2024",
    state: "active",
    ownerName: "Ahmed Mohamed",
    purchaseDate: "2024-03-15",
    eventDate: "2024-04-20",
  },
  {
    id: "TICK-002",
    eventName: "Music Festival",
    state: "used",
    ownerName: "Sarah Ali",
    purchaseDate: "2024-02-28",
    eventDate: "2024-03-10",
  },
  {
    id: "TICK-003",
    eventName: "Business Workshop",
    state: "cancelled",
    ownerName: "Mohammed Hassan",
    purchaseDate: "2024-03-01",
    eventDate: "2024-03-25",
  },
  {
    id: "TICK-004",
    eventName: "Tech Conference 2024",
    state: "active",
    ownerName: "Fatima Ahmed",
    purchaseDate: "2024-03-16",
    eventDate: "2024-04-20",
  },
  {
    id: "TICK-005",
    eventName: "Art Exhibition",
    state: "active",
    ownerName: "Omar Khalil",
    purchaseDate: "2024-03-10",
    eventDate: "2024-04-05",
  },
]);

const uniqueEvents = computed(() => {
  return [...new Set(tickets.value.map((ticket) => ticket.eventName))];
});

const filteredTickets = computed(() => {
  return tickets.value.filter((ticket) => {
    const matchesSearch =
      !searchQuery.value ||
      ticket.eventName
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesEvent =
      !eventFilter.value || ticket.eventName === eventFilter.value;
    const matchesState =
      !stateFilter.value || ticket.state === stateFilter.value;
    const matchesDate =
      !dateFilter.value || ticket.eventDate === dateFilter.value;

    return matchesSearch && matchesEvent && matchesState && matchesDate;
  });
});

const getStateClass = (state) => {
  const classes = {
    active: "bg-green-100 text-green-800",
    used: "bg-gray-100 text-gray-800",
    cancelled: "bg-red-100 text-red-800",
  };
  return classes[state] || "bg-gray-100 text-gray-800";
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "default",
  },
  layout: "dashboard",
});
</script>
