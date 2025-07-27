<template>
  <div
    class="fixed md:hidden top-16 left-0 z-40 p-4 w-full h-screen flex item-center justify-start bg-background transition-all duration-300"
  >
    <nav class="w-full h-fit grid grid-auto-rows gap-y-2">
      <nuxt-link
        href="/dashboard"
        class="h-fit flex item-center justify-start gap-3 px-4 py-2.5 text-primary font-semibold text-base capitalize rounded-md"
        :class="{
          'bg-primary/90 text-white shadow-md':
            route.path.includes('/dashboard') && route.path === '/dashboard',
        }"
        @click="$emit('close')"
      >
        home
      </nuxt-link>
      <nuxt-link
        href="/dashboard/events"
        class="h-fit flex item-center justify-start gap-3 px-4 py-2.5 text-primary font-semibold text-base capitalize rounded-md"
        :class="{
          'bg-primary/90 text-white shadow-md':
            route.path.includes('/dashboard/events'),
        }"
        @click="$emit('close')"
      >
        events
      </nuxt-link>
      <nuxt-link
        href="/dashboard/orders"
        class="h-fit flex item-center justify-start gap-3 px-4 py-2.5 text-primary font-semibold text-base capitalize rounded-md"
        :class="{
          'bg-primary/90 text-white shadow-md':
            route.path.includes('/dashboard/orders'),
        }"
        @click="$emit('close')"
      >
        orders
      </nuxt-link>
      <nuxt-link
        href="/dashboard/tickets"
        class="h-fit flex item-center justify-start gap-3 px-4 py-2.5 text-primary font-semibold text-base capitalize rounded-md"
        :class="{
          'bg-primary/90 text-white shadow-md':
            route.path.includes('/dashboard/ticket'),
        }"
        @click="$emit('close')"
      >
        tickets
      </nuxt-link>
      <nuxt-link
        href="/dashboard/settings"
        class="h-fit flex item-center justify-start gap-3 px-4 py-2.5 text-primary font-semibold text-base capitalize rounded-md"
        :class="{
          'bg-primary/90 text-white shadow-md': route.path.includes(
            '/dashboard/settings'
          ),
        }"
        @click="$emit('close')"
      >
        settings
      </nuxt-link>
    </nav>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
defineEmits(["close"]);
</script>
