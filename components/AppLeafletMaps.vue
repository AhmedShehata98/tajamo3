<template>
  <div ref="mapRef" class="w-full flex items-center justify-center"></div>
</template>
<script setup lang="ts">
import L from "leaflet";

const mapRef = ref<HTMLElement | null>(null);
const marker = ref<L.Marker | null>(null);

const selectedLocation = defineModel<{ lat: number; lng: number }>({
  default: () => ({ lat: 31.19555225, lng: 29.938382000000004 }),
});

onMounted(() => {
  if (!mapRef.value) {
    console.error("Map reference is not set.");
    return;
  }
  const mapInstance = L.map(mapRef.value).setView(
    [selectedLocation.value.lat, selectedLocation.value.lng],
    13
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
  }).addTo(mapInstance);

  mapInstance.on("click", (e) => {
    const { lat, lng } = e.latlng;

    if (marker.value) {
      marker.value.setLatLng([lat, lng]);
    } else {
      marker.value = L.marker([lat, lng], { draggable: true }).addTo(
        mapInstance
      );
    }

    selectedLocation.value = { lat, lng };
  });
});
</script>
