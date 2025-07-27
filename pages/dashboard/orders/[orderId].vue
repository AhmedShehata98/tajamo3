<template>
  <div class="app-container flex flex-col w-full min-h-screen p-5">
    <div class="flex items-start justify-between mb-4">
      <span>
        <h1 class="text-2xl font-bold text-text-primary">
          Order No: #{{ orderDetails?.data.id }}
        </h1>
        <p class="text-text-secondary">View the details of your order.</p>
      </span>
      <UiButton variant="destructive">
        <p class="text-white capitalize">refund</p>
        <Icon name="ic:round-cancel" class="text-2xl" />
      </UiButton>
    </div>
    <div class="flex flex-col gap-4">
      <div
        class="flex flex-col gap-2 bg-white p-4 rounded-sm border border-border"
      >
        <h2 class="text-xl font-semibold mb-2">Order Summary</h2>
        <p class="flex items-center justify-start gap-4">
          <strong>status :</strong>
          <span
            class="px-5 py-1 rounded-full text-sm font-semibold uppercase"
            :class="orderStatusStyles(orderDetails?.data.status)"
          >
            {{ orderDetails?.data.status }}
          </span>
        </p>
        <p class="flex items-center justify-start gap-4">
          <strong>Event :</strong> {{ orderDetails?.data.event.name }}
        </p>
        <p class="flex items-center justify-start gap-4">
          <strong>User :</strong>
          {{
            `${orderDetails?.data.user.first_name} ${orderDetails?.data.user.last_name}`
          }}
        </p>
        <p class="flex items-center justify-start gap-4">
          <strong>Ticket Type :</strong>
          {{ orderDetails?.data.ticket_type.name }}
        </p>
        <p
          v-if="orderDetails?.data.ticket_type.description"
          class="flex items-center justify-start gap-4"
        >
          <strong>Ticket description :</strong>
          {{ orderDetails?.data.ticket_type.description }}
        </p>
        <p class="flex items-center justify-start gap-4">
          <strong>Total Price :</strong>
          {{
            orderDetails?.data.final_amount.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })
          }}
        </p>
      </div>
    </div>
    <div class="w-full flex flex-col items-start justify-start">
      <span class="flex items-center justify-between w-full pt-7 pb-4">
        <h1 class="text-xl text-text-primary font-semibold">Tickets</h1>
        <UiButton type="button">
          <p class="text-white">print</p>
          <Icon
            name="ic:round-print text-white"
            class="text-2xl text-text-secondary"
          />
        </UiButton>
      </span>
      <TicketsTicketCard
        v-if="ticketDetails?.data && orderDetails?.data"
        class="mt-3"
        :data="{
          eventName: orderDetails?.data.event.name,
          eventDescription: orderDetails?.data.event.description,
          ticketTypeName: orderDetails?.data.ticket_type.name,
          ticketTypeDescription: orderDetails?.data.ticket_type.description,
          ticketTypePrice: orderDetails?.data.final_amount,
          ticketId: ticketDetails?.data.id,
          ticketCode: ticketDetails?.data.code,
          eventLocation: orderDetails?.data.event.location,
          eventLocationType: orderDetails?.data.event.location_type,
          eventType: orderDetails?.data.event.event_type,
          eventStartDate: orderDetails?.data.event.start_at,
          eventEndDate: orderDetails?.data.event.end_at,
        }"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchemaType } from "~/server/utils/response-schema";
import type { Order, OrderStatus } from "~/types/order";
import type { User } from "~/types/users";
import type { Event } from "~/types/events";
import type { Ticket } from "~/types/tickets";
import type { TicketType } from "~/types/ticket-type";

type orderDetails = Omit<Order, "event_id" | "user_id" | "ticket_type_id"> & {
  event: Event;
  user: User;
  ticket_type: TicketType;
};

const { data: orderDetails, error } = useAsyncData<
  ResponseSchemaType<orderDetails>
>(`${QUERY_KEYS.ORDER_DETAILS}__${useRoute().params.orderId}`, () =>
  useRequestFetch()(`/api/orders/${useRoute().params.orderId}`)
);

const { data: ticketDetails } = useFetch<ResponseSchemaType<Ticket>>(
  `/api/tickets/${useRoute().params.orderId}`,
  { key: `${QUERY_KEYS.TICKET_DETAILS}__${useRoute().params.orderId}` }
);

function orderStatusStyles(status: OrderStatus) {
  switch (status) {
    case "completed":
      return "bg-green-300 text-green-800";
    case "pending":
      return "bg-yellow-300 text-yellow-800";
    case "cancelled":
      return "text-red-300 text-red-800";
    default:
      return "bg-gray-300 text-gray-800";
  }
}

useSeoMeta({
  title: computed(() => `Order #${orderDetails.value?.data.id}`),
  description: "View the details of your order",
});
definePageMeta({
  layout: "dashboard",
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>
