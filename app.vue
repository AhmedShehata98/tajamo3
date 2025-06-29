<template>
  <NuxtLayout>
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
</script>
<style>
/* card */
.card-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Standard Material curve */
}
.card-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  box-shadow: none;
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.card-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.card-leave-to {
  /* opacity: 0; */
  transform: translateY(10px) scale(0.92);
  box-shadow: none;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* Page */
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease-out, opacity 0.4s ease-out;
  will-change: transform, opacity;
}

.page-enter-from,
.page-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  transform: translateX(0);
  opacity: 1;
}
/* .page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out,
    backdrop-filter 0.4s ease-out;
  will-change: opacity, transform, backdrop-filter;
}

.page-enter-from,
.page-leave-to {
  transform: translateY(10px);
  backdrop-filter: blur(4px);
} */
</style>
