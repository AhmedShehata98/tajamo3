<template>
  <div class="relative">
    <div class="flex items-center gap-2">
      <slot name="countryCode" />
      <slot name="phoneNumber" />
    </div>
    <slot name="error" />
  </div>
</template>
