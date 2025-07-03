<template>
  <form
    action=""
    @submit.prevent="handleCreateEvent"
    class="w-full p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 glass-card"
  >
    <span class="w-full flex items-center justify-start gap-3 mb-4 col-span-2">
      <h3 class="text-lg font-semibold text-accent/70 col-span-2">
        Basic Information
      </h3>
    </span>
    <UiFormGroup
      label="event name"
      id="event-name"
      :error-condition="formBLured.eventName && !form.name"
      error-message="the event name is required !"
      direction="col"
      class="col-span-2"
    >
      <input
        type="text"
        name="event-name"
        id="event-name"
        v-model="form.name"
        @blur="() => (formBLured.eventName = true)"
        class="input"
        placeholder="enter the event name ..."
      />
    </UiFormGroup>
    <UiFormGroup
      label="event image"
      id="event-image"
      :error-condition="formBLured.eventImage && !form.image"
      error-message="the event image is required !"
      direction="col"
      class="col-span-2"
    >
      <input
        type="text"
        name="event-image"
        id="event-image"
        v-model="form.image"
        @blur="() => (formBLured.eventImage = true)"
        class="input"
        placeholder="enter the event image url ..."
      />
    </UiFormGroup>

    <UiFormGroup
      label="description"
      id="description"
      :error-condition="false"
      error-message=""
      direction="col"
      class="col-span-2"
    >
      <textarea
        name="description"
        id="description"
        rows="6"
        v-model="form.description"
        class="input"
        placeholder="enter the event description ..."
      ></textarea>
    </UiFormGroup>
    <div class="flex-1 col-span-2 flex items-center justify-end gap-3">
      <!-- <UiButton type="reset" variant="ghost" @click="emit('back')" size="sm">
        back
      </UiButton> -->
      <UiButton
        type="submit"
        size="sm"
        @click="
          emit('next', {
            name: form.name,
            image: form.image,
            description: form.description,
          })
        "
        :disabled="!form.name || !form.image"
      >
        <p class="text-white text-sm">Next</p>
        <Icon name="i-heroicons-arrow-right-solid" />
      </UiButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formBLured = ref({
  eventName: false,
  eventImage: false,
});

const form = ref({
  name: "",
  image: "",
  description: "",
});

const emit = defineEmits<{
  (
    e: "next",
    event: {
      name: string;
      image: string;
      description: string;
    }
  ): void;
  (e: "back"): void;
}>();

const handleCreateEvent = () => {
  emit("next", form.value);
};
</script>
