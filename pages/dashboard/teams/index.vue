<template>
  <div class="app-container p-4 flex-col items-start justify-start">
    <div class="w-full flex items-start justify-between gap-3">
      <span class="w-full flex flex-col items-start justify-center gap-3">
        <h3 class="font-semibold text-2xl text-start text-text-primary">
          Teams
        </h3>
        <p class="text-text-secondary">Manage your teams and their members.</p>
      </span>
      <nuxt-link to="/dashboard/teams/create" class="btn btn-primary min-2-48">
        <p class="text-white text-sm">Create Team</p>
        <Icon name="mdi:plus" class="text-white" />
      </nuxt-link>
    </div>

    <ul
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5"
    >
      <li v-for="team in teams" :key="team.id">
        <TeamsTeamCard :team="team" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const teams = [
  {
    id: 1,
    name: "Marketing Team",
    description:
      "Responsible for brand strategy, digital marketing campaigns, and market research",
    members: [
      {
        id: 1,
        name: "Sarah Johnson",
      },
      {
        id: 2,
        name: "Michael Chen",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
      },
    ],
    events: [
      {
        id: 1,
        name: "Q2 Marketing Strategy Session",
      },
      {
        id: 2,
        name: "Social Media Workshop",
      },
    ],
  },
  {
    id: 2,
    name: "Engineering Team",
    description:
      "Develops and maintains core software infrastructure and applications",
    members: [
      {
        id: 4,
        name: "David Kim",
      },
      {
        id: 5,
        name: "Jessica Patel",
      },
    ],
    events: [
      {
        id: 3,
        name: "Code Review Meeting",
      },
      {
        id: 4,
        name: "Sprint Planning",
      },
    ],
  },
  {
    id: 3,
    name: "Design Team",
    description:
      "Creates user interfaces and experiences for web and mobile applications",
    members: [
      {
        id: 6,
        name: "Alex Thompson",
      },
      {
        id: 7,
        name: "Maria Garcia",
      },
      {
        id: 8,
        name: "James Wilson",
      },
    ],
    events: [
      {
        id: 5,
        name: "UI/UX Workshop",
      },
      {
        id: 6,
        name: "Design System Review",
      },
    ],
  },
  {
    id: 4,
    name: "Sales Team",
    description:
      "Manages client relationships and drives business growth through sales initiatives",
    members: [
      {
        id: 9,
        name: "Robert Taylor",
      },
      {
        id: 10,
        name: "Lisa Anderson",
      },
    ],
    events: [
      {
        id: 7,
        name: "Sales Training",
      },
      {
        id: 8,
        name: "Client Presentation",
      },
    ],
  },
];

useSeoMeta({
  title: "Teams",
  description: "Manage your teams and their members.",
});
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "default",
  },
  layout: "dashboard",
});
</script>
