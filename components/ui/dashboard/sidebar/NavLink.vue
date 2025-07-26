<template>
  <NuxtLink
    class="flex items-center justify-between-start gap-2 transition-colors rounded text-[#1D2939] duration-500 px-3 py-1.5 text-sm font-semibold capitalize hover:bg-[#EAECF0]"
    :class="{
      'bg-[#7F56D9] backdrop-blur-md font-semibold text-gray-100 pointer-events-none':
        $route.path.endsWith(to),
    }"
    :to="to"
  >
    <span
      class="size-9 flex items-center justify-center rounded-full bg-[#f2f4f7] text-[#7F56D9]"
      :class="{ '!bg-[#6941C6] text-[#F9FAFB]': $route.path.endsWith(to) }"
    >
      <Icon :name="icon" class="text-lg" />
    </span>
    <p class="leading-3 text-inherit"><slot /></p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: { type: String, required: true },
  to: { type: String, required: true },
});
</script>
