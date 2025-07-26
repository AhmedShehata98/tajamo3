<template>
  <div class="w-full flex flex-col">
    <div class="w-full flex items-start justify-start p-4">
      <ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <li class="glass-card">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold leading-tight">Total Events</h3>
            <span
              class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full"
            >
              <Icon name="heroicons:calendar" class="text-xl text-[#7F56D9]" />
            </span>
          </div>
          <h2 class="text-3xl font-bold mt-2">156</h2>
          <p class="text-sm secondary-text">+12% from last month</p>
        </li>
        <li class="glass-card">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold leading-tight">Upcoming Events</h3>
            <span
              class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full"
            >
              <Icon
                name="heroicons:calendar-days"
                class="text-xl text-[#7F56D9]"
              />
            </span>
          </div>
          <h2 class="text-3xl font-bold mt-2">38</h2>
          <p class="text-sm secondary-text">Next 30 days</p>
        </li>
        <li class="glass-card">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold leading-tight">Total Attendees</h3>
            <span
              class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full"
            >
              <Icon name="heroicons:users" class="text-xl text-[#7F56D9]" />
            </span>
          </div>
          <h2 class="text-3xl font-bold mt-2">1,234</h2>
          <p class="text-sm secondary-text">+25% from last month</p>
        </li>
        <li class="glass-card">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold leading-tight">Team Members</h3>
            <span
              class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full"
            >
              <Icon
                name="heroicons:user-group"
                class="text-xl text-[#7F56D9]"
              />
            </span>
          </div>
          <h2 class="text-3xl font-bold mt-2">134</h2>
          <p class="text-sm secondary-text">Active members</p>
        </li>
      </ul>
    </div>
    <div class="w-full flex flex-col gap-4 px-4 py-2">
      <div class="w-full flex items-center justify-between">
        <h1 class="text-xl font-semibold">Upcoming Events</h1>
        <NuxtLink
          to="/dashboard/calender"
          class="text-accent hover:underline flex items-center gap-2 bg-[#EAECF0] rounded-sm px-3 py-1.5"
        >
          <p class="text-sm font-semibold">View all</p>
          <Icon name="heroicons:arrow-right" class="text-base text-gray-700" />
        </NuxtLink>
      </div>

      <ul class="w-full flex flex-col gap-4">
        <li class="w-full glass-card">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="flex flex-col items-center">
                <h3 class="text-lg font-semibold">May</h3>
                <h2 class="text-2xl text-[#6941C6] font-bold">25</h2>
                <p class="text-sm">2023</p>
              </div>

              <div class="flex flex-col">
                <h3 class="text-lg font-semibold">Annual Tech Conference</h3>
                <div class="flex items-center gap-2 text-sm secondary-text">
                  <Icon name="heroicons:clock" class="text-lg" />
                  <span>9:00 AM</span>
                </div>
                <div class="flex items-center gap-2 text-sm secondary-text">
                  <Icon name="heroicons:map-pin" class="text-lg" />
                  <span>Cairo International Convention Center</span>
                </div>
              </div>
            </div>

            <button
              class="px-4 py-2 text-[#6941C6] text-sm bg-[#F4EBFF] font-semibold hover:bg-[F4EBFF] hover:text-[#B692F6] rounded-sm"
            >
              View Details
            </button>
          </div>
        </li>

        <li class="w-full glass-card">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="flex flex-col items-center">
                <h3 class="text-lg font-semibold">May</h3>
                <h2 class="text-3xl text-[#6941C6] font-bold">20</h2>
                <p class="text-sm">2023</p>
              </div>

              <div class="flex flex-col">
                <h3 class="text-lg font-semibold">Team Strategy Meeting</h3>
                <div class="flex items-center gap-2 text-sm secondary-text">
                  <Icon name="heroicons:clock" class="text-lg" />
                  <span>2:00 PM</span>
                </div>
                <div class="flex items-center gap-2 text-sm secondary-text">
                  <Icon name="heroicons:map-pin" class="text-lg" />
                  <span>Main Office - Meeting Room A</span>
                </div>
              </div>
            </div>

            <button
              class="px-4 py-2 text-[#6941C6] text-sm bg-[#F4EBFF] font-semibold hover:bg-[F4EBFF] hover:text-[#B692F6] rounded-sm"
            >
              View Details
            </button>
          </div>
        </li>

        <li class="w-full glass-card">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="flex flex-col items-center">
                <h3 class="text-lg font-semibold">June</h3>
                <h2 class="text-3xl text-[#6941C6] font-bold">5</h2>
                <p class="text-sm">2023</p>
              </div>

              <div class="flex flex-col">
                <h3 class="text-lg font-semibold">Product Design Workshop</h3>
                <div class="flex items-center gap-2 text-sm secondary-text">
                  <Icon name="heroicons:clock" class="text-lg" />
                  <span>10:00 AM</span>
                </div>
                <div class="flex items-center gap-2 text-sm secondary-text">
                  <Icon name="heroicons:map-pin" class="text-lg" />
                  <span>Main Office - Meeting Room A</span>
                </div>
              </div>
            </div>

            <button
              class="px-4 py-2 text-[#6941C6] text-sm bg-[#F4EBFF] font-semibold hover:bg-[F4EBFF] hover:text-[#B692F6] rounded-sm"
            >
              View Details
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-full flex flex-col gap-4 px-4 py-2 mt-5">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-semibold">Featured Events</h1>
        <NuxtLink
          to="/dashboard/events"
          class="text-accent hover:underline flex items-center gap-2 bg-[#EAECF0] rounded-sm px-3 py-1.5"
        >
          <p class="text-sm font-semibold">View all</p>
          <Icon name="heroicons:arrow-right" class="text-base text-gray-700" />
        </NuxtLink>
      </div>
      <ul
        v-if="events?.data"
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <EventsEventCard
          v-for="event in events?.data"
          :key="event?.id"
          :event="event"
        />
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { QUERY_KEYS } from "~/constants/query-keys";
import type { ResponseSchemaTypeWithPagination } from "~/server/utils/response-schema";

const { data: events } = await useFetch<
  ResponseSchemaTypeWithPagination<Event>
>("/api/events", {
  query: {
    limit: 6,
    orderBy: "created_at",
    order: "desc",
  },
  key: QUERY_KEYS.FEATURED_EVENTS,
});

useSeoMeta({
  title: "Dashboard",
  description: "Dashboard",
  ogTitle: "Dashboard",
  ogDescription: "Dashboard",
  ogImage: "https://picsum.photos/681",
});
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
  layout: "dashboard",
});
</script>
