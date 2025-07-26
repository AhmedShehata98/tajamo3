import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { _ as _sfc_main$1 } from './FormGroup-K5NL2dvp.mjs';
import { u as useCountdown, _ as _sfc_main$1$1, a as _sfc_main$2, A as AuthOtpFactory, V as VerifyOtpByPhoneCommand, b as CreateUserByPhoneCommand, C as CreateTokenOtpByPhoneCommand } from './use-countdown-joqCFAxK.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DzJA0YMK.mjs';
import { defineComponent, ref, reactive, shallowRef, computed, watch, mergeProps, unref, withCtx, withDirectives, createVNode, vModelText, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { toast } from 'vue-sonner';
import { u as useRouter } from './server.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/utils/lib/css/icon';
import './asyncData-CmGrW10P.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/nitro.mjs';
import 'jsonwebtoken';
import '@supabase/supabase-js';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'vue-router';
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
    const router = useRouter();
    const isSendOtpCode = ref(false);
    const isPending = ref(false);
    const { signIn } = useAuth();
    const {
      stop: stopCountdown,
      isRunning,
      formatted
    } = useCountdown(5 * 60 * 1e3);
    const otpVerifyStatus = ref("idle");
    const form = reactive({
      otp: Array(6).fill(""),
      phoneNumber: "",
      countryCode: "20",
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      city: ""
    });
    const bluredForm = reactive({
      otp: false,
      phoneNumber: false,
      first_name: false,
      last_name: false,
      email: false,
      country: false,
      city: false
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
      { label: "Somalia", value: "somalia" }
    ];
    const registerState = shallowRef("core-info");
    const timeoutRefs = [];
    const fullPhoneNumber = computed(() => {
      return form.phoneNumber.startsWith("0") ? `${form.countryCode}${form.phoneNumber.slice(1)}` : `${form.countryCode}${form.phoneNumber}`;
    });
    const handleCreateToken = async (userId) => {
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
    const handleCreateUser = async (form2) => {
      try {
        isPending.value = true;
        const phoneStrategy = AuthOtpFactory.createOTPStrategy("sms");
        const createUserCmd = new CreateUserByPhoneCommand(form2, phoneStrategy);
        const createdUser = await createUserCmd.execute();
        if (!createdUser) {
          throw new Error("Failed to create user ,can't find created user id");
        }
        await handleCreateToken(createdUser.id);
        isPending.value = false;
        toast.success(
          "Your account has been created successfully , redirecting to dashboard",
          {
            duration: 1e3
          }
        );
        timeoutRefs.push(
          setTimeout(() => {
            router.push("/dashboard");
          }, 1e3)
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
              city: form.city
            });
          }
        }
      }
    );
    useSeoMeta({
      title: "register",
      description: "register new account",
      keywords: "register, create account, new account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_UiFormGroup = _sfc_main$1;
      const _component_UiPhoneInput = _sfc_main$1$1;
      const _component_UiOtp = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-[#EAEFEF]" }, _attrs))} data-v-660e3305><div class="flex flex-col justify-center items-center w-full md:w-fit rounded-md bg-white p-8 md:p-14 shadow-md" data-v-660e3305><div class="w-full max-w-sm" data-v-660e3305><div class="mb-8 text-center" data-v-660e3305>`);
      if (unref(registerState) !== "core-info") {
        _push(`<button type="button" class="place-self-center flex items-center justify-center mb-5 aspect-square px-3 py-2 rounded-md bg-primary hover:bg-primary/60 transition-colors duration-200" data-v-660e3305>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:round-arrow-back-ios",
          class: "text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-200"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="font-logo text-accent text-3xl mb-5" data-v-660e3305>Tajammoa</h1><h2 class="text-xl font-semibold text-gray-800 mb-1" data-v-660e3305> Create New Account </h2><p class="text-gray-500" data-v-660e3305> Fill in the form below to create a new account </p></div><form class="space-y-6" data-v-660e3305>`);
      if (unref(registerState) === "core-info") {
        _push(`<div class="flex flex-col space-y-4" data-v-660e3305><div class="grid grid-cols-2 gap-2" data-v-660e3305>`);
        if (!unref(isSendOtpCode)) {
          _push(ssrRenderComponent(_component_UiFormGroup, {
            label: "First Name",
            "error-condition": !unref(form).first_name && unref(bluredForm).first_name,
            "error-message": "Please enter your first name",
            direction: "col",
            id: "first-name"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<input type="text" placeholder="Enter your first name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50" name="first-name" id="first-name"${ssrRenderAttr("value", unref(form).first_name)} data-v-660e3305${_scopeId}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    type: "text",
                    placeholder: "Enter your first name",
                    class: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50",
                    name: "first-name",
                    id: "first-name",
                    "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                    onBlur: () => unref(bluredForm).first_name = true
                  }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                    [vModelText, unref(form).first_name]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!unref(isSendOtpCode)) {
          _push(ssrRenderComponent(_component_UiFormGroup, {
            label: "Last Name",
            "error-condition": !unref(form).last_name && unref(bluredForm).last_name,
            "error-message": "Please enter your last name",
            direction: "col"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<input type="text" placeholder="Enter your last name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50" name="last-name" id="last-name"${ssrRenderAttr("value", unref(form).last_name)} data-v-660e3305${_scopeId}>`);
              } else {
                return [
                  withDirectives(createVNode("input", {
                    type: "text",
                    placeholder: "Enter your last name",
                    class: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50",
                    name: "last-name",
                    id: "last-name",
                    "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                    onBlur: () => unref(bluredForm).last_name = true
                  }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                    [vModelText, unref(form).last_name]
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-660e3305><label for="phone-number" class="block text-sm font-medium text-gray-700 mb-1" data-v-660e3305>Phone Number</label>`);
        _push(ssrRenderComponent(_component_UiPhoneInput, {
          modelValue: unref(form).phoneNumber,
          "onUpdate:modelValue": ($event) => unref(form).phoneNumber = $event,
          countryCode: unref(form).countryCode,
          "onUpdate:countryCode": ($event) => unref(form).countryCode = $event,
          placeholder: "Enter your phone number",
          error: !unref(form).phoneNumber && unref(bluredForm).phoneNumber ? "Please enter your phone number" : void 0
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "email",
          "error-condition": !unref(form).email && unref(bluredForm).email,
          "error-message": "Please enter your email address",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<input type="email" placeholder="Enter your email (optional)" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50" name="email" id="email"${ssrRenderAttr("value", unref(form).email)} data-v-660e3305${_scopeId}>`);
            } else {
              return [
                withDirectives(createVNode("input", {
                  type: "email",
                  placeholder: "Enter your email (optional)",
                  class: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50",
                  name: "email",
                  id: "email",
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  onBlur: () => unref(bluredForm).email = true
                }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelText, unref(form).email]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button"${ssrIncludeBooleanAttr(
          !(unref(form).phoneNumber && unref(form).first_name && unref(form).last_name) || unref(isPending)
        ) ? " disabled" : ""} class="w-full py-3 mt-10 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow" data-v-660e3305>`);
        if (!unref(isPending)) {
          _push(`<span data-v-660e3305>next</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(registerState) === "location") {
        _push(`<div class="flex flex-col space-y-4" data-v-660e3305>`);
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "Country",
          "error-condition": !unref(form).country && unref(bluredForm).country,
          "error-message": "Please enter your country",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<select name="country" id="country" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50" data-v-660e3305${_scopeId}><option value="" disabled selected data-v-660e3305${_scopeId}>Select your country</option><!--[-->`);
              ssrRenderList(arabianCountries, (country) => {
                _push2(`<option${ssrRenderAttr("value", country.value)} data-v-660e3305${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, country.value) : ssrLooseEqual(unref(form).country, country.value)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(country.label)}</option>`);
              });
              _push2(`<!--]--></select>`);
            } else {
              return [
                withDirectives(createVNode("select", {
                  name: "country",
                  id: "country",
                  "onUpdate:modelValue": ($event) => unref(form).country = $event,
                  onBlur: () => unref(bluredForm).country = true,
                  class: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"
                }, [
                  createVNode("option", {
                    value: "",
                    disabled: "",
                    selected: ""
                  }, "Select your country"),
                  (openBlock(), createBlock(Fragment, null, renderList(arabianCountries, (country) => {
                    return createVNode("option", {
                      key: country.value,
                      value: country.value
                    }, toDisplayString(country.label), 9, ["value"]);
                  }), 64))
                ], 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelSelect, unref(form).country]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "City",
          "error-condition": !unref(form).city && unref(bluredForm).city,
          "error-message": "Please enter your city",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<input type="text" placeholder="Enter your city" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50" name="city" id="city"${ssrRenderAttr("value", unref(form).city)} data-v-660e3305${_scopeId}>`);
            } else {
              return [
                withDirectives(createVNode("input", {
                  type: "text",
                  placeholder: "Enter your city",
                  class: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50",
                  name: "city",
                  id: "city",
                  "onUpdate:modelValue": ($event) => unref(form).city = $event,
                  onBlur: () => unref(bluredForm).city = true
                }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelText, unref(form).city]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="submit"${ssrIncludeBooleanAttr(
          !(unref(form).country && unref(form).city && unref(form).phoneNumber && unref(form).first_name && unref(form).last_name) || unref(isPending)
        ) ? " disabled" : ""} class="w-full py-3 mt-10 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow" data-v-660e3305>`);
        if (!unref(isPending)) {
          _push(`<span data-v-660e3305> sign up </span>`);
        } else {
          _push(`<span data-v-660e3305>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "line-md:loading-twotone-loop",
            class: "text-3xl animate-spin text-white"
          }, null, _parent));
          _push(`</span>`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(registerState) === "otp") {
        _push(`<div class="flex flex-col space-y-4" data-v-660e3305><div class="flex items-center justify-between mb-4" data-v-660e3305><h3 class="text-lg font-semibold text-gray-800" data-v-660e3305> Enter OTP Code </h3></div><div class="flex flex-col space-y-2" data-v-660e3305><label for="code" class="text-sm capitalize font-medium text-text-secondary" data-v-660e3305>code</label><div class="w-full grid grid-cols-6 gap-2 bg-zinc-50 p-2 rounded-lg" data-v-660e3305>`);
        _push(ssrRenderComponent(_component_UiOtp, {
          modelValue: unref(form).otp,
          "onUpdate:modelValue": ($event) => unref(form).otp = $event,
          "otp-length": otpLength,
          "verify-status": unref(otpVerifyStatus)
        }, null, _parent));
        _push(`</div><span class="w-full flex justify-between items-center gap-4 mt-5" data-v-660e3305><button type="button" class="text-sm font-semibold text-accent capitalize underline"${ssrIncludeBooleanAttr(unref(isSendOtpCode) || unref(isPending)) ? " disabled" : ""} data-v-660e3305><p data-v-660e3305>send to email</p></button><button type="button" class="text-sm font-semibold text-accent underline"${ssrIncludeBooleanAttr(unref(isRunning) || unref(isPending)) ? " disabled" : ""} data-v-660e3305>`);
        if (!unref(isRunning)) {
          _push(`<p class="text-inherit" data-v-660e3305>re-send</p>`);
        } else {
          _push(`<p class="text-inherit" data-v-660e3305>${ssrInterpolate(unref(formatted))}</p>`);
        }
        _push(`</button></span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center my-2" data-v-660e3305><div class="flex-1 h-px bg-gray-200" data-v-660e3305></div><span class="mx-3 text-gray-400 text-sm" data-v-660e3305>or</span><div class="flex-1 h-px bg-gray-200" data-v-660e3305></div></div><button type="button" class="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200" data-v-660e3305><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5" data-v-660e3305> Sign up with Google </button><button type="button" class="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all duration-200" data-v-660e3305><img src="https://www.svgrepo.com/show/448447/github.svg" alt="Google" class="w-5 h-5" data-v-660e3305> Sign up with github </button><div class="text-center mt-4 text-sm text-gray-500" data-v-660e3305> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-accent hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-660e3305"]]);

export { index as default };
//# sourceMappingURL=index-IDEBcbvl.mjs.map
