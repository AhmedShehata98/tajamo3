<template>
  <div class="app-container flex flex-col w-full min-h-screen p-5">
    <div class="flex items-start justify-between flex-col mb-4">
      <h1 class="text-2xl font-bold text-text-primary">Orders</h1>
      <p class="text-text-secondary">
        Manage your orders efficiently with our dashboard.
      </p>
    </div>
    <ul v-if="ordersList?.data && ordersList.data.length >= 1">
      <OrdersOrderCard
        v-for="order in ordersList?.data"
        :key="order.id"
        :order
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchemaType } from "~/server/utils/response-schema";
import type { Event } from "~/types/events";
import type { Order } from "~/types/order";
import type { TicketType } from "~/types/ticket-type";

export type OrderCardProps = Omit<Order, "event_id" | "ticket_type_id"> & {
  event_id: Event;
  ticket_type_id: TicketType;
};

const { data: ordersList } = useAsyncData<ResponseSchemaType<OrderCardProps[]>>(
  QUERY_KEYS.ORDERS_LIST,
  () => useRequestFetch()("/api/orders")
);

useHead({
  title: "Orders",
  meta: [
    {
      name: "description",
      content: "Manage your orders efficiently with our dashboard.",
    },
  ],
});
definePageMeta({
  layout: "dashboard",
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
});
</script>
