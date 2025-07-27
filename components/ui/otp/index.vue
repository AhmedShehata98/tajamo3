<template>
  <input
    v-for="(digit, index) in otpLength || 6"
    :key="index"
    type="text"
    maxlength="1"
    class="w-12 h-12 text-center text-xl font-semibold bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
    :class="{
      'border-red-500': verifyStatus === 'failed',
      'border-green-300': verifyStatus === 'success' && otpValue[index] !== '',
      'border-gray-300': verifyStatus === 'idle' && otpValue[index] === '',
    }"
    v-model="otpValue[index]"
    @input="handleOtpInput($event, index)"
    @keydown="handleOtpKeydown($event, index)"
    ref="otpInputs"
    placeholder="0"
  />
</template>
<script setup lang="ts">
export type VerifyOtpState = "success" | "failed" | "idle";
const otpInputs = ref<HTMLInputElement[]>([]);
// const form = reactive({
//   otp: [],
// });

const otpValue = defineModel({
  type: Array as PropType<string[]>,
  default: () => [],
});

const props = defineProps<{
  otpLength: number;
  verifyStatus: VerifyOtpState;
}>();

const getOtpFromClipboard = async (event: KeyboardEvent) => {
  const clipboardText = await navigator.clipboard.readText();
  const digits = clipboardText
    .replace(/\D/g, "")
    .split("")
    .slice(0, props.otpLength);
  return digits;
};

const handleOtpInput = (event: Event, index: number) => {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  if (value && index < props.otpLength - 1) {
    otpInputs.value[index + 1]?.focus();
  }
};
const handleOtpKeydown = async (event: KeyboardEvent, index: number) => {
  const eventKey = event.key;
  let currentIndex = index;

  if ((event.ctrlKey || event.metaKey) && eventKey.toLowerCase() === "v") {
    event.preventDefault();
    const pin = await getOtpFromClipboard(event);
    otpValue.value = pin;
  } else if (event.key === "ArrowLeft" && index > 0) {
    otpInputs.value[index - 1]?.focus();
  } else if (event.key === "ArrowRight" && index < props.otpLength - 1) {
    otpInputs.value[index + 1]?.focus();
  } else if (eventKey === "Backspace" && currentIndex > -1) {
    otpValue.value[currentIndex] = "";
    currentIndex = currentIndex - 1;
    otpInputs.value[currentIndex]?.focus();
    otpValue.value[currentIndex] = "";
  }
};
</script>
