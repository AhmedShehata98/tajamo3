import { u as useCountdown, _ as _sfc_main$1, a as _sfc_main$2, A as AuthOtpFactory, G as GetUserByPhoneNumberCommand, V as VerifyOtpByPhoneCommand, R as RemoveOtpCommand, C as CreateTokenOtpByPhoneCommand } from './use-countdown-joqCFAxK.mjs';
import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DzJA0YMK.mjs';
import { defineComponent, useSSRContext, reactive, shallowRef, ref, computed, watch, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { toast } from 'vue-sonner';
import { u as useRouter, n as navigateTo } from './server.mjs';
import { u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-CmGrW10P.mjs';
import '../_/nitro.mjs';
import 'jsonwebtoken';
import '@supabase/supabase-js';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import './ssr-Df1vlv0O.mjs';
import './fetch-DNROhRzN.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const otpLength = 6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      formatted: counter,
      stop: stopCounter,
      isRunning: counterRunning
    } = useCountdown(5 * 60 * 1e3);
    const router = useRouter();
    const form = reactive({
      otp: Array(6).fill(""),
      phoneNumber: "",
      countryCode: "20"
    });
    const bluredForm = reactive({
      otp: false,
      phoneNumber: false
    });
    const loginState = shallowRef("inputs");
    const { userStore } = useUser();
    const otpVerifyStatus = ref("idle");
    const isPending = ref(false);
    const otpResponse = ref();
    const timeoutRefs = [];
    const fullPhoneNumber = computed(() => {
      return form.phoneNumber.startsWith("0") ? `${form.countryCode}${form.phoneNumber.slice(1)}` : `${form.countryCode}${form.phoneNumber}`;
    });
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
          { duration: 5e3 }
        );
      }
    }
    async function confirmOtp() {
      try {
        let timeoutRef = void 0;
        if (timeoutRef) ;
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
        toast.success("OTP verified successfully", { duration: 1e3 });
        await navigateTo("/dashboard");
      } catch (error) {
        otpVerifyStatus.value = "failed";
        isPending.value = false;
        loginState.value = "otp";
        toast.error(error instanceof Error ? error.message : "confirm otp error", {
          duration: 5e3
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
    useSeoMeta({
      title: "login",
      description: "login to your account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPhoneInput = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_UiOtp = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-[#EAEFEF]" }, _attrs))} data-v-83d954ff><div class="flex flex-col justify-center items-center w-full rounded-md md:w-fit bg-white p-8 md:p-14 shadow-md" data-v-83d954ff><div class="w-full max-w-sm" data-v-83d954ff><div class="mb-8 text-center" data-v-83d954ff><h1 class="font-logo text-accent text-3xl mb-5" data-v-83d954ff>Tajammoa</h1><h2 class="text-xl font-semibold text-gray-800 mb-1" data-v-83d954ff> Welcome to event management platform </h2>`);
      if (unref(loginState) === "inputs") {
        _push(`<p class="text-gray-500" data-v-83d954ff> Sign in to continue </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><form class="space-y-6" data-v-83d954ff>`);
      if (unref(loginState) === "inputs") {
        _push(ssrRenderComponent(_component_UiPhoneInput, {
          modelValue: unref(form).phoneNumber,
          "onUpdate:modelValue": ($event) => unref(form).phoneNumber = $event,
          countryCode: unref(form).countryCode,
          "onUpdate:countryCode": ($event) => unref(form).countryCode = $event,
          placeholder: "Enter your phone number",
          error: !unref(form).phoneNumber && unref(bluredForm).phoneNumber ? "Please enter your phone number" : void 0
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(loginState) === "inputs") {
        _push(`<button type="button" class="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow"${ssrIncludeBooleanAttr(unref(isPending) || !unref(form).phoneNumber) ? " disabled" : ""} data-v-83d954ff>`);
        if (!unref(isPending)) {
          _push(`<span data-v-83d954ff>Sign in</span>`);
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "line-md:loading-twotone-loop",
            class: "animate-spin text-xl mx-auto"
          }, null, _parent));
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loginState) === "otp") {
        _push(`<div class="flex flex-col space-y-4 bg-zinc-100 rounded-lg p-3" data-v-83d954ff><div class="text-center" data-v-83d954ff><h3 class="text-lg font-semibold text-gray-800 mb-2" data-v-83d954ff> Enter the OTP sent to your phone </h3><p class="text-gray-500 text-sm" data-v-83d954ff> Please enter the 6-digit code sent to you </p></div><span class="grid grid-cols-6 gap-2" data-v-83d954ff>`);
        _push(ssrRenderComponent(_component_UiOtp, {
          modelValue: unref(form).otp,
          "onUpdate:modelValue": ($event) => unref(form).otp = $event,
          "otp-length": otpLength,
          "verify-status": unref(otpVerifyStatus)
        }, null, _parent));
        _push(`</span><span class="flex items-center justify-between mt-4" data-v-83d954ff><button type="button" class="p-2 flex items-center justify-center gap-2 rounded-lg text-accent capitalize text-sm hover:bg-accent/15 hover:text-accent transition-all duration-200" data-v-83d954ff> send to email </button>`);
        if (!unref(counterRunning)) {
          _push(`<button type="button" class="p-2 flex items-center justify-center gap-2 rounded-lg text-accent capitalize text-sm hover:bg-accent/15 hover:text-accent transition-all duration-200"${ssrIncludeBooleanAttr(unref(counterRunning) || unref(isPending)) ? " disabled" : ""} data-v-83d954ff> re-send </button>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(counterRunning)) {
          _push(`<p class="p-2 flex items-center justify-center gap-2 rounded-lg text-gray-700/60 font-semibold capitalize text-sm" data-v-83d954ff> re-send again : ${ssrInterpolate(unref(counter))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center my-2" data-v-83d954ff><div class="flex-1 h-px bg-gray-200" data-v-83d954ff></div><span class="mx-3 text-gray-400 text-sm" data-v-83d954ff>or</span><div class="flex-1 h-px bg-gray-200" data-v-83d954ff></div></div><button type="button" class="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200" data-v-83d954ff><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" data-v-83d954ff> Sign in with Google </button><div class="text-center mt-4 text-sm text-gray-500" data-v-83d954ff> New user? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-accent hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Account`);
          } else {
            return [
              createTextVNode("Create Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-83d954ff"]]);

export { index as default };
//# sourceMappingURL=index-DT0hYO1u.mjs.map
