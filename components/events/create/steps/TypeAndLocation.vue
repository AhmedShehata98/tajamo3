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
        Event type and location
      </h3>
    </span>
    <UiFormGroup
      label="event type"
      id="event-type"
      :error-condition="formBLured.eventType && !form.event_type"
      error-message="the event type is required !"
      direction="col"
    >
      <select
        name="event-type"
        id="event-type"
        v-model="form.event_type"
        @blur="() => (formBLured.eventType = true)"
        class="input"
      >
        <option v-for="type of Object.values(EventType)" :value="type">
          {{ type }}
        </option>
        <option value="other">Other</option>
      </select>
    </UiFormGroup>
    <UiFormGroup
      label="location-type"
      id="location-type"
      :error-condition="formBLured.locationType && !form.location_type"
      error-message="select event location type !"
      direction="col"
    >
      <select
        name="event-type"
        id="event-type"
        v-model="form.location_type"
        @blur="() => (formBLured.locationType = true)"
        class="input"
      >
        <option v-for="type of Object.values(LocationType)" :value="type">
          {{ type }}
        </option>
        <!-- <option value="">Select event type</option> -->
      </select>
    </UiFormGroup>

    <UiFormGroup
      label="location"
      id="location"
      :error-condition="formBLured.location && !form.location"
      error-message="the location is required !"
      direction="col"
      v-if="form.location_type === LocationType.OFFLINE"
    >
      <input
        type="text"
        name="location"
        id="location"
        v-model="form.location"
        @blur="() => (formBLured.location = true)"
        class="input"
        placeholder="enter the event location ..."
      />
    </UiFormGroup>

    <!-- MAPs  -->
    <div
      v-if="form.location_type === LocationType.OFFLINE"
      class="flex w-full min-h-[22rem] bg-secondary/50 p-2 flex items-center justify-center col-span-2"
    >
      <AppLeafletMaps
        class="h-full rounded-lg"
        v-model="form.location_coordinates"
      />
      <span class="flex flex-col items-center justify-center w-full p-4">
        <h3 class="secondary-text text-lg mt-2">
          Please select the location on the map above.
        </h3>
        <p class="secondary-text text-sm mt-1 text-center">
          Note: This feature is not yet implemented, but will be available soon.
          <br />
          You can still enter the location manually in the input field above.
        </p>
        <span
          class="flex items-center justify-center bg-secondary/40 backdrop-blur-md shadow-sm rounded-full aspect-square p-4 mt-6"
        >
          <Icon
            name="hugeicons:maps-location-01"
            class="text-4xl text-accent mt-2"
          />
        </span>
      </span>
    </div>

    <!-- On-line Link preview -->
    <div
      class="flex flex-col w-full col-span-2 items-center gap-3 mt-4 bg-secondary/30 backdrop-blur-md rounded-lg p-4"
      v-if="form.location_type === LocationType.ONLINE"
    >
      <span
        class="flex items-center justify-center bg-secondary/40 backdrop-blur-md shadow-sm rounded-full aspect-square p-4 mt-6"
      >
        <Icon
          name="hugeicons:link-03"
          class="text-4xl text-accent mt-2 leading-3 !mt-0"
        />
      </span>
      <input
        type="url"
        name="event_url"
        id="event_url"
        v-model="form.location"
        class="input w-full"
        :placeholder="`Enter the ${form.event_type} URL...`"
      />
    </div>

    <div class="flex-1 col-span-2 flex items-center justify-end gap-3">
      <UiButton type="submit">
        Next
        <Icon name="i-heroicons-arrow-right-solid" />
      </UiButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { reverseGeocode } from "~/services/maps/helpers";
import { EventType, LocationType } from "~/types/events";

defineOptions({
  keepAlive: true,
});

const formBLured = ref({
  eventType: false,
  locationType: false,
  location: false,
});

const form = ref({
  event_type: EventType.EVENT,
  location: "",
  location_type: LocationType.OFFLINE,
  location_coordinates: {
    lat: 31.19555225,
    lng: 29.938382000000004,
  },
});

const location = ref<{ lat: number; lng: number }>({
  lat: 31.19555225,
  lng: 29.938382000000004,
});

const { data: addressDetails } = useAsyncData(
  "addressDetails",
  async () => {
    const { lat, lng } = form.value.location_coordinates;
    return await reverseGeocode(lat, lng);
  },
  {
    immediate: true,
    watch: [() => form.value.location_coordinates],
  }
);

watch(
  addressDetails,
  (newAddressDetails) => {
    if (!newAddressDetails) return;
    form.value.location = newAddressDetails;
  },
  { immediate: true, deep: true }
);

const emit = defineEmits<{
  (
    e: "next",
    event: {
      event_type: EventType;
      location: string;
      location_type: LocationType;
    }
  ): void;
  (e: "back"): void;
}>();

const handleCreateEvent = () => {
  emit("next", form.value);
};
</script>
