<template>
  <div class="relative">
    <div class="flex items-center gap-2" :class="error && 'items-start mt-2'">
      <!-- Country Code Select -->
      <div class="relative">
        <button
          type="button"
          @click="isOpen = !isOpen"
          class="flex items-center gap-2 px-3 py-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <Icon :name="selectedCountry.flag" class="w-5 h-5" />
          <span class="text-gray-700">+{{ selectedCountry.code }}</span>
          <Icon
            name="heroicons:chevron-down"
            class="w-4 h-4 text-gray-500 transition-transform duration-200"
            :class="{ 'rotate-180': isOpen }"
          />
        </button>

        <!-- Dropdown -->
        <div
          v-if="isOpen"
          class="absolute z-10 mt-1 w-64 max-h-60 overflow-auto bg-white rounded-lg shadow-lg border border-gray-200 transform origin-top transition-all duration-200"
          :class="isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
        >
          <div class="p-2">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search country..."
              class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              :class="inputClass"
            />
          </div>
          <div class="max-h-48 overflow-y-auto">
            <button
              v-for="country in filteredCountries"
              :key="country.code"
              @click="$emit('update:countryCode', country.code)"
              @blur="emit('blur:countryCode')"
              class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
            >
              <Icon :name="country.flag" class="w-5 h-5" />
              <span class="text-gray-700">{{ country.name }}</span>
              <span class="text-gray-500 ml-auto">+{{ country.code }}</span>
            </button>
          </div>
        </div>
      </div>
      <!-- Phone Number Input -->
      <div class="flex-1">
        <input
          type="tel"
          pattern="\d*"
          inputmode="numeric"
          :value="phoneNumber"
          @change="
            $emit(
              'update:phoneNumber',
              ($event.target as HTMLInputElement).value
            )
          "
          @blur="emit('blur:phoneNumber')"
          :placeholder="placeholder"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
          :class="{ 'border-red-500': error }"
        />
        <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Country {
  name: string;
  code: string;
  flag: string;
}

const props = defineProps<{
  phoneNumber: string;
  countryCode: string;
  placeholder?: string;
  error?: string;
  inputClass?: string;
}>();

const emit = defineEmits<{
  (e: "update:phoneNumber", value: string): void;
  (e: "update:countryCode", value: string): void;
  (e: "blur:phoneNumber"): void;
  (e: "blur:countryCode"): void;
}>();

const isOpen = ref(false);
const searchQuery = ref("");

// Sample countries data - you can expand this list
const countries: Country[] = [
  { name: "Saudi Arabia", code: "966", flag: "circle-flags:sa" },
  { name: "UAE", code: "971", flag: "circle-flags:ae" },
  { name: "Egypt", code: "20", flag: "circle-flags:eg" },
  { name: "Jordan", code: "962", flag: "circle-flags:jo" },
  { name: "Kuwait", code: "965", flag: "circle-flags:kw" },
  { name: "Qatar", code: "974", flag: "circle-flags:qa" },
  { name: "Bahrain", code: "973", flag: "circle-flags:bh" },
  { name: "Oman", code: "968", flag: "circle-flags:om" },
];

const selectedCountry = computed(() => {
  return countries.find((c) => c.code === props.countryCode) || countries[0];
});

const phoneNumber = computed(() => props.modelValue);

const filteredCountries = computed(() => {
  if (!searchQuery.value) return countries;
  const query = searchQuery.value.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(query) || country.code.includes(query)
  );
});

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".relative")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
