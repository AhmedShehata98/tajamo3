<template>
  <div class="min-h-screen flex items-stretch bg-gray-100">
    <!-- Left Side: Illustration & Welcome -->
    <div
      class="hidden md:flex flex-col justify-center items-center w-1/2 bg-accent p-12"
    >
      <div class="mb-8">
        <img
          src="/images/auth-register-bg.png"
          alt="Lovebirds"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-white mb-2">
          Welcome to event management platform
        </h2>
        <p class="text-white/50 max-w-md text-sm mx-auto">
          Event management platform is a platform for managing events and
          creating events for your friends and family.
        </p>
      </div>
    </div>
    <!-- Right Side: Register Form -->
    <div
      class="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8 md:p-16 shadow-lg"
    >
      <div class="w-full max-w-sm">
        <div class="mb-8 text-center">
          <button
            type="button"
            v-if="registerState !== 'core-info'"
            class="place-self-center flex items-center justify-center mb-5 aspect-square px-3 py-2 rounded-md bg-primary hover:bg-primary/60 transition-colors duration-200"
            @click="handleGoBack"
          >
            <Icon
              name="ic:round-arrow-back-ios"
              class="text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-200"
            />
          </button>
          <h1 class="font-logo text-3xl mb-2">event management platform</h1>
          <h2 class="text-xl font-semibold text-gray-800 mb-1">
            Create New Account
          </h2>
          <p class="text-gray-500">
            Fill in the form below to create a new account
          </p>
        </div>
        <form @submit.prevent="handleSendOtp" class="space-y-6">
          <!-- core Info -->
          <div
            class="flex flex-col space-y-4"
            v-if="registerState === 'core-info'"
          >
            <div class="grid grid-cols-2 gap-2">
              <UiFormGroup
                v-if="!isSendOtpCode"
                label="First Name"
                :error-condition="!form.first_name && bluredForm.first_name"
                error-message="Please enter your first name"
                direction="col"
                id="first-name"
              >
                <input
                  type="text"
                  placeholder="Enter your first name"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                  name="first-name"
                  id="first-name"
                  v-model="form.first_name"
                  @blur="() => (bluredForm.first_name = true)"
                />
              </UiFormGroup>
              <UiFormGroup
                v-if="!isSendOtpCode"
                label="Last Name"
                :error-condition="!form.last_name && bluredForm.last_name"
                error-message="Please enter your last name"
                direction="col"
              >
                <input
                  type="text"
                  placeholder="Enter your last name"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                  name="last-name"
                  id="last-name"
                  v-model="form.last_name"
                  @blur="() => (bluredForm.last_name = true)"
                />
              </UiFormGroup>
            </div>
            <div>
              <label
                for="phone-number"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Phone Number</label
              >
              <UiPhoneInput
                v-model="form.phoneNumber"
                v-model:countryCode="form.countryCode"
                placeholder="Enter your phone number"
                :error="
                  !form.phoneNumber && bluredForm.phoneNumber
                    ? 'Please enter your phone number'
                    : undefined
                "
              />
            </div>
            <UiFormGroup
              label="email"
              :error-condition="!form.email && bluredForm.email"
              error-message="Please enter your email address"
              direction="col"
            >
              <input
                type="email"
                placeholder="Enter your email (optional)"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                name="email"
                id="email"
                v-model="form.email"
                @blur="() => (bluredForm.email = true)"
              />
            </UiFormGroup>
            <button
              @click="registerState = 'location'"
              type="button"
              :disabled="
                !(form.phoneNumber && form.first_name && form.last_name) ||
                isPending
              "
              class="w-full py-3 mt-10 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow"
            >
              <span v-if="!isPending">next</span>
            </button>
          </div>

          <!-- Location Info -->
          <div
            class="flex flex-col space-y-4"
            v-if="registerState === 'location'"
          >
            <UiFormGroup
              label="Country"
              :error-condition="!form.country && bluredForm.country"
              error-message="Please enter your country"
              direction="col"
            >
              <select
                name="country"
                id="country"
                v-model="form.country"
                @blur="() => (bluredForm.country = true)"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
              >
                <option value="" disabled selected>Select your country</option>
                <option
                  v-for="country in arabianCountries"
                  :key="country.value"
                  :value="country.value"
                >
                  {{ country.label }}
                </option>
              </select>
            </UiFormGroup>
            <UiFormGroup
              label="City"
              :error-condition="!form.city && bluredForm.city"
              error-message="Please enter your city"
              direction="col"
            >
              <input
                type="text"
                placeholder="Enter your city"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                name="city"
                id="city"
                v-model="form.city"
                @blur="() => (bluredForm.city = true)"
              />
            </UiFormGroup>
            <button
              type="submit"
              :disabled="
                !(
                  form.country &&
                  form.city &&
                  form.phoneNumber &&
                  form.first_name &&
                  form.last_name
                ) || isPending
              "
              class="w-full py-3 mt-10 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow"
            >
              <span v-if="!isPending"> sign up </span>
              <span v-else>
                <Icon
                  name="line-md:loading-twotone-loop"
                  class="text-3xl animate-spin text-white"
                />
              </span>
            </button>
          </div>

          <!-- OTP Verification -->
          <div class="flex flex-col space-y-4" v-if="registerState === 'otp'">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-800">
                Enter OTP Code
              </h3>
            </div>
            <div class="flex flex-col space-y-2">
              <label
                for="code"
                class="text-sm capitalize font-medium text-text-secondary"
                >code</label
              >
              <div
                class="w-full grid grid-cols-6 gap-2 bg-zinc-50 p-2 rounded-lg"
              >
                <UiOtp
                  v-model="form.otp"
                  :otp-length="otpLength"
                  :verify-status="otpVerifyStatus"
                />
              </div>
              <span class="w-full flex justify-between items-center gap-4 mt-5">
                <button
                  type="button"
                  class="text-sm font-semibold text-accent capitalize underline"
                  :disabled="isSendOtpCode || isPending"
                >
                  <p>send to email</p>
                </button>
                <button
                  type="button"
                  class="text-sm font-semibold text-accent underline"
                  :disabled="isRunning || isPending"
                  @click="handleSendOtp"
                >
                  <p v-if="!isRunning" class="text-inherit">re-send</p>
                  <p v-else class="text-inherit">{{ formatted }}</p>
                </button>
              </span>
            </div>
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
            Sign up with Google
          </button>
          <div class="text-center mt-4 text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/" class="text-accent hover:underline"
              >Login</NuxtLink
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { VerifyOtpState } from "~/components/ui/otp/index.vue";
import {
  CreateTokenOtpByPhoneCommand,
  CreateUserByPhoneCommand,
  SendOTPByPhoneCommand,
  VerifyOtpByPhoneCommand,
} from "~/services/auth/auth.command";
import { AuthOtpFactory } from "~/services/auth/auth.factory";
import type { SignupState } from "~/services/auth/auth.state";
import type { UserForm } from "~/types/users";

const router = useRouter();
const isSendOtpCode = ref(false);
const isPending = ref(false);
const {
  start: startCountdown,
  stop: stopCountdown,
  reset,
  isRunning,
  formatted,
} = useCountdown(5 * 60 * 1000);
const otpVerifyStatus = ref<VerifyOtpState>("idle");
const form = reactive({
  otp: Array(6).fill(""),
  phoneNumber: "",
  countryCode: "20",
  first_name: "",
  last_name: "",
  email: "",
  country: "",
  city: "",
});
const bluredForm = reactive({
  otp: false,
  phoneNumber: false,
  first_name: false,
  last_name: false,
  email: false,
  country: false,
  city: false,
});
const arabianCountries = [
  { label: "Egypt", value: "egypt" },
  { label: "Saudi Arabia", value: "saudi_arabia" },
  { label: "United Arab Emirates", value: "united_arab_emirates" },
  { label: "Kuwait", value: "kuwait" },
  { label: "Qatar", value: "qatar" },
  { label: "Bahrain", value: "bahrain" },
  { label: "Oman", value: "oman" },
  { label: "Jordan", value: "jordan" },
  { label: "Lebanon", value: "lebanon" },
  { label: "Syria", value: "syria" },
  { label: "Iraq", value: "iraq" },
  { label: "Yemen", value: "yemen" },
  { label: "Palestine", value: "palestine" },
  { label: "Sudan", value: "sudan" },
  { label: "Libya", value: "libya" },
  { label: "Morocco", value: "morocco" },
  { label: "Tunisia", value: "tunisia" },
  { label: "Algeria", value: "algeria" },
  { label: "Mauritania", value: "mauritania" },
  { label: "Comoros", value: "comoros" },
  { label: "Djibouti", value: "djibouti" },
  { label: "Somalia", value: "somalia" },
];
const registerState = shallowRef<SignupState>("core-info");
const timeoutRefs: NodeJS.Timeout[] = [];
const otpLength = 6;
const fullPhoneNumber = computed(() => {
  return form.phoneNumber.startsWith("0")
    ? `${form.countryCode}${form.phoneNumber.slice(1)}`
    : `${form.countryCode}${form.phoneNumber}`;
});

const handleGoBack = () => {
  if (registerState.value === "otp") {
    registerState.value = "location";
    reset();
    stopCountdown();
  } else if (registerState.value === "location") {
    registerState.value = "core-info";
  } else {
    router.push("/register");
  }
};

const handleCreateToken = async (userId: number) => {
  try {
    isPending.value = true;
    const phoneStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const createTokenCmd = new CreateTokenOtpByPhoneCommand(
      userId,
      phoneStrategy
    );
    await createTokenCmd.execute();
  } catch (error) {
    isPending.value = false;
    toast.error(
      error instanceof Error ? error.message : "Failed to create token"
    );
    console.error("Failed to create token:", error);
  }
};

const handleSendOtp = async () => {
  try {
    isPending.value = true;
    isSendOtpCode.value = false;
    otpVerifyStatus.value = "idle";
    const phoneStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const otpByPhoneCmd = new SendOTPByPhoneCommand(
      fullPhoneNumber.value,
      phoneStrategy
    );

    await otpByPhoneCmd.execute();
    isPending.value = false;
    isSendOtpCode.value = true;
    registerState.value = "otp";
    startCountdown();

    toast.success("OTP sent successfully");
  } catch (error) {
    otpVerifyStatus.value = "failed";
    isPending.value = false;
    isSendOtpCode.value = false;
    toast.error(error instanceof Error ? error.message : "Failed to send OTP");
    console.error("Failed to send OTP:", error);
  }
};

const handleVerifyOtp = async () => {
  try {
    isPending.value = true;

    const phoneStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const otpByPhoneCmd = new VerifyOtpByPhoneCommand(
      fullPhoneNumber.value,
      form.otp.join(""),
      phoneStrategy
    );

    const isVerified = await otpByPhoneCmd.execute();
    isPending.value = false;
    if (isVerified) {
      otpVerifyStatus.value = "success";
    } else {
      otpVerifyStatus.value = "failed";
      throw new Error("Invalid OTP code");
    }
    toast.success("OTP verified successfully");
    return isVerified;
  } catch (error) {
    isPending.value = false;
    isSendOtpCode.value = false;
    toast.error(
      error instanceof Error ? error.message : "Failed to verify OTP"
    );
    console.error("Failed to send OTP:", error);
  }
};

const handleCreateUser = async (form: UserForm) => {
  try {
    isPending.value = true;
    const phoneStrategy = AuthOtpFactory.createOTPStrategy("sms");
    const createUserCmd = new CreateUserByPhoneCommand(form, phoneStrategy);

    const createdUser = await createUserCmd.execute();
    if (!createdUser) {
      throw new Error("Failed to create user ,can't find created user id");
    }
    await handleCreateToken(createdUser.id);
    isPending.value = false;
    toast.success(
      "Your account has been created successfully , redirecting to dashboard",
      {
        duration: 1000,
      }
    );
    timeoutRefs.push(
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000)
    );
  } catch (error) {
    isPending.value = false;
    isSendOtpCode.value = false;
    console.log("error: ", error);
    toast.error(
      error instanceof Error ? error.message : "Failed to sign up new account"
    );
    console.error("Failed to sign up:", error);
  }
};

watch(
  () => form.otp.join("").length,
  async (newValue) => {
    if (newValue === otpLength) {
      stopCountdown();
      const verified = await handleVerifyOtp();
      if (verified) {
        await handleCreateUser({
          first_name: form.first_name,
          last_name: form.last_name,
          phone: fullPhoneNumber.value,
          email: form.email,
          country: form.country,
          city: form.city,
        });
      }
    }
  }
);

onUnmounted(() => {
  timeoutRefs.forEach((timeout) => clearTimeout(timeout));
  stopCountdown();
});

useSeoMeta({
  title: "register",
  description: "register new account",
  keywords: "register, create account, new account",
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
