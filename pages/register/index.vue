<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[#EAEFEF] bg-cover bg-center no-repeat"
    style="background-image: url('/images/auth.webp')"
  >
    <!-- Right Side: Register Form -->
    <div
      class="flex flex-col justify-center items-center w-full md:w-fit rounded-md bg-white p-8 md:p-14 shadow-md"
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
          <h1 class="font-logo text-primary text-3xl mb-5">Tajamu</h1>
          <h2 class="text-xl font-semibold text-gray-800 mb-1">
            Create New Account
          </h2>
          <p class="text-gray-500">
            Fill in the form below to create a new account
          </p>
        </div>
        <div v-if="registerState === 'verified'">
          <span class="flex items-center justify-center text-9xl mb-5">
            <Icon name="emojione:party-popper" />
          </span>
          <p class="text-gray-700 font-semibold text-center text-lg mb-4">
            Account created successfully
          </p>
          <p class="text-gray-500 font-medium text-center text-sm">
            redirecting to dashboard ...
          </p>
        </div>

        <KeepAlive name="register-form">
          <form @submit.prevent="onSubmit" class="space-y-6">
            <!-- core Info -->
            <div
              class="flex flex-col space-y-4"
              v-if="registerState === 'core-info'"
            >
              <div class="grid grid-cols-2 gap-2">
                <span
                  v-if="!isSendOtpCode"
                  class="w-full flex flex-col items-start justify-start gap-2"
                >
                  <label
                    for="first-name"
                    class="text-gray-700 font-semibold text-sm text-start block capitalize"
                    >First Name</label
                  >
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                    name="firstName"
                    id="first-name"
                    v-model="firstName"
                    :firstNameAttrs
                  />
                  <small
                    v-if="firstNameAttrs.firstNameError"
                    class="text-red-500 text-sm"
                  >
                    {{ firstNameAttrs.firstNameError }}
                  </small>
                </span>
                <span
                  v-if="!isSendOtpCode"
                  class="w-full flex flex-col items-start justify-start gap-2"
                >
                  <label
                    for="last-name"
                    class="text-gray-700 font-semibold text-sm text-start block capitalize"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                    name="lastName"
                    id="last-name"
                    v-model="lastName"
                    :lastNameAttrs
                  />
                  <small
                    v-if="lastNameAttrs.lastNameError"
                    class="text-red-500 text-sm"
                  >
                    {{ lastNameAttrs.lastNameError }}
                  </small>
                </span>
              </div>
              <div>
                <label
                  for="phone-number"
                  class="text-gray-700 font-semibold text-sm text-start block capitalize"
                  >Phone Number</label
                >
                <UiPhoneInput
                  placeholder="Enter your phone number"
                  @blur:phone-number="phoneNumberAttrs.onBlur()"
                  @blur:country-code="countryCodeAttrs.onBlur()"
                  v-model:country-code="countryCode!"
                  v-model:phone-number="phoneNumber!"
                  :error="phoneNumberAttrs.phoneNumberError"
                />
              </div>
              <span
                class="w-full flex flex-col items-start justify-start gap-2"
              >
                <label
                  for="email"
                  class="text-gray-700 font-semibold text-sm text-start block capitalize"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email "
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                  name="email"
                  id="email"
                  v-model="email"
                  :emailAttrs
                />
                <small
                  v-if="emailAttrs.emailError"
                  class="text-red-500 text-sm"
                >
                  {{ emailAttrs.emailError }}
                </small>
              </span>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 mt-6 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow"
              >
                <span v-if="!isSubmitting"> sign up </span>
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
                  <otp
                    v-model="otpCode"
                    :otp-length="otpLength"
                    :verify-status="otpVerifyStatus"
                  />
                </div>
                <span
                  class="w-full flex justify-between items-center gap-4 mt-5"
                >
                  <button
                    type="button"
                    class="text-sm font-semibold text-primary capitalize underline"
                    :disabled="isSendOtpCode || isPendingSendOtp"
                  >
                    <p>send to email</p>
                  </button>
                  <button
                    type="button"
                    class="text-sm font-semibold text-primary underline"
                    :disabled="isRunning || isPendingSendOtp"
                    @click="handleSendOtp"
                  >
                    <p v-if="!isRunning" class="text-inherit">re-send</p>
                    <p v-else class="text-inherit">{{ formatted }}</p>
                  </button>
                </span>
              </div>
            </div>

            <div
              v-if="registerState === 'core-info'"
              class="flex items-center my-2"
            >
              <div class="flex-1 h-px bg-gray-200"></div>
              <span class="mx-3 text-gray-400 text-sm">or</span>
              <div class="flex-1 h-px bg-gray-200"></div>
            </div>

            <button
              v-if="registerState === 'core-info'"
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
            <button
              v-if="registerState === 'core-info'"
              type="button"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/448447/github.svg"
                alt="Google"
                class="w-5 h-5"
              />
              Sign up with github
            </button>
            <div
              v-if="registerState === 'core-info'"
              class="text-center mt-4 text-sm text-gray-500"
            >
              Already have an account?
              <NuxtLink to="/login" class="text-primary hover:underline"
                >Login</NuxtLink
              >
            </div>
          </form>
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";
import type { VerifyOtpState } from "~/components/ui/otp/index.vue";
import type { SignupState } from "~/services/auth/auth.state";
import type { UserForm } from "~/types/users";
import otp from "~/components/ui/otp/index.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import {
  sendRegisterOtpCodeFacade,
  validateOtpWithCreateUserFacade,
} from "~/services/auth/register.facade";

const initialValues = {
  phoneNumber: "",
  countryCode: "20",
  firstName: "",
  lastName: "",
  email: "",
};
// const formState = useState("register-form-state", () =>
//   ref({
//     phoneNumber: "",
//     countryCode: "20",
//     firstName: "",
//     lastName: "",
//     email: "",
//   })
// );

const schema = toTypedSchema(
  z.object({
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must be at most 10 digits"),
    countryCode: z.string().optional(),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
  })
);

const {
  values: formValues,
  defineField,
  handleSubmit,
  isSubmitting,
} = useForm({
  initialValues,
  validationSchema: schema,
});

const [firstName, firstNameAttrs] = defineField("firstName", {
  props: (state) => ({ firstNameError: state.errors[0] }),
});
const [lastName, lastNameAttrs] = defineField("lastName", {
  props: (state) => ({ lastNameError: state.errors[0] }),
});
const [email, emailAttrs] = defineField("email", {
  props: (state) => ({ emailError: state.errors[0] }),
});
const [phoneNumber, phoneNumberAttrs] = defineField("phoneNumber", {
  props: (state) => ({ phoneNumberError: state.errors[0] }),
});
const [countryCode, countryCodeAttrs] = defineField("countryCode");

const router = useRouter();
const isSendOtpCode = ref(false);
const otpCode = ref<string[]>([]);
const isPendingSendOtp = shallowRef<boolean>(false);

const {
  start: startCountdown,
  stop: stopCountdown,
  reset,
  isRunning,
  formatted,
} = useCountdown(5 * 60 * 1000);
const otpVerifyStatus = ref<VerifyOtpState>("idle");
const registerState = shallowRef<SignupState>("core-info");
const timeoutRefs: NodeJS.Timeout[] = [];
const otpLength = 6;
const handleGoBack = () => {};

async function handleSendOtp(values: UserForm) {
  try {
    const { success } = await sendRegisterOtpCodeFacade({
      email: values.email,
      phoneNumber: values.phone,
    });
    if (success) {
      registerState.value = "otp";
      toast.success("OTP sent successfully ,Check your email address", {
        duration: 1500,
        onAutoClose: () => startCountdown(),
      });
    } else {
      toast.error("Failed to create account");
    }
  } catch (error) {
    toast.error(
      error instanceof Error
        ? error.message
        : "something went wrong while creating account",
      {
        richColors: true,
      }
    );

    console.error(
      error instanceof Error ? error.message : JSON.stringify(error)
    );
  }
}

const onSubmit = handleSubmit(async (values) => {
  if (!values) throw new Error("values is undefined");

  // formState.value = { ...formState.value, ...values };

  await handleSendOtp({
    email: values.email,
    phone: `${values.countryCode}${values.phoneNumber}`,
    first_name: values.firstName,
    last_name: values.lastName,
  });
});

watch(otpCode, async (newValue) => {
  console.log(newValue);
  let timeoutRef: NodeJS.Timeout | null = null;
  if (timeoutRef) {
    clearTimeout(timeoutRef);
  }
  if (newValue.length === otpLength) {
    const { success } = await validateOtpWithCreateUserFacade({
      email: formValues.email!,
      phoneNumber: `${formValues.countryCode}${formValues.phoneNumber}`,
      otp: newValue.join(""),
      firstName: formValues.firstName!,
      lastName: formValues.lastName!,
    });
    if (success) {
      registerState.value = "verified";
      toast.success("OTP verified successfully, Account created successfully", {
        duration: 5000,
        richColors: true,
        onAutoClose: async () => await router.push("/dashboard"),
      });
      if (!success) {
        console.error("Failed to get user data");
        return;
      }
      stopCountdown();
    }
  }
});

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
