<template>
  <div
    class="w-full flex flex-col items-start justify-start gap-2 bg-card border-border rounded-sm shadow-sm p-4"
  >
    <h3 class="font-semibold text-lg text-text-primary">{{ team.name }}</h3>
    <small class="text-sm text-text-secondary">{{ team.description }}</small>
    <ul class="team-members">
      <li v-for="member in team.members" :key="member.id">
        <p class="text-white">
          {{ member.name.split(" ")[0][0] }}
        </p>
        <p class="text-white">
          {{ member.name.split(" ")[1][0] }}
        </p>
      </li>
    </ul>

    <div class="w-full grid grid-cols-2 gap-2 mt-4">
      <span class="flex items-center justify-center gap-2">
        <Icon name="mdi:calendar" class="text-primary text-2xl" />
        <small class="text-text-primary font-medium capitalize">{{
          team.events.length
        }}</small>
        <p class="text-text-primary font-medium capitalize">events</p>
      </span>
      <span class="flex items-center justify-center gap-2">
        <Icon name="mdi:account-group" class="text-primary text-2xl" />
        <small class="text-text-primary font-medium capitalize">{{
          team.members.length
        }}</small>
        <p class="text-text-primary font-medium capitalize">members</p>
      </span>
    </div>
    <div class="w-full grid grid-cols-2 gap-2">
      <button type="button" class="btn bg-primary/20 text-primary">
        <p class="text-primary text-sm">events</p>
        <Icon name="mdi:arrow-right" class="text-primary" />
      </button>
      <button type="button" class="btn btn-primary">
        <p class="text-white text-sm">members</p>
        <Icon name="mdi:chevron-right" class="text-white" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  team: {
    id: number;
    name: string;
    description: string;
    members: { id: number; name: string }[];
    events: { id: number; name: string }[];
  };
}>();
</script>
<style scoped>
.team-members {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.team-members > * {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
}
</style>
