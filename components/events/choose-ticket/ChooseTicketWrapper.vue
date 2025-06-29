<template>
  <UiDialog ref="ticketModal">
    <UiDialogTrigger>
      <slot name="trigger" />
    </UiDialogTrigger>
    <UiDialogContent class="lg:!max-w-2xl">
      <UiDialogHeader>
        <UiDialogTitle>choose ticket</UiDialogTitle>
        <UiDialogDescription>
          Choose the ticket you want to buy
        </UiDialogDescription>
      </UiDialogHeader>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-4 py-4"
      >
        <label
          v-for="ticket in ticketTypes"
          :key="ticket.id"
          :for="ticket.name"
          class="flex items-center gap-2 flex-col bg-secondary/80 cursor-pointer"
        >
          <input
            type="radio"
            :id="ticket.name"
            hidden
            name="ticket"
            @change="selectedTicket = ticket"
            :disabled="ticket.quantity_available == 0"
            class="peer"
            :value="ticket.id"
          />
          <div
            class="w-full h-full flex items-center flex-col gap-2 border-2 border-transparent peer-checked:border-accent rounded-md overflow-hidden"
          >
            <span
              class="size-16 flex items-center justify-center bg-accent/25 text-accent rounded-full p-3 shadow-md mt-2 mx-2"
            >
              <Icon
                name="solar:ticket-bold-duotone"
                class="text-6xl rotate-14"
              />
            </span>
            <p
              class="text-xl font-bold uppercase text-center peer-checked:text-white px-2"
            >
              {{ ticket.name }}
            </p>
            <p class="text-sm secondary-text text-center inline-block px-2">
              {{ ticket.description }}
            </p>
            <p
              class="text-sm secondary-text text-center px-2 flex items-center gap-2"
            >
              <Icon name="solar:user-bold-duotone" class="text-2xl" />
              {{ ticket.quantity_available }} tickets
            </p>
            <span
              class="w-full p-2 text-sm text-center flex items-center justify-center gap-2 font-semibold"
              :class="
                ticket.quantity_available > 0
                  ? 'bg-accent/10 text-accent'
                  : 'bg-black/20 text-black'
              "
            >
              <Icon name="solar:dollar-bold-duotone" class="text-2xl" />
              {{
                ticket.price?.toLocaleString("en-EG", {
                  style: "currency",
                  currency: "EGP",
                })
              }}
            </span>
          </div>
        </label>
        <!-- <label
          for="vip"
          class="flex items-center gap-2 flex-col size-34 bg-secondary/80 cursor-pointer"
        >
          <input type="radio" id="vip" hidden name="ticket" class="peer" />
          <div
            class="w-full h-full flex items-center flex-col gap-2 peer-checked:bg-accent rounded-lg p-4 peer-checked:text-white"
          >
            <Icon
              name="streamline-ultimate-color:vip-crown-queen-1"
              class="text-6xl"
            />
            <p class="text-xl font-bold uppercase text-center">vip</p>
          </div>
        </label> -->
      </div>
      <UiDialogFooter>
        <UiButton
          type="submit"
          v-if="selectedTicket?.price && selectedTicket.price > 0"
          @click="$emit('buy', selectedTicket)"
        >
          <Icon name="solar:ticket-bold-duotone" class="text-2xl" />
          buy now
        </UiButton>

        <UiButton
          type="submit"
          v-if="selectedTicket?.price && selectedTicket.price == 0"
        >
          <Icon name="solar:ticket-bold-duotone" class="text-2xl" />
          select ticket
        </UiButton>
        <UiDialogClose as-child>
          <UiButton variant="outline"> cancel </UiButton>
        </UiDialogClose>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>
<script setup lang="ts">
import type { TicketType } from "~/types/ticket-type";
const selectedTicket = ref<TicketType | null>(null);
const ticketModal = ref<HTMLDialogElement | null>(null);
defineProps<{
  ticketTypes: TicketType[];
}>();

defineExpose({
  open: () => {
    ticketModal.value?.showModal();
  },
  close: () => {
    ticketModal.value?.close();
  },
});

defineEmits<{
  (e: "buy", ticket: TicketType | null): void;
  (e: "select", ticket: TicketType | null): void;
  (e: "cancel"): void;
}>();
</script>
