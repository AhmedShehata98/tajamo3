<template>
  <div class="flex flex-col w-full bg-secondary/50 p-4 rounded-md mt-5">
    <h3 class="font-semibold text-2xl text-start text-accent/80">
      Finalize Event
    </h3>
    <p class="secondary-text">Review your event details and publish it.</p>

    <div class="w-full flex gap-2 items-center justify-start gap-3 mt-5">
      <UiButton
        variant="destructive"
        class="me-auto"
        @click="$emit('onCancel')"
      >
        >cancel</UiButton
      >
      <UiButton variant="secondary" @click="$emit('onPublish')">
        save draft
      </UiButton>
      <UiButton variant="default" @click="$emit('onPublish')">
        publish
      </UiButton>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  event: Omit<Event, "id" | "created_at" | "updated_at"> | null;
}>();
defineEmits<{
  (e: "onPublish"): void;
  (e: "onSaveDraft"): void;
  (e: "onCancel"): void;
}>();
</script>
