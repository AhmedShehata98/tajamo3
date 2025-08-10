<template>
  <div class="flex-1">
    <input
      type="tel"
      pattern="\d*"
      inputmode="numeric"
      v-model="phoneNumber"
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      :placeholder="placeholder"
      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
      :class="{ 'border-red-500': error }"
    />
  </div>
</template>
<script setup lang="ts">
const phoneNumber = defineModel({ required: true });
defineEmits<{
  (e: "blur", value: Event): void;
  (e: "change", value: Event): void;
  (e: "input", value: Event): void;
}>();
defineProps<{
  placeholder: string;
  error: string;
}>();
</script>
