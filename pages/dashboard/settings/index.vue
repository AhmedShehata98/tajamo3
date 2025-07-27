<template>
  <div class="app-container p-4 flex-col items-start justify-start">
    <span class="w-full flex flex-col items-start justify-center gap-3">
      <h3 class="font-semibold text-2xl text-start text-text-primary">
        Settings
      </h3>
      <p class="text-text-secondary">
        Manage your account and application preferences.
      </p>
    </span>
    <ul
      class="w-fit flex items-center justify-start gap-2 bg-card rounded-sm mt-5 p-1.5"
    >
      <li>
        <button
          type="button"
          :class="
            activeTab === 'profile'
              ? 'bg-primary text-white font-semibold '
              : 'bg-purple-200 text-purple-800'
          "
          class="rounded-md px-4 p-2 transition-all duration-300 uppercase"
          @click="activeTab = 'profile'"
        >
          profile
        </button>
      </li>
      <li>
        <button
          type="button"
          :class="
            activeTab === 'security'
              ? 'bg-primary text-white font-semibold '
              : 'bg-purple-200 text-purple-800'
          "
          class="rounded-md px-4 p-2 transition-all duration-300 uppercase font-medium"
          @click="activeTab = 'security'"
        >
          security
        </button>
      </li>
      <li>
        <button
          type="button"
          :class="
            activeTab === 'notifications'
              ? 'bg-primary text-white font-semibold '
              : 'bg-purple-200 text-purple-800'
          "
          class="rounded-md px-4 p-2 transition-all duration-300 uppercase font-medium"
          @click="activeTab = 'notifications'"
        >
          notifications
        </button>
      </li>
    </ul>
    <div
      v-if="activeTab === 'profile'"
      class="w-full flex flex-col p-3 bg-card backdrop-blur-md items-start justify-center gap-2 bg-gray-100 rounded-sm mt-5"
    >
      <span class="w-full flex flex-col items-start justify-center gap-3">
        <h3 class="font-semibold text-2xl text-start text-text-primary">
          Profile Information
        </h3>
        <p class="text-text-secondary">Update your personal information.</p>
      </span>
      <form action="" class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        <UiFormGroup
          label="first name"
          id="first-name"
          :error-condition="formBLured.firstName && !form.firstName"
          error-message="the first name is required !"
          direction="col"
        >
          <input
            type="text"
            name="first-name"
            id="first-name"
            v-model="form.firstName"
            @blur="() => (formBLured.firstName = true)"
            class="input"
            placeholder="enter the first name ..."
          />
        </UiFormGroup>
        <UiFormGroup
          label="last name"
          id="last-name"
          :error-condition="formBLured.lastName && !form.lastName"
          error-message="the last name is required !"
          direction="col"
        >
          <input
            type="text"
            name="last-name"
            id="last-name"
            v-model="form.lastName"
            @blur="() => (formBLured.lastName = true)"
            class="input"
            placeholder="enter the last name ..."
          />
        </UiFormGroup>
        <UiFormGroup
          label="email"
          id="email"
          :error-condition="formBLured.email && !form.email"
          error-message="the email is required !"
          direction="col"
        >
          <input
            type="email"
            name="email"
            id="email"
            v-model="form.email"
            @blur="() => (formBLured.email = true)"
            class="input"
            placeholder="enter the email ..."
          />
        </UiFormGroup>
        <UiFormGroup
          label="phone"
          id="phone"
          :error-condition="formBLured.phone && !form.phone"
          error-message="the phone is required !"
          direction="col"
        >
          <input
            type="tel"
            name="phone"
            id="phone"
            v-model="form.phone"
            @blur="() => (formBLured.phone = true)"
            class="input"
            placeholder="enter the phone ..."
          />
        </UiFormGroup>
        <div class="flex-1 col-span-2 flex items-center justify-end gap-3 mt-5">
          <button
            type="submit"
            class="bg-accent text-white cursor-pointer px-4 py-2 rounded-sm disabled:bg-secondary/70 disabled:cursor-not-allowed"
            :disabled="!isChangedProfileValues"
          >
            save changes
          </button>
        </div>
      </form>
    </div>
    <div
      v-if="activeTab === 'notifications'"
      class="w-full flex flex-col p-3 bg-gray-100 backdrop-blur-md items-start justify-center gap-2 rounded-sm mt-5"
    >
      <span class="w-full flex flex-col items-start justify-center gap-3">
        <h3 class="font-semibold text-2xl text-start text-text-primary">
          Notification Preferences
        </h3>
        <p class="text-text-secondary">
          Configure how you receive notifications.
        </p>
      </span>
      <form action="" class="w-full flex flex-col gap-3 mt-5">
        <lable
          for="email-notifications"
          class="w-full flex items-center justify-between"
        >
          <span class="flex flex-col items-start justify-center">
            <h4 class="font-semibold text-lg text-text-primary">
              Email Notifications
            </h4>
            <p class="text-text-secondary">
              Choose which email notifications you receive.
            </p>
          </span>
          <UiSwitch id="email-notifications" />
        </lable>
        <lable
          for="push-notifications"
          class="w-full flex items-center justify-between"
        >
          <span class="flex flex-col items-start justify-center">
            <h4 class="font-semibold text-lg text-text-primary">
              Push Notifications
            </h4>
            <p class="text-text-secondary">Receive notifications in the app.</p>
          </span>
          <UiSwitch id="push-notifications" />
        </lable>
        <lable
          for="event-reminders"
          class="w-full flex items-center justify-between"
        >
          <span class="flex flex-col items-start justify-center">
            <h4 class="font-semibold text-lg text-text-primary">
              Event Reminders
            </h4>
            <p class="text-text-secondary">
              Get reminded about upcoming events.
            </p>
          </span>
          <UiSwitch id="event-reminders" />
        </lable>
        <lable
          for="team-updates"
          class="w-full flex items-center justify-between"
        >
          <span class="flex flex-col items-start justify-center">
            <h4 class="font-semibold text-lg text-text-primary">
              Team Updates
            </h4>
            <p class="text-text-secondary">Get notified about team changes.</p>
          </span>
          <UiSwitch id="team-updates" />
        </lable>
        <div class="flex-1 col-span-2 flex items-center justify-end gap-3">
          <button
            type="submit"
            class="bg-primary text-white cursor-pointer px-4 py-2 rounded-sm"
          >
            save changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});
const formBLured = ref({
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
});

const activeTab = shallowRef<"profile" | "security" | "notifications">(
  "profile"
);

const { userStore } = useUser();

const isChangedProfileValues = computed(() => {
  return (
    form.value.firstName !== userStore.value?.first_name ||
    form.value.lastName !== userStore.value?.last_name ||
    form.value.email !== userStore.value?.email ||
    form.value.phone !== userStore.value?.phone
  );
});

watchEffect(() => {
  if (!userStore.value) return;
  form.value.firstName = userStore.value?.first_name;
  form.value.lastName = userStore.value?.last_name;
  form.value.email = userStore.value?.email;
  form.value.phone = userStore.value?.phone;
});

useSeoMeta({
  title: "Settings",
  description: "Manage your account and application preferences.",
});
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "default",
  },
  layout: "dashboard",
});
</script>
