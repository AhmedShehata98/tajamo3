<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[#EAEFEF] bg-cover bg-center no-repeat"
    style="background-image: url('/images/auth.webp')"
  >
    <!-- Right Side: Login Form -->
    <div
      class="flex flex-col justify-center items-center w-full rounded-md md:w-fit bg-white p-8 md:p-14 shadow-md"
    >
      <div class="w-full max-w-sm">
        <div class="mb-8 text-center">
          <h1 class="font-logo text-primary text-3xl mb-5">Tajammoa</h1>
          <h2 class="text-xl font-semibold text-gray-800 mb-1">
            Welcome to event management platform
          </h2>
          <p v-if="loginState === 'inputs'" class="text-gray-500">
            Sign in to continue
          </p>
        </div>
        <div
          v-if="loginState === 'verified'"
          class="flex flex-col items-center justify-center"
        >
          <span class="flex items-center justify-center text-9xl mb-5">
            <Icon name="openmoji:authority" />
          </span>
          <p class="text-gray-700 font-semibold text-center text-lg">
            Login successful
          </p>
          <p class="text-gray-500 font-medium text-center text-sm">
            redirecting to dashboard ...
          </p>
          <nuxt-link
            href="/dashboard"
            class="flex items-center justify-center gap-2 min-w-44 bg-primary text-white font-medium px-4 py-2 rounded-sm mt-6"
          >
            <p class="text-white">Go to dashboard</p>
            <Icon name="solar:arrow-right-up-linear" />
          </nuxt-link>
        </div>
        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- <UiPhoneInput
            v-if="loginState === 'inputs'"
            v-model="form.phoneNumber"
            v-model:countryCode="form.countryCode"
            placeholder="Enter your phone number"
            :error="
              !form.phoneNumber && bluredForm.phoneNumber
                ? 'Please enter your phone number'
                : undefined
            "
          /> -->
          <input
            v-if="loginState === 'inputs'"
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            v-if="loginState === 'inputs'"
            type="button"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow"
            :disabled="isPending || !form.email"
            @click.prevent="handleLogin"
          >
            <span v-if="!isPending">Sign in</span>
            <Icon
              v-else
              name="line-md:loading-twotone-loop"
              class="animate-spin text-xl mx-auto"
            />
          </button>
          <div
            v-if="loginState === 'otp'"
            class="flex flex-col space-y-4 bg-zinc-100 rounded-lg p-3"
          >
            <div class="text-center">
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                Enter the OTP sent to your phone
              </h3>
              <p class="text-gray-500 text-sm">
                Please enter the 6-digit code sent to you
              </p>
            </div>
            <span class="grid grid-cols-6 gap-2">
              <otp
                v-model="form.otp"
                :otp-length="otpLength"
                :verify-status="otpVerifyStatus"
              />
            </span>
            <span class="flex items-center justify-between mt-4">
              <button
                type="button"
                class="p-2 flex items-center justify-center gap-2 rounded-lg text-primary capitalize text-sm hover:bg-primary/15 hover:text-primary transition-all duration-200"
              >
                send to email
              </button>
              <button
                type="button"
                class="p-2 flex items-center justify-center gap-2 rounded-lg text-primary capitalize text-sm hover:bg-primary/15 hover:text-primary transition-all duration-200"
                :disabled="counterRunning || isPending"
                @click="handleResend"
                v-if="!counterRunning"
              >
                re-send
              </button>
              <p
                class="p-2 flex items-center justify-center gap-2 rounded-lg text-gray-700/60 font-semibold capitalize text-sm"
                v-if="counterRunning"
              >
                re-send again : {{ counter }}
              </p>
            </span>
          </div>
          <div v-if="loginState === 'inputs'" class="flex items-center my-2">
            <div class="flex-1 h-px bg-gray-200"></div>
            <span class="mx-3 text-gray-400 text-sm">or</span>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>
          <button
            v-if="loginState === 'inputs'"
            type="button"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              class="w-5 h-5"
            />
            Sign in with Google
          </button>
          <div
            v-if="loginState === 'inputs'"
            class="text-center mt-4 text-sm text-gray-500 font-medium"
          >
            New user?
            <NuxtLink to="/register" class="text-primary hover:underline"
              >Create Account</NuxtLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { LoginState } from "~/services/auth/auth.state";
import type { VerifyOtpState } from "~/components/ui/otp/index.vue";
import type { Otp as OtpType } from "~/types/otps";
import otp from "~/components/ui/otp/index.vue";
import { loginByEmailFacade } from "~/services/auth/login.facade";
import {
  verifyOtpCode,
  generateToken,
  deleteOtp,
} from "~/services/auth/auth-shared";

const {
  formatted: counter,
  start: startCounter,
  stop: stopCounter,
  isRunning: counterRunning,
} = useCountdown(5 * 60 * 1000);
const router = useRouter();
const form = reactive({
  otp: Array(6).fill(""),
  phoneNumber: "",
  countryCode: "20",
  email: "",
});
const bluredForm = reactive({
  otp: false,
  phoneNumber: false,
  email: false,
});

const loginState = shallowRef<LoginState>("inputs");
const otpLength = 6;
const otpVerifyStatus = ref<VerifyOtpState>("idle");
const isPending = ref(false);
const otpResponse = ref<OtpType>();
let timeoutRef: NodeJS.Timeout | null = null;
const fullPhoneNumber = computed(() => {
  return form.phoneNumber.startsWith("0")
    ? `${form.countryCode}${form.phoneNumber.slice(1)}`
    : `${form.countryCode}${form.phoneNumber}`;
});

async function handleLogin() {
  try {
    isPending.value = true;
    const { isSuccess, user } = await loginByEmailFacade(form.email);
    if (!isSuccess) throw new Error("Failed to login");
    loginState.value = "otp";
    isPending.value = false;
    startCounter();
    toast.success("OTP sent successfully ,Check your email address", {
      duration: 5000,
    });
  } catch (error) {
    loginState.value = "inputs";
    isPending.value = false;
    toast.error(error instanceof Error ? error.message : "handle login error", {
      duration: 5000,
    });
  }
}

async function handleResend() {
  try {
    await handleLogin();
    startCounter();
    loginState.value = "otp";
  } catch (error) {
    stopCounter();
    otpVerifyStatus.value = "failed";
    loginState.value = "inputs";
    toast.error(
      error instanceof Error ? error.message : "handle resend error",
      { duration: 5000 }
    );
  }
}

async function confirmOtp() {
  try {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }
    isPending.value = true;
    otpVerifyStatus.value = "idle";
    const otpVerifyData = await verifyOtpCode({
      contact_source: form.email,
      code: form.otp.join(""),
    });
    if (!otpVerifyData || otpVerifyData.data === false) {
      otpVerifyStatus.value = "failed";
      return;
    }

    await generateToken(form.email);
    await deleteOtp({
      contact_source: form.email,
      code: form.otp.join(""),
    });

    otpVerifyStatus.value = "success";
    loginState.value = "verified";
    isPending.value = false;
    timeoutRef = setTimeout(async () => {
      await router.push("/dashboard");
    }, 4500);
    toast.success("Login successful ,Redirect to dashboard", {
      richColors: true,
      duration: 5000,
      onAutoClose: async () => await router.push("/dashboard"),
    });
  } catch (error) {
    otpVerifyStatus.value = "failed";
    isPending.value = false;
    loginState.value = "otp";
    toast.error(error instanceof Error ? error.message : "confirm otp error", {
      duration: 5000,
    });
  }
}

watch(
  () => form.otp.join("").length,
  async (newValue) => {
    if (newValue === otpLength) {
      confirmOtp();
    }
  }
);

onUnmounted(() => {
  if (timeoutRef) {
    clearTimeout(timeoutRef);
  }

  stopCounter();
  otpResponse.value = undefined;
  otpVerifyStatus.value = "idle";
  isPending.value = false;
  loginState.value = "inputs";
  form.otp = Array(6).fill("");
  form.phoneNumber = "";
  form.countryCode = "20";
  bluredForm.otp = false;
  bluredForm.phoneNumber = false;
});

useSeoMeta({
  title: "login",
  description: "login to your account",
});
definePageMeta({
  middleware: "auth",
  pageTransition: {
    name: "page",
    mode: "default",
  },
});
</script>

<style scoped>
.font-logo {
  font-family: "Pacifico", cursive, sans-serif;
}
</style>
