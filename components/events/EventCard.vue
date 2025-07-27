<template>
  <li
    class="w-full flex flex-col justify-start glass-card group overflow-hidden hover:scale-102 hover:translate-y-[-5px] transition-all duration-300"
  >
    <figure class="relative h-[225px] rounded-lg overflow-hidden">
      <nuxt-img
        :src="event.image"
        alt="Event Image"
        width="678"
        height="320"
        loading="lazy"
        class="w-full h-full object-cover rounded-t-sm rounded-lg"
      />
      <div
        class="group-hover:opacity-100 opacity-0 absolute inset-0 flex items-center justify-center p-8 rounded-lg bg-secondary/10 backdrop-blur-sm transition-all duration-300"
      >
        <NuxtLink
          :to="`/dashboard/events/${event.id}`"
          class="flex flex-col text-sm px-4.5 py-2 font-bold text-black flex items-center gap-2 p-4 transition-all duration-300"
        >
          <p class="text-sm font-bold text-white">View Details</p>
          <span
            class="flex items-center justify-center bg-primary text-white backdrop-blur-sm rounded-full min-w-12 min-h-12"
          >
            <Icon name="mdi:arrow-right" class="text-xl" />
          </span>
        </NuxtLink>
      </div>
    </figure>
    <div class="flex items-start flex-col justify-start gap-2 mt-1.5">
      <span
        class="text-sm bg-event-color-food rounded-md p-1 px-2.5 mt-2"
        :class="eventTypeBackgroundFactory(event.event_type)"
      >
        <p class="text-sm font-semibold capitalize">
          {{ event.event_type }}
        </p>
      </span>
      <h3 class="text-xl text-text-primary font-semibold">{{ event.name }}</h3>
      <p
        class="h-10 text-text-secondary overflow-hidden text-sm hover:overflow-visible hover:h-auto transition-[height] duration-300"
      >
        {{ event.description }}
      </p>
      <ul class="grid grid-cols-1 text-text-primary gap-1.5 mt-auto pt-3">
        <li
          class="text-sm flex items-center justify-start align-start gap-2 overflow-hidden font-semibold"
        >
          <span
            class="flex items-center justify-center self-start bg-primary/20 rounded-full min-w-7 min-h-7"
          >
            <Icon name="mdi:location" class="text-xl text-primary" />
          </span>
          <p class="text-inherit text-start">
            {{
              event.location_type === LocationType.ONLINE
                ? "Online"
                : event.location
            }}
          </p>
        </li>
        <li
          class="text-sm flex items-center justify-start gap-2 overflow-hidden font-semibold"
        >
          <span
            class="flex items-center justify-center bg-primary/20 rounded-full min-w-7 min-h-7"
          >
            <Icon name="mdi:calendar" class="text-xl text-primary" />
          </span>
          <p class="text-inherit text-start">
            {{ dateFormatter(event.start_at) }}
          </p>
        </li>
        <li
          class="text-sm flex items-center justify-start gap-2 overflow-hidden mt-1.5 font-semibold"
        >
          <span
            class="flex items-center justify-center bg-primary/20 rounded-full min-w-7 min-h-7"
          >
            <Icon name="mdi:user" class="text-xl text-primary" />
          </span>
          <p class="text-inherit text-start">{{ event.capacity }} Attendees</p>
        </li>
      </ul>
    </div>
  </li>
</template>
<script setup lang="ts">
import { dateFormatter, eventTypeBackgroundFactory } from "~/lib/utils";
import { LocationType, type Event } from "~/types/events";

const props = defineProps<{
  event: Event;
}>();
</script>
