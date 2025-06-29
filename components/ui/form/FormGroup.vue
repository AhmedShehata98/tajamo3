<template>
  <span
    style="
       {
        flexdirection: direction;
      }
    "
    class="w-full flex flex-col gap-1"
  >
    <label
      :for="$attrs.id as string"
      class="capitalize text-[#374151] font-medium"
    >
      {{ label }}
      <span v-if="isRequired" class="text-red-600 text-lg">*</span>
    </label>
    <slot />
    <small v-if="errorCondition" class="text-red-600 font-semibold mt-2">{{
      errorMessage
    }}</small>
  </span>
</template>
<script setup lang="ts">
defineProps<{
  label: string;
  errorMessage: string;
  errorCondition: boolean;
  isRequired?: boolean;
  direction: "col" | "row";
}>();
</script>
