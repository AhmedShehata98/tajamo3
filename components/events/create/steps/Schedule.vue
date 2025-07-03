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
        Event Schedule and Timing
      </h3>
    </span>
    <UiFormGroup
      label="start date"
      id="start-date"
      :error-condition="formBLured.startDate && !form.start_at"
      error-message="the start date is required !"
      direction="col"
    >
      <input
        type="date"
        name="start-date"
        id="start-date"
        v-model="form.start_at"
        @blur="() => (formBLured.startDate = true)"
        class="input"
      />
    </UiFormGroup>

    <UiFormGroup
      label="end date"
      id="end-date"
      :error-condition="formBLured.endDate && !form.end_at"
      error-message="the end date is required !"
      direction="col"
    >
      <input
        type="date"
        name="end-date"
        id="end-date"
        v-model="form.end_at"
        @blur="() => (formBLured.endDate = true)"
        class="input"
      />
    </UiFormGroup>
    <div class="flex-1 col-span-2 flex items-center justify-end gap-3">
      <UiButton type="submit" :disabled="!form.start_at || !form.end_at">
        Next
        <Icon name="i-heroicons-arrow-right-solid" />
      </UiButton>
    </div>
  </form>
</template>
<script setup lang="ts">
const formBLured = ref({
  startDate: false,
  endDate: false,
});

const form = ref({
  start_at: "",
  end_at: "",
});

const emit = defineEmits<{
  (
    e: "next",
    event: {
      start_at: string;
      end_at: string;
    }
  ): void;
  (e: "back"): void;
}>();

const handleCreateEvent = () => {
  emit("next", form.value);
};
</script>
