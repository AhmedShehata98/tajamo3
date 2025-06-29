<template>
  <transition name="apple-card" mode="out-in">
    <div class="card" v-if="visible">
      <slot />
    </div>
  </transition>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    required: true,
    default: true,
  },
});
</script>

<style scoped>
.apple-card-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 1.25, 0.5, 1); /* spring-ish bounce */
}
.apple-card-leave-active {
  transition: all 0.4s ease;
}

.apple-card-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.apple-card-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.apple-card-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.apple-card-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
}
</style>
