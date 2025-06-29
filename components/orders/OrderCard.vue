<template>
  <nuxt-link :to="`/dashboard/orders/${order.id}`">
    <div class="flex items-center justify-start glass-card mb-2">
      <div
        class="flex flex-col items-center justify-center shrink-0 me-5 bg-gray-100 p-3 rounded-md"
      >
        <h2 class="text-sm font-semibold text-text-primary uppercase">Order</h2>
        <code>#{{ order.id }}</code>
      </div>
      <div class="flex flex-col items-start justify-center">
        <button
          type="button"
          class="px-4 py-1.5 mb-2 rounded-md"
          :class="orderStatusStyles(order.status)"
        >
          <p class="text-xs text-text-secondary font-semibold uppercase">
            {{ order.status }}
          </p>
        </button>
        <h4 class="text-xl capitalize font-medium">
          {{ order.event_id.name }}
        </h4>
        <p class="text-text-secondary text-sm mb-2">
          {{ order.event_id.description }}
        </p>
        <span class="flex items-center justify-center gap-2">
          <Icon
            name="lets-icons:ticket-alt"
            class="inline-block text-xl mr-1 text-text-secondary"
          />
          <p class="text-text-primary capitalize">
            {{ (order.ticket_type_id as TicketType).name }}
          </p>
        </span>
        <span class="flex items-center justify-center gap-2">
          <Icon
            name="i-heroicons:currency-dollar-solid"
            class="inline-block text-xl mr-1 text-text-secondary"
          />
          <code class="text-text-primary capitalize">{{
            order.final_amount.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP",
            })
          }}</code>
        </span>
        <span class="flex items-center justify-center gap-2 text-sm capitalize">
          <Icon
            name="solar:calendar-line-duotone"
            class="inline-block text-xl mr-1 text-text-secondary"
          />
          <p class="text-text-primary capitalize">
            placed on
            {{
              new Date(order.created_at).toLocaleString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })
            }}
          </p>
        </span>
      </div>
      <button
        type="button"
        class="absolute right-2 size-7 text-text-primary hover:text-text-accent"
      >
        <Icon
          name="i-heroicons:chevron-right-solid"
          class="inline-block text-xl ms-auto text-text-secondary"
        />
      </button>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import type { OrderCardProps } from "~/pages/dashboard/orders/index.vue";
import type { Event } from "~/types/events";
import type { Order, OrderStatus } from "~/types/order";
import type { TicketType } from "~/types/ticket-type";

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

defineProps<{
  order: OrderCardProps;
}>();
</script>
