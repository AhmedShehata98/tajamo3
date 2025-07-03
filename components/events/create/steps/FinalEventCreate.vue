<template>
  <div class="flex flex-col w-full bg-secondary/50 p-4 rounded-md mt-5">
    <h3 class="font-semibold text-2xl text-start text-accent/80">
      Finalize Event
    </h3>
    <p class="secondary-text">Review your event details and publish it.</p>
    <div class="w-full flex flex-col items-center justify-start gap-3 mt-8">
      <span class="w-full flex items-start justify-start gap-3">
        <figure class="shrink-0">
          <img
            :src="event.image"
            alt="event-image"
            class="w-56 h-44 object-cover rounded-md"
          />
        </figure>
        <span class="flex flex-col items-start justify-start mt-2">
          <h4 class="text-lg font-semibold capitalize text-text-primary">
            {{ event.name }}
          </h4>
          <p class="text-text-secondary mb-4">{{ event.description }}</p>
          <span
            :class="eventTypeBackgroundFactory(event.event_type)"
            class="w-fir flex items-center justify-center gap-2 px-2 py-1 rounded-md"
          >
            <p>{{ event.event_type }}</p>
          </span>
        </span>
      </span>
      <span class="w-full grid grid-cols-3 items-center justify-start gap-3">
        <span class="flex flex-col items-start justify-start gap-2">
          <p class="text-text-secondary">Date</p>
          <p class="text-text-primary">
            {{ new Date(event.start_at).toLocaleDateString() }} -
            {{ new Date(event.end_at).toLocaleDateString() }}
          </p>
        </span>
        <span class="flex flex-col items-start justify-start gap-2">
          <p class="text-text-secondary">Location</p>
          <p class="text-text-primary">{{ event.location }}</p>
        </span>
        <span class="flex flex-col items-start justify-start gap-2">
          <p class="text-text-secondary">Capacity</p>
          <p class="text-text-primary">{{ event.capacity }}</p>
        </span>
        <span class="flex flex-col items-start justify-start gap-2">
          <p class="text-text-secondary">Audience</p>
          <p class="text-text-primary">{{ event.audience }}</p>
        </span>
        <span class="flex flex-col items-start justify-start gap-2">
          <p class="text-text-secondary">Event Type</p>
          <p class="text-text-primary">{{ event.event_type }}</p>
        </span>
      </span>
      <h3 class="text-lg text-text-secondary capitalize place-self-start mt-4">
        tickets
      </h3>
      <ul class="w-full md:max-w-2xl grid grid-cols-1 place-self-start">
        <li
          v-for="(ticket, index) in event.tickets"
          :key="index"
          class="flex items-start justify-start gap-3 mb-2 bg-card p-3 rounded-md"
        >
          <span class="flex flex-col items-start justify-start gap-1 w-full">
            <p class="text-text-primary font-semibold">{{ ticket.name }}</p>
            <p class="text-text-secondary">{{ ticket.description }}</p>
            <p>available: {{ ticket.quantity_available }}</p>
          </span>
          <p class="text-text-primary bg-white p-1 rounded-md">
            {{ ticket.price ? `$${ticket.price}` : "Free" }}
          </p>
        </li>
      </ul>
    </div>
    <div class="w-full flex gap-2 items-center justify-start gap-3 mt-5">
      <UiButton variant="outline" class="me-auto" @click="$emit('onBack')">
        go back</UiButton
      >
      <UiButton variant="secondary" @click="$emit('onPublish')">
        save draft
      </UiButton>
      <UiButton variant="default" @click="$emit('onPublish')">
        publish
      </UiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { EventForm } from "~/types/events";
import type { TicketTypeForm } from "~/types/ticket-type";
import { eventTypeBackgroundFactory } from "~/lib/utils";

defineProps<{
  event: EventForm & { tickets: Array<TicketTypeForm> };
}>();
defineEmits<{
  (e: "onPublish"): void;
  (e: "onSaveDraft"): void;
  (e: "onBack"): void;
}>();
</script>
