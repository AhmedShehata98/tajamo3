<template>
  <NuxtLink
    class="flex items-center justify-between-start gap-2 transition-colors rounded-sm text-slate-200 duration-500 px-5 py-1.5 text-sm font-semibold capitalize hover:bg-accent/25"
    :class="{
      'bg-accent/90 backdrop-blur-md font-bold text-white pointer-events-none':
        $route.path.endsWith(to),
    }"
    :to="to"
  >
    <Icon :name="icon" class="text-2xl" />
    <p class="leading-3 text-inherit"><slot /></p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: { type: String, required: true },
  to: { type: String, required: true },
});
</script>
