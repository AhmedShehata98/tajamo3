<template>
  <div class="w-full flex-col flex items-start justify-start p-4">
    <div class="w-full flex flex-col gap-4 bg-background rounded-md p-4">
      <div class="w-full flex flex-col gap-3">
        <span class="flex items-center gap-2">
          <Icon name="hugeicons:building-06" class="text-3xl text-primary" />
          <h3 class="text-xl font-bold">Create Your Company</h3>
        </span>
        <small>
          Transform your individual account to a company account and unlock
          powerful features for team management and event organization.
        </small>
      </div>
      <ul class="w-full grid grid-cols-2 flex-wrap gap-5">
        <li
          v-for="card in cards"
          :key="card.id"
          class="w-full flex items-center justify-center flex-col gap-2 bg-card rounded-md p-4"
        >
          <span
            class="w-fit flex items-center justify-center gap-2 bg-primary/20 rounded-full backdrop-blur-md p-3"
          >
            <Icon :name="card.icon" class="text-3xl text-primary" />
          </span>
          <h3 class="text-lg font-bold">{{ card.title }}</h3>
          <p class="text-sm text-text-secondary">
            {{ card.description }}
          </p>
        </li>
      </ul>
      <div class="w-full flex items-center justify-end gap-3 mt-5">
        <button
          type="button"
          class="w-fit flex items-center justify-center gap-2 bg-primary text-white rounded-md px-4 py-2"
        >
          <Icon name="hugeicons:building-06" class="text-2xl" />
          <span class="text-sm font-bold">Create Company</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
    icon: "mdi:users",
    title: "Team Management",
    description: "Create and manage multiple teams",
  },
  {
    id: 2,
    icon: "mdi:calendar",
    title: "Advanced Events",
    description: "Organize complex event series",
  },
  {
    id: 3,
    icon: "mdi:cash",
    title: "Billing Management",
    description: "Centralized billing and invoicing",
  },
  {
    id: 4,
    icon: "hugeicons:global",
    title: "Global Access",
    description: "Manage events across locations",
  },
];

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "default",
  },
  layout: "dashboard",
});
</script>
