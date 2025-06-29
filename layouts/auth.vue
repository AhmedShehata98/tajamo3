<template>
  <main
    class="relative w-full min-h-screen flex items-center justify-center"
    :style="{
      backgroundImage: `url(${
        type === 'login'
          ? '/images/auth-login-bg.jpg'
          : '/images/auth-register-bg.jpg'
      })`,
    }"
  >
    <slot />
  </main>
</template>
<script setup lang="ts">
const props = defineProps<{
  type: "login" | "register";
}>();
</script>
