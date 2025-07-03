<template>
  <form
    action=""
    @submit.prevent="handleCreateEvent"
    class="w-full flex flex-col p-3 mt-5 glass-card"
  >
    <span class="w-full flex items-center justify-start gap-3 mb-4">
      <button
        type="button"
        class="flex items-center justify-center size-8 rounded-md bg-secondary/60 hover:bg-secondary/40 transition-colors"
        @click="emit('back')"
        aria-label="go back"
        aria-labelledby="go-back-button"
        aria-describedby="go-back-button"
        title="go back"
      >
        <Icon
          name="i-heroicons-arrow-left-solid"
          class="text-accent cursor-pointer"
        />
      </button>
      <h3 class="text-lg font-semibold text-accent/70 col-span-2">
        choose tickets and pricing options
      </h3>
    </span>
    <!-- Main wrapper -->
    <div class="w-full flex items-start justify-start gap-8">
      <!-- form wrapper -->
      <div class="w-[60%] flex flex-col gap-3">
        <div class="grid grid-cols-1 gap-3">
          <span class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <UiFormGroup
              label="name"
              id="name"
              :error-condition="formBLured.name && !form.name"
              error-message="the name is required !"
              direction="col"
              is-required
            >
              <input
                type="text"
                name="name"
                id="name"
                v-model="form.name"
                @blur="() => (formBLured.name = true)"
                class="input"
                placeholder="enter the ticket name ..."
              />
            </UiFormGroup>
            <UiFormGroup
              label="price"
              id="price"
              :error-condition="formBLured.price && form.price < 0"
              error-message="the price is required !"
              direction="col"
              is-required
            >
              <input
                type="number"
                name="price"
                id="price"
                v-model="form.price"
                @blur="() => (formBLured.price = true)"
                class="input"
                placeholder="enter the ticket price ..."
              />
            </UiFormGroup>
            <div class="flex flex-col">
              <label
                for="quantity-available"
                class="text-sm text-start text-text-primary font-medium capitalize leading-3"
                >quantity available
                <span class="text-red-700 text-lg">*</span>
              </label>
              <small class="text-xs text-text-secondary mb-3">
                {{ `Event capacity: ${eventCapacity}` }}
              </small>
              <input
                type="number"
                name="quantity-available"
                id="quantity-available"
                v-model="form.quantity_available"
                @blur="() => (formBLured.quantity_available = true)"
                class="input"
              />
              <small
                v-if="formBLured.sale_start && !isValidQuantity"
                class="text-red-700 leading-4 mt-2"
                >{{
                  `${ERROR_MESSAGES.QUANTITY_INVALID} (${eventCapacity})`
                }}</small
              >
              <small
                v-else-if="
                  formBLured.quantity_available && !form.quantity_available
                "
                class="text-red-700 leading-4 mt-2"
              >
                {{ ERROR_MESSAGES.QUANTITY_REQUIRED }}
              </small>
            </div>
          </span>
          <span class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col">
              <label
                for="sale-start"
                class="text-sm text-start text-text-primary font-medium capitalize leading-3"
                >sale start
                <span class="text-red-700 text-lg">*</span>
              </label>
              <small class="text-xs text-text-secondary mb-3">
                {{ `Event date: ${eventDate.start_at}` }}
              </small>
              <input
                type="date"
                name="sale-start"
                id="sale-start"
                v-model="form.sale_start"
                @blur="() => (formBLured.sale_start = true)"
                class="input"
              />
              <small
                v-if="formBLured.sale_start && !isValidStartDate"
                class="text-red-700 leading-4 mt-2"
                >{{
                  `${ERROR_MESSAGES.START_DATE_AFTER_EVENT} (${eventDate.start_at})`
                }}</small
              >
              <small
                v-else-if="formBLured.sale_start && !form.sale_start"
                class="text-red-700 leading-4 mt-2"
              >
                {{ ERROR_MESSAGES.START_DATE_REQUIRED }}
              </small>
            </div>
            <div class="flex flex-col">
              <label
                for="sale-end"
                class="text-sm text-start text-text-primary font-medium capitalize leading-3"
                >sale end
                <span class="text-red-700 text-lg">*</span>
              </label>
              <small class="text-xs text-text-secondary mb-3">
                {{ `Event date: ${eventDate.end_at}` }}
              </small>
              <input
                type="date"
                name="sale-end"
                id="sale-end"
                v-model="form.sale_end"
                @blur="() => (formBLured.sale_end = true)"
                class="input"
              />
              <small
                v-if="formBLured.sale_end && !isValidEndDate"
                class="text-red-700 leading-4 mt-2"
                >{{
                  `${ERROR_MESSAGES.END_DATE_AFTER_EVENT} (${eventDate.end_at})`
                }}</small
              >
              <small
                v-else-if="formBLured.sale_end && !form.sale_end"
                class="text-red-700 leading-4 mt-2"
              >
                {{ ERROR_MESSAGES.END_DATE_REQUIRED }}
              </small>
            </div>
          </span>
          <UiFormGroup
            label="description"
            id="description"
            :error-condition="false"
            error-message=""
            direction="col"
            class="w-full"
          >
            <textarea
              name="description"
              id="description"
              rows="6"
              v-model="form.description"
              class="input"
              placeholder="enter the ticket description ..."
            ></textarea>
          </UiFormGroup>
        </div>
        <div class="flex-1 col-span-3 flex items-center justify-end gap-3 mt-3">
          <button
            type="button"
            class="w-full flex items-center justify-center gap-2 bg-black text-white rounded-sm px-3 py-1.5 hover:bg-black/80 cursor-pointer disabled:opacity-50 transition-colors"
            @click="addTicket"
            :disabled="
              !form.name ||
              form.price < 0 ||
              !isValidQuantity ||
              !isValidStartDate ||
              !isValidEndDate
            "
          >
            add ticket
            <Icon name="i-heroicons-plus-solid" />
          </button>
        </div>
      </div>
      <!-- preview wrapper -->
      <div class="w-[40%] h-[68vh] flex flex-col gap-3 bg-card p-4 rounded-md">
        <div class="flex flex-col gap-3 h-[calc(100%-4rem)] w-full">
          <h3 class="text-xl font-semibold text-accent/70 text-center">
            Preview
          </h3>
          <p
            v-if="ticketsList.length < 1"
            class="text-sm secondary-text text-center capitalize"
          >
            no tickets added yet
          </p>
          <ul v-else class="flex flex-col gap-3 overflow-y-auto px-1">
            <li
              v-for="(ticket, index) in ticketsList"
              :key="index"
              class="flex flex-col gap-1 glass-card shadow-sm p-3 rounded-md"
            >
              <span class="flex items-center justify-between py-1">
                <h4 class="text-base font-semibold text-accent/70 capitalize">
                  {{ ticket.name }}
                </h4>
                <p class="text-sm text-black/70 font-semibold">
                  {{
                    ticket.price.toLocaleString("en-EG", {
                      style: "currency",
                      currency: "EGP",
                    })
                  }}
                </p>
              </span>
              <p v-if="ticket.description" class="text-sm text-black/40 py-1">
                {{ ticket.description }}
              </p>
              <span class="flex items-center justify-between">
                <p class="text-sm text-black/50">sale start</p>
                <p class="text-sm text-black/70">{{ ticket.sale_start }}</p>
              </span>
              <span class="flex items-center justify-between">
                <p class="text-sm text-black/50">sale end</p>
                <p class="text-sm text-black/80">{{ ticket.sale_end }}</p>
              </span>
              <span class="flex items-center justify-between">
                <Icon
                  name="i-heroicons-ticket-solid"
                  class="text-black/50 size-4"
                />
                <p class="text-sm text-black/80 font-semibold">
                  {{ ticket.quantity_available }} tickets
                </p>
              </span>
              <span class="flex items-center justify-between">
                <button
                  type="button"
                  class="flex items-center justify-center gap-2 py-1 px-4 text-center text-sm font-semibold capitalize bg-red-200 text-red-700 rounded-sm hover:bg-red-300 transition-colors"
                  @click="removeTicket(ticket.id)"
                >
                  <Icon name="i-heroicons-trash-solid" />
                  remove
                </button>
              </span>
            </li>
          </ul>
        </div>
        <div class="flex-1 col-span-3 flex items-center justify-end gap-3 mt-5">
          <UiButton type="submit" :disabled="ticketsList.length < 1">
            Next
            <Icon name="i-heroicons-arrow-right-solid" />
          </UiButton>
        </div>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import type { TicketType, TicketTypeForm } from "~/types/ticket-type";

const ERROR_MESSAGES = {
  START_DATE_REQUIRED: "The sale start date is required!",
  START_DATE_AFTER_EVENT:
    "The sale start date must be after the event start date or equal to!",
  END_DATE_REQUIRED: "The sale end date is required!",
  END_DATE_AFTER_EVENT:
    "The sale end date must be before the event end date or equal to!",
  QUANTITY_REQUIRED: "The quantity available is required!",
  QUANTITY_INVALID:
    "The quantity available must be greater than 0 and less than or equal to the event capacity!",
};

const ticketsList = ref<
  Omit<TicketType, "created_at" | "updated_at" | "event_id">[]
>([]);
const form = reactive<
  Omit<TicketType, "id" | "created_at" | "updated_at" | "event_id">
>({
  name: "",
  price: 0,
  quantity_available: 0,
  sale_start:
    new Date().toISOString().split("T")[0] +
    "T" +
    new Date().toLocaleTimeString("en-US", { hour12: true }),
  sale_end:
    new Date().toISOString().split("T")[0] +
    "T" +
    new Date().toLocaleTimeString("en-US", { hour12: true }),
  description: "",
});

const formBLured = ref({
  name: false,
  price: false,
  quantity_available: false,
  sale_start: false,
  sale_end: false,
  description: false,
});

const props = defineProps<{
  eventDate: {
    start_at: string;
    end_at: string;
  };
  eventCapacity: number;
}>();

const isValidStartDate = computed(() => {
  const today = new Date();
  const selectedDate = new Date(form.sale_start);
  return (
    selectedDate >= today && selectedDate <= new Date(props.eventDate.start_at)
  );
});

const isValidEndDate = computed(() => {
  const today = new Date();
  const selectedDate = new Date(form.sale_end);
  return (
    selectedDate > today && selectedDate <= new Date(props.eventDate.end_at)
  );
});

const isValidQuantity = computed(() => {
  return (
    form.quantity_available > 0 &&
    form.quantity_available <= props.eventCapacity
  );
});

const emit = defineEmits<{
  (e: "back"): void;
  (e: "next", ticket: TicketTypeForm[]): void;
}>();

const addTicket = () => {
  ticketsList.value.push({
    name: form.name,
    price: form.price,
    quantity_available: form.quantity_available,
    sale_start: form.sale_start,
    sale_end: form.sale_end,
    description: form.description,
    id: Math.floor(Math.random() * 10000),
  });
};

const removeTicket = (id: number) => {
  ticketsList.value = ticketsList.value.filter(
    (ticket: Omit<TicketType, "created_at" | "updated_at" | "event_id">) =>
      ticket.id !== id
  );
};

const handleCreateEvent = () => {
  emit(
    "next",
    ticketsList.value.map((ticket) => ({
      name: ticket.name,
      price: ticket.price,
      quantity_available: ticket.quantity_available,
      sale_start: ticket.sale_start,
      sale_end: ticket.sale_end,
      description: ticket.description,
      event_id: -1,
    }))
  );
};
</script>
