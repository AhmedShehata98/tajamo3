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
        <form class="space-y-6" @submit.prevent="handleLogin">
          <UiPhoneInput
            v-if="loginState === 'inputs'"
            v-model="form.phoneNumber"
            v-model:countryCode="form.countryCode"
            placeholder="Enter your phone number"
            :error="
              !form.phoneNumber && bluredForm.phoneNumber
                ? 'Please enter your phone number'
                : undefined
            "
          />
          <button
            v-if="loginState === 'inputs'"
            type="button"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow"
            :disabled="isPending || !form.phoneNumber"
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
          <div class="flex items-center my-2">
            <div class="flex-1 h-px bg-gray-200"></div>
            <span class="mx-3 text-gray-400 text-sm">or</span>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>
          <button
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
          <div class="text-center mt-4 text-sm text-gray-500 font-medium">
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
import {
  CreateTokenOtpByPhoneCommand,
  GetUserByPhoneNumberCommand,
  RemoveOtpCommand,
  SendOTPByPhoneCommand,
  VerifyOtpByPhoneCommand,
} from "~/services/auth/auth.command";
import { AuthOtpFactory } from "~/services/auth/auth.factory";
import type { VerifyOtpState } from "~/components/ui/otp/index.vue";
import type { Otp as OtpType } from "~/types/otps";
import otp from "~/components/ui/otp/index.vue";

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
});
const bluredForm = reactive({
  otp: false,
  phoneNumber: false,
});

const loginState = shallowRef<LoginState>("inputs");
const { userStore } = useUser();
const otpLength = 6;
const otpVerifyStatus = ref<VerifyOtpState>("idle");
const isPending = ref(false);
const otpResponse = ref<OtpType>();
const timeoutRefs: NodeJS.Timeout[] = [];
const fullPhoneNumber = computed(() => {
  return form.phoneNumber.startsWith("0")
    ? `${form.countryCode}${form.phoneNumber.slice(1)}`
    : `${form.countryCode}${form.phoneNumber}`;
});

async function handleLogin() {
  try {
    isPending.value = true;
    const phoneAuthStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const sendOtpCmd = new SendOTPByPhoneCommand(
      fullPhoneNumber.value,
      phoneAuthStrategy
    );
    const getUserCommand = new GetUserByPhoneNumberCommand(
      fullPhoneNumber.value,
      phoneAuthStrategy
    );

    const user = await getUserCommand.execute();
    if (!user) {
      // Fixme: this should be handled by the command
      toast.error("User not found, please register first");
      throw new Error("User not found, please register first");
    }
    const otp = await sendOtpCmd.execute();
    otpResponse.value = otp.otp;
    loginState.value = "otp";
    isPending.value = false;
    startCounter();
    toast.success("OTP sent successfully Check your phone");
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
async function createToken() {
  try {
    isPending.value = true;

    const phoneAuthStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const userDataCmd = new GetUserByPhoneNumberCommand(
      fullPhoneNumber.value,
      phoneAuthStrategy
    );
    const user = await userDataCmd.execute();
    if (!user) {
      toast.error("Failed to login");
      return;
    }
    userStore.value = user;
    const tokenCmd = new CreateTokenOtpByPhoneCommand(
      user.id,
      phoneAuthStrategy
    );
    await tokenCmd.execute();
    isPending.value = false;

    toast.success("Verified successfully ,redirecting to dashboard");
    timeoutRefs.push(
      setTimeout(() => {
        router.push("/dashboard");
      }, 200)
    );
  } catch (error) {
    loginState.value = "otp";
    toast.error(
      error instanceof Error ? error.message : "handle create token error",
      { duration: 5000 }
    );
  }
}
async function confirmOtp() {
  try {
    let timeoutRef: NodeJS.Timeout | undefined = undefined;
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }
    isPending.value = true;
    otpVerifyStatus.value = "idle";
    const phoneAuthStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const getUserCommand = new GetUserByPhoneNumberCommand(
      fullPhoneNumber.value,
      phoneAuthStrategy
    );
    const user = await getUserCommand.execute();
    if (!user) {
      throw new Error("User not found, please register first");
    }
    userStore.value = user;
    const verifyCmd = new VerifyOtpByPhoneCommand(
      fullPhoneNumber.value,
      form.otp.join(""),
      phoneAuthStrategy
    );
    const verified = await verifyCmd.execute();
    if (!otpResponse.value) {
      throw new Error("Can't OTP data, please try again");
    }
    const removeOtpCmd = new RemoveOtpCommand(
      otpResponse.value.id,
      phoneAuthStrategy
    );
    if (!verified) {
      otpVerifyStatus.value = "failed";
      isPending.value = false;
      loginState.value = "otp";
      toast.error("Invalid OTP, please try again");
      return;
    }
    await createToken();
    await removeOtpCmd.execute();
    isPending.value = false;
    otpVerifyStatus.value = "success";
    stopCounter();
    toast.success("OTP verified successfully", { duration: 1000 });
    await navigateTo("/dashboard");
    // FIXME: navigate to dashboard after 700ms
    // timeoutRef = setTimeout(async () => {
    // }, 700);
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
  timeoutRefs?.forEach((timeout) => {
    clearTimeout(timeout);
  });
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
