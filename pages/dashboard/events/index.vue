<template>
  <div class="app-container flex-col flex items-start justify-start p-4">
    <div class="w-full flex items-center justify-between">
      <span>
        <h1 class="text-2xl font-bold text-text-primary">Events</h1>
        <p class="text-sm text-text-secondary">
          Manage all your events in one place.
        </p>
      </span>
      <NuxtLink
        to="/dashboard/events/create"
        class="bg-primary px-4 py-2 rounded-sm flex items-center gap-2 backdrop-blur-md hover:bg-primary/80 transition-all duration-300"
      >
        <Icon name="mdi:plus" class="text-xl text-white" />
        <p class="text-white font-medium text-sm">Create Event</p>
      </NuxtLink>
    </div>
    <div
      class="w-full flex items-center gap-5 justify-between max-md:flex-col max-md:gap-2 mt-5"
    >
      <span
        class="w-full flex bg-input p-1 rounded-sm items-center justify-start"
      >
        <label
          for="search"
          class="text-sm text-muted-foreground px-1 flex items-center justify-center"
        >
          <Icon name="mdi:search" class="text-2xl leading-3" />
        </label>
        <input
          type="text"
          id="search"
          v-model="searchQuery"
          class="bg-inherit px-2.5 w-full"
          placeholder="search in events ..."
        />
      </span>
      <div class="flex items-center gap-3 max-md:w-full">
        <select
          v-model="eventType"
          class="max-md:w-full input p-1.5 rounded-sm text-sm text-muted-foreground min-w-48"
        >
          <option value="" selected disabled>Select event type</option>
          <option v-for="type in EventType" :key="type" :value="type">
            {{ type }}
          </option>
          <option value="all">All</option>
        </select>
        <span class="flex items-center gap-2 min-w-28">
          <small class="text-sm text-muted-foreground leading-4"
            >My Events</small
          >
          <UiSwitch v-model="myEvents" />
        </span>
      </div>
    </div>
    <ul
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-8"
    >
      <template v-if="status === 'pending'">
        <div
          v-for="n in 4"
          :key="n"
          class="bg-card flex flex-col gap-1 rounded-md overflow-hidden"
        >
          <span
            class="h-48 w-full inline-block bg-zinc-400 animate-pulse"
          ></span>
          <div class="flex flex-col w-full p-4 gap-2 mt-6">
            <span
              class="h-5 w-20 inline-block bg-zinc-400 rounded-md animate-pulse"
            ></span>
            <span
              class="h-7 w-10/12 mt-3 inline-block bg-zinc-400 rounded-md animate-pulse"
            ></span>
            <span
              class="h-5 w-44 mt-3 inline-block bg-zinc-400 rounded-md animate-pulse"
            ></span>
            <span
              class="h-5 w-34 inline-block bg-zinc-400 rounded-md animate-pulse"
            ></span>
            <span
              class="h-5 w-36 inline-block bg-zinc-400 rounded-md animate-pulse"
            ></span>
            <span
              class="h-5 w-30 inline-block bg-zinc-400 rounded-md animate-pulse"
            ></span>
          </div>
          <div
            class="h-9 w-40 ms-auto me-4 mb-4 inline-block bg-zinc-400 rounded-md animate-pulse"
          ></div>
        </div>
      </template>
      <template v-else>
        <EventsEventCard
          v-for="(event, index) in events?.data"
          :key="event.id"
          :event="event"
          :style="{
            animationDelay: `${index * 100}ms`,
          }"
        />
      </template>
    </ul>
    <div
      v-if="events?.data?.length === 0"
      class="w-full flex items-center justify-center mt-10"
    >
      <p class="text-lg text-muted-foreground">No events found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounce } from "@vueuse/core";
import { QUERY_KEYS } from "~/constants/query-keys";
import { EventType, type Event } from "~/types/events";

const myEvents = ref(false);
const searchQuery = shallowRef("");
const eventType = shallowRef<EventType | "all">("all");
const debouncedSearchQuery = useDebounce(searchQuery, 600);

const {
  data: events,
  error,
  status,
} = useAsyncData<ResponseSchema<Event[]>>(
  QUERY_KEYS.EVENTS,
  () =>
    $fetch("/api/events", {
      headers: {
        ...useRequestHeaders(["cookie"]),
      },
      query: {
        search: debouncedSearchQuery.value,
        eventType: eventType.value,
        myEvents: myEvents.value ? 1 : 0,
      },
    }),
  {
    watch: [debouncedSearchQuery, eventType, myEvents],
  }
);
useSeoMeta({
  title: "Events",
  description: "Manage all your events in one place.",
});
definePageMeta({
  pageTransition: { name: "page", mode: "default" },
  layout: "dashboard",
});
</script>
