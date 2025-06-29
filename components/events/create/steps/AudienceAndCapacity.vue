<template>
  <form
    action=""
    @submit.prevent="handleCreateEvent"
    class="w-full p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 glass-card"
  >
    <span class="w-full flex items-center justify-start gap-3 mb-4 col-span-2">
      <button
        type="button"
        class="flex items-center justify-center size-8 rounded-md bg-secondary/60 hover:bg-secondary/40 transition-colors"
        @click="emit('back')"
        aria-label="go back"
        aria-labelledby="go-back-button"
        aria-describedby="go-back-button"
        title="go back"
      >
        <Icon
          name="i-heroicons-arrow-left-solid"
          class="text-accent cursor-pointer"
        />
      </button>
      <h3 class="text-lg font-semibold text-accent/70 col-span-2">
        choose audience and capacity
      </h3>
    </span>
    <UiFormGroup
      label="capacity"
      id="capacity"
      :error-condition="formBLured.capacity && !form.capacity"
      error-message="the capacity is required !"
      direction="col"
    >
      <input
        type="number"
        name="capacity"
        id="capacity"
        v-model="form.capacity"
        @blur="() => (formBLured.capacity = true)"
        class="input"
        placeholder="enter the event capacity ..."
      />
    </UiFormGroup>
    <UiFormGroup
      label="audience"
      id="audience"
      :error-condition="formBLured.audience && !form.audience"
      error-message="the audience is required !"
      direction="col"
    >
      <select
        name="audience"
        id="audience"
        v-model="form.audience"
        @blur="() => (formBLured.audience = true)"
        class="input"
      >
        <option value="-1">Select audience</option>
        <option
          v-for="audience of Object.values(AudienceType)"
          :value="audience"
        >
          {{ audience }}
        </option>
      </select>
    </UiFormGroup>

    <div class="flex-1 col-span-2 flex items-center justify-end gap-3 mt-8">
      <UiButton type="submit">
        Next
        <Icon name="i-heroicons-arrow-right-solid" />
      </UiButton>
    </div>
  </form>
</template>
<script setup lang="ts">
import { AudienceType } from "~/types/events";

const emit = defineEmits<{
  (
    e: "next",
    event: {
      capacity: number;
      audience: AudienceType;
      price: number;
    }
  ): void;
  (e: "back"): void;
}>();

const formBLured = ref({
  capacity: false,
  audience: false,
  price: false,
});

const form = ref({
  capacity: 0,
  audience: AudienceType.PUBLIC,
  is_free: false,
  price: 0,
});

watch(
  () => form.value.is_free,
  () => {
    if (form.value.is_free) {
      form.value.price = 0;
    }
  }
);

const handleCreateEvent = () => {
  emit("next", form.value);
};
</script>
