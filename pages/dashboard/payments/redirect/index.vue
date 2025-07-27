<template>
  <div class="app-container flex flex-col items-center justify-center h-screen">
    <div
      v-if="
        route.query && route.query.success?.toString()?.toLowerCase() === 'true'
      "
      class="max-w-full md:max-w-sm flex flex-col items-center justify-center gap-2 glass-card p-6"
    >
      <span
        class="flex items-center justify-center rounded-full bg-emerald-200/50 p-12 shadow-md backdrop-blur-lg"
      >
        <Icon
          name="solar:bill-check-bold"
          class="text-8xl text-emerald-700 shadow-lg"
        />
      </span>
      <div>
        <h3 class="text-2xl text-text-primary font-bold text-center mb-3">
          The payment was made successfully!
        </h3>
        <p class="text-sm text-secondary-text text-center mb-5">
          You can close this window now. Your payment has been processed
          successfully.
        </p>
        <ul>
          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Process ID :</strong> {{ route.query.id }}
          </li>
          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Order ID :</strong> {{ route.query.order }}
          </li>
          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Card No :</strong>
            {{ route.query["source_data.pan"]?.toString()?.padStart(14, "*") }}
          </li>
          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Card Bank :</strong>
            {{ route.query["source_data.sub_type"] }}
          </li>

          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Amount :</strong>
            {{
              (parseFloat(route.query.amount_cents) / 100).toLocaleString(
                "en-EG",
                {
                  style: "currency",
                  currency: (route.query.currency || "EGP") as string,
                }
              )
            }}
          </li>
          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Order processing :</strong>
            {{ route.query.pending || "N/A" }}
          </li>
          <li class="flex gap-3 items-center justify-start mb-1">
            <strong>Order Date :</strong>
            {{
              route.query.created_at
                ? new Date(route.query.created_at as string).toLocaleString(
                    "en-EG",
                    {
                      dateStyle: "full",
                      timeStyle: "short",
                    }
                  )
                : "N/A"
            }}
          </li>
        </ul>
        <div class="w-full flex items-center justify-center pt-5">
          <UiButton type="button">
            <NuxtLink to="/dashboard/events"> Go to Events </NuxtLink>
          </UiButton>
        </div>
      </div>
    </div>
    <div
      v-if="
        route.query && route.query.success?.toString()?.toLowerCase() !== 'true'
      "
      class="max-w-full md:max-w-sm flex flex-col items-center justify-center gap-2 glass-card p-6"
    >
      <span
        class="flex items-center justify-center rounded-full bg-red-200/50 p-12 shadow-md backdrop-blur-lg"
      >
        <Icon
          name="solar:bill-cross-bold"
          class="text-8xl text-red-700 shadow-lg"
        />
      </span>
      <div>
        <h3 class="text-2xl text-text-primary font-bold text-center mb-3">
          The payment failed
        </h3>
        <p class="text-sm text-secondary-text text-center mb-5">
          Please confirm the card or wallet. and try again later.
        </p>
        <div class="w-full flex items-center justify-center pt-5">
          <UiButton type="button">
            <NuxtLink to="/dashboard/events"> Go to Events </NuxtLink>
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  layout: "dashboard",
});
</script>
