<template>
  <li class="flex items-center justify-start gap-3 glass-card">
    <figure class="flex items-center justify-center">
      <img
        class="w-12 h-12 rounded-full object-cover"
        v-if="data.user.avatar"
        :src="data.user.avatar"
      />
      <Icon
        v-else
        name="ix:user-profile-filled"
        class="text-5xl rounded-full object-cover"
      />
    </figure>
    <div class="flex flex-col items-start justify-center">
      <h4 class="text-base font-semibold capitalize">
        {{ `${data.user.first_name} ${data.user.last_name}` }}
      </h4>
      <p class="text-sm text-muted-foreground">{{ data.user.phone }}</p>
    </div>
    <p
      class="text-accent capitalize text-sm bg-secondary px-3 py-1 rounded-full ms-auto"
    >
      you
    </p>
  </li>
</template>
<script setup lang="ts">
import type { RegistrationCard } from "~/types/registerations";

const props = defineProps<{
  data: RegistrationCard;
}>();

console.log(props);
</script>
