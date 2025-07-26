import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { defineComponent, ref, computed, mergeProps, mergeModels, useModel, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiPhoneInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    countryCode: {},
    placeholder: {},
    error: {},
    inputClass: {}
  },
  emits: ["update:modelValue", "update:countryCode"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(false);
    const searchQuery = ref("");
    const countries = [
      { name: "Saudi Arabia", code: "966", flag: "circle-flags:sa" },
      { name: "UAE", code: "971", flag: "circle-flags:ae" },
      { name: "Egypt", code: "20", flag: "circle-flags:eg" },
      { name: "Jordan", code: "962", flag: "circle-flags:jo" },
      { name: "Kuwait", code: "965", flag: "circle-flags:kw" },
      { name: "Qatar", code: "974", flag: "circle-flags:qa" },
      { name: "Bahrain", code: "973", flag: "circle-flags:bh" },
      { name: "Oman", code: "968", flag: "circle-flags:om" }
    ];
    const selectedCountry = computed(() => {
      return countries.find((c) => c.code === props.countryCode) || countries[0];
    });
    const phoneNumber = computed(() => props.modelValue);
    const filteredCountries = computed(() => {
      if (!searchQuery.value) return countries;
      const query = searchQuery.value.toLowerCase();
      return countries.filter(
        (country) => country.name.toLowerCase().includes(query) || country.code.includes(query)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="flex items-center gap-2"><div class="relative"><button type="button" class="flex items-center gap-2 px-3 py-3 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: selectedCountry.value.flag,
        class: "w-5 h-5"
      }, null, _parent));
      _push(`<span class="text-gray-700">+${ssrInterpolate(selectedCountry.value.code)}</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chevron-down",
        class: ["w-4 h-4 text-gray-500 transition-transform duration-200", { "rotate-180": isOpen.value }]
      }, null, _parent));
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<div class="${ssrRenderClass([isOpen.value ? "scale-100 opacity-100" : "scale-95 opacity-0", "absolute z-10 mt-1 w-64 max-h-60 overflow-auto bg-white rounded-lg shadow-lg border border-gray-200 transform origin-top transition-all duration-200"])}"><div class="p-2"><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Search country..." class="${ssrRenderClass([_ctx.inputClass, "w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"])}"></div><div class="max-h-48 overflow-y-auto"><!--[-->`);
        ssrRenderList(filteredCountries.value, (country) => {
          _push(`<button class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: country.flag,
            class: "w-5 h-5"
          }, null, _parent));
          _push(`<span class="text-gray-700">${ssrInterpolate(country.name)}</span><span class="text-gray-500 ml-auto">+${ssrInterpolate(country.code)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1"><input type="tel" pattern="\\d*" inputmode="numeric"${ssrRenderAttr("value", phoneNumber.value)}${ssrRenderAttr("placeholder", _ctx.placeholder)} class="${ssrRenderClass([{ "border-red-500": _ctx.error }, "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-gray-900 placeholder:text-gray-400 bg-gray-50"])}">`);
      if (_ctx.error) {
        _push(`<p class="mt-1 text-sm text-red-500">${ssrInterpolate(_ctx.error)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UiPhoneInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    otpLength: {},
    verifyStatus: {}
  }, {
    "modelValue": {
      type: Array,
      default: () => []
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    ref([]);
    const otpValue = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.otpLength || 6, (digit, index) => {
        _push(`<input type="text" maxlength="1" class="${ssrRenderClass([{
          "border-red-500": _ctx.verifyStatus === "failed",
          "border-green-300": _ctx.verifyStatus === "success" && otpValue.value[index] !== "",
          "border-gray-300": _ctx.verifyStatus === "idle" && otpValue.value[index] === ""
        }, "w-12 h-12 text-center text-xl font-semibold bg-gray-50 border border-gray-300 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"])}"${ssrRenderAttr("value", otpValue.value[index])} placeholder="0">`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/otp/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
class VerifyOtpByPhoneCommand {
  constructor(phone, otp, authOtpStrategy) {
    this.phone = phone;
    this.otp = otp;
    this.authOtpStrategy = authOtpStrategy;
  }
  async execute() {
    const verified = await this.authOtpStrategy.verifyOtp({
      resource: this.phone,
      otp: this.otp
    });
    console.log("Command: Verify OTP By Phone");
    console.log("verify :", verified);
    return verified;
  }
}
class CreateTokenOtpByPhoneCommand {
  constructor(userId, authOtpStrategy) {
    this.userId = userId;
    this.authOtpStrategy = authOtpStrategy;
  }
  async execute() {
    const token = await this.authOtpStrategy.createToken(this.userId);
    console.log("Command: Create Token OTP By Phone");
    console.log("token :", token);
  }
}
class GetUserByPhoneNumberCommand {
  constructor(phone, authOtpStrategy) {
    this.phone = phone;
    this.authOtpStrategy = authOtpStrategy;
  }
  execute() {
    try {
      const user = this.authOtpStrategy.getUserByPhoneNumber(this.phone);
      console.log("Fetched User", user);
      return user;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "bad request");
    }
  }
}
class CreateUserByPhoneCommand {
  constructor(user, authOtpStrategy) {
    this.user = user;
    this.authOtpStrategy = authOtpStrategy;
  }
  execute() {
    try {
      return this.authOtpStrategy.createUser(this.user);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "bad request");
    }
  }
}
class RemoveOtpCommand {
  constructor(OtpId, authOtpStrategy) {
    this.OtpId = OtpId;
    this.authOtpStrategy = authOtpStrategy;
  }
  execute() {
    try {
      return this.authOtpStrategy.removeOtp(this.OtpId);
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "bad request");
    }
  }
}
class PhoneAuthStrategy {
  async sendOtp(phoneNumber) {
    try {
      const res = await fetch(`/api/otp`, {
        method: "POST",
        body: JSON.stringify({
          phoneNumber
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to send OTP.");
      }
      return {
        resource: phoneNumber,
        otp: data.data
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while sending OTP."
      );
    }
  }
  async verifyOtp(form) {
    try {
      const res = await fetch(
        `/api/otp/verify-phone?phoneNumber=${form.resource}&code=${form.otp}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to verify OTP.");
      }
      if (data && data.data.code === form.otp) {
        const updateRes = await fetch(`/api/otp`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...data.data,
            is_used: true
          })
        });
        const updatedOtp = await updateRes.json();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while verifying OTP."
      );
    }
  }
  async createToken(userId) {
    try {
      const res = await fetch("/api/auth/gen-token", {
        method: "POST",
        body: JSON.stringify({
          id: userId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create token.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while creating token."
      );
    }
  }
  async createUser(form) {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while signing up."
      );
    }
  }
  async getUserByEmail(email) {
    try {
      const res = await fetch(`/api/users/email?email=${email}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by email.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async getUserByPhoneNumber(phoneNumber) {
    try {
      const res = await fetch(`/api/users/phone?phoneNumber=${phoneNumber}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by phone.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async removeOtp(otpId) {
    try {
      const res = await fetch(`/api/otp/${otpId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        const data2 = await res.json();
        throw new Error(data2.statusText || "Failed to remove user.");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
}
class EmailAuthStrategy {
  async sendOtp(email) {
    try {
      const res = await fetch(`/api/otp`, {
        method: "POST",
        body: JSON.stringify({
          email
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to send OTP.");
      }
      return {
        resource: email,
        otp: data.data
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while sending OTP."
      );
    }
  }
  async verifyOtp(form) {
    try {
      const res = await fetch(`/api/otp/verify-email?email=${form.resource}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to verify OTP.");
      }
      if (data && data.data.code === form.otp) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while verifying OTP."
      );
    }
  }
  async createToken(userId) {
    try {
      const res = await fetch("/api/auth/gen-token", {
        method: "POST",
        body: JSON.stringify({
          id: userId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create token.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while creating token."
      );
    }
  }
  async createUser(form) {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to create user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "An unknown error occurred while signing up."
      );
    }
  }
  async getUserByEmail(email) {
    try {
      const res = await fetch(`/api/users/email?email=${email}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by email.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async getUserByPhoneNumber(phoneNumber) {
    try {
      const res = await fetch(`/api/users/phone?phoneNumber=${phoneNumber}`);
      const data = await res.json();
      if (!data) {
        throw new Error(data.statusText || "Failed to get user by email.");
      }
      if (!res.ok) {
        throw new Error(data.statusText || "Failed to get user.");
      }
      return data.data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
  async removeOtp(otpId) {
    try {
      const res = await fetch(`/api/otp/${otpId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        const data2 = await res.json();
        throw new Error(data2.statusText || "Failed to remove user.");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "internal server error"
      );
    }
  }
}
class AuthOtpFactory {
  static createOTPStrategy(type) {
    switch (type) {
      case "sms":
        return new PhoneAuthStrategy();
      case "email":
        return new EmailAuthStrategy();
      default:
        throw new Error("auth type not implemented");
    }
  }
}
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
function useCountdown(initialMilliseconds) {
  const millisecondsLeft = ref(initialMilliseconds);
  const isRunning = ref(false);
  let interval = null;
  const start = () => {
    if (isRunning.value || millisecondsLeft.value <= 0) return;
    isRunning.value = true;
    interval = setInterval();
  };
  const stop = () => {
    if (interval) clearInterval(interval);
    isRunning.value = false;
  };
  const reset = (newMilliseconds = initialMilliseconds) => {
    stop();
    millisecondsLeft.value = newMilliseconds;
  };
  const totalSeconds = computed(
    () => Math.floor(millisecondsLeft.value / 1e3)
  );
  const minutes = computed(() => Math.floor(totalSeconds.value / 60));
  const seconds = computed(() => totalSeconds.value % 60);
  const formatted = computed(
    () => `${String(minutes.value).padStart(2, "0")}:${String(
      seconds.value
    ).padStart(2, "0")}`
  );
  return {
    millisecondsLeft,
    isRunning,
    formatted,
    start,
    stop,
    reset
  };
}

export { AuthOtpFactory as A, CreateTokenOtpByPhoneCommand as C, GetUserByPhoneNumberCommand as G, RemoveOtpCommand as R, VerifyOtpByPhoneCommand as V, _sfc_main$1 as _, _sfc_main as a, CreateUserByPhoneCommand as b, useCountdown as u };
//# sourceMappingURL=use-countdown-joqCFAxK.mjs.map
