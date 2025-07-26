import { _ as _sfc_main$1 } from './FormGroup-K5NL2dvp.mjs';
import { _ as _sfc_main$2 } from './Switch-BR0kEJ5p.mjs';
import { defineComponent, ref, shallowRef, computed, watchEffect, resolveComponent, mergeProps, unref, withCtx, withDirectives, createVNode, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
import '@vueuse/core';
import 'reka-ui';
import './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './server.mjs';
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
import 'vue-sonner';
import './ssr-Df1vlv0O.mjs';
import './fetch-DNROhRzN.mjs';
import './asyncData-CmGrW10P.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    });
    const formBLured = ref({
      firstName: false,
      lastName: false,
      email: false,
      phone: false
    });
    const activeTab = shallowRef(
      "profile"
    );
    const { userStore } = useUser();
    const isChangedProfileValues = computed(() => {
      var _a, _b, _c, _d;
      return form.value.firstName !== ((_a = userStore.value) == null ? void 0 : _a.first_name) || form.value.lastName !== ((_b = userStore.value) == null ? void 0 : _b.last_name) || form.value.email !== ((_c = userStore.value) == null ? void 0 : _c.email) || form.value.phone !== ((_d = userStore.value) == null ? void 0 : _d.phone);
    });
    watchEffect(() => {
      var _a, _b, _c, _d;
      if (!userStore.value) return;
      form.value.firstName = (_a = userStore.value) == null ? void 0 : _a.first_name;
      form.value.lastName = (_b = userStore.value) == null ? void 0 : _b.last_name;
      form.value.email = (_c = userStore.value) == null ? void 0 : _c.email;
      form.value.phone = (_d = userStore.value) == null ? void 0 : _d.phone;
    });
    useSeoMeta({
      title: "Settings",
      description: "Manage your account and application preferences."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiFormGroup = _sfc_main$1;
      const _component_lable = resolveComponent("lable");
      const _component_UiSwitch = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 w-full flex-col items-start justify-start" }, _attrs))}><span class="w-full flex flex-col items-start justify-center gap-3"><h3 class="font-semibold text-2xl text-start text-text-primary"> Settings </h3><p class="text-text-secondary"> Manage your account and application preferences. </p></span><ul class="w-fit flex items-center justify-start gap-2 bg-card rounded-sm mt-5 p-1.5"><li><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "profile" ? "bg-accent text-white font-semibold " : "bg-primary text-text-primary",
        "rounded-md px-4 p-2 transition-all duration-300 uppercase"
      ])}"> profile </button></li><li><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "security" ? "bg-accent text-white font-semibold " : "bg-primary text-text-primary",
        "rounded-md px-4 p-2 transition-all duration-300 uppercase font-medium"
      ])}"> security </button></li><li><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "notifications" ? "bg-accent text-white font-semibold " : "bg-primary text-text-primary",
        "rounded-md px-4 p-2 transition-all duration-300 uppercase font-medium"
      ])}"> notifications </button></li></ul>`);
      if (unref(activeTab) === "profile") {
        _push(`<div class="w-full flex flex-col p-3 bg-card backdrop-blur-md items-start justify-center gap-2 rounded-sm mt-5"><span class="w-full flex flex-col items-start justify-center gap-3"><h3 class="font-semibold text-2xl text-start text-text-primary"> Profile Information </h3><p class="text-text-secondary">Update your personal information.</p></span><form action="" class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">`);
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "first name",
          id: "first-name",
          "error-condition": unref(formBLured).firstName && !unref(form).firstName,
          "error-message": "the first name is required !",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<input type="text" name="first-name" id="first-name"${ssrRenderAttr("value", unref(form).firstName)} class="input" placeholder="enter the first name ..."${_scopeId}>`);
            } else {
              return [
                withDirectives(createVNode("input", {
                  type: "text",
                  name: "first-name",
                  id: "first-name",
                  "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                  onBlur: () => unref(formBLured).firstName = true,
                  class: "input",
                  placeholder: "enter the first name ..."
                }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelText, unref(form).firstName]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "last name",
          id: "last-name",
          "error-condition": unref(formBLured).lastName && !unref(form).lastName,
          "error-message": "the last name is required !",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<input type="text" name="last-name" id="last-name"${ssrRenderAttr("value", unref(form).lastName)} class="input" placeholder="enter the last name ..."${_scopeId}>`);
            } else {
              return [
                withDirectives(createVNode("input", {
                  type: "text",
                  name: "last-name",
                  id: "last-name",
                  "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                  onBlur: () => unref(formBLured).lastName = true,
                  class: "input",
                  placeholder: "enter the last name ..."
                }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelText, unref(form).lastName]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "email",
          id: "email",
          "error-condition": unref(formBLured).email && !unref(form).email,
          "error-message": "the email is required !",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<input type="email" name="email" id="email"${ssrRenderAttr("value", unref(form).email)} class="input" placeholder="enter the email ..."${_scopeId}>`);
            } else {
              return [
                withDirectives(createVNode("input", {
                  type: "email",
                  name: "email",
                  id: "email",
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  onBlur: () => unref(formBLured).email = true,
                  class: "input",
                  placeholder: "enter the email ..."
                }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelText, unref(form).email]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiFormGroup, {
          label: "phone",
          id: "phone",
          "error-condition": unref(formBLured).phone && !unref(form).phone,
          "error-message": "the phone is required !",
          direction: "col"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<input type="tel" name="phone" id="phone"${ssrRenderAttr("value", unref(form).phone)} class="input" placeholder="enter the phone ..."${_scopeId}>`);
            } else {
              return [
                withDirectives(createVNode("input", {
                  type: "tel",
                  name: "phone",
                  id: "phone",
                  "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                  onBlur: () => unref(formBLured).phone = true,
                  class: "input",
                  placeholder: "enter the phone ..."
                }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                  [vModelText, unref(form).phone]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex-1 col-span-2 flex items-center justify-end gap-3 mt-5"><button type="submit" class="bg-accent text-white cursor-pointer px-4 py-2 rounded-sm disabled:bg-secondary/70 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(isChangedProfileValues)) ? " disabled" : ""}> save changes </button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "notifications") {
        _push(`<div class="w-full flex flex-col p-3 bg-zinc-200/80 backdrop-blur-md items-start justify-center gap-2 rounded-sm mt-5"><span class="w-full flex flex-col items-start justify-center gap-3"><h3 class="font-semibold text-2xl text-start text-text-primary"> Notification Preferences </h3><p class="text-text-secondary"> Configure how you receive notifications. </p></span><form action="" class="w-full flex flex-col gap-3 mt-5">`);
        _push(ssrRenderComponent(_component_lable, {
          for: "email-notifications",
          class: "w-full flex items-center justify-between"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex flex-col items-start justify-center"${_scopeId}><h4 class="font-semibold text-lg text-text-primary"${_scopeId}> Email Notifications </h4><p class="text-text-secondary"${_scopeId}> Choose which email notifications you receive. </p></span>`);
              _push2(ssrRenderComponent(_component_UiSwitch, { id: "email-notifications" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "flex flex-col items-start justify-center" }, [
                  createVNode("h4", { class: "font-semibold text-lg text-text-primary" }, " Email Notifications "),
                  createVNode("p", { class: "text-text-secondary" }, " Choose which email notifications you receive. ")
                ]),
                createVNode(_component_UiSwitch, { id: "email-notifications" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_lable, {
          for: "push-notifications",
          class: "w-full flex items-center justify-between"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex flex-col items-start justify-center"${_scopeId}><h4 class="font-semibold text-lg text-text-primary"${_scopeId}> Push Notifications </h4><p class="text-text-secondary"${_scopeId}>Receive notifications in the app.</p></span>`);
              _push2(ssrRenderComponent(_component_UiSwitch, { id: "push-notifications" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "flex flex-col items-start justify-center" }, [
                  createVNode("h4", { class: "font-semibold text-lg text-text-primary" }, " Push Notifications "),
                  createVNode("p", { class: "text-text-secondary" }, "Receive notifications in the app.")
                ]),
                createVNode(_component_UiSwitch, { id: "push-notifications" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_lable, {
          for: "event-reminders",
          class: "w-full flex items-center justify-between"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex flex-col items-start justify-center"${_scopeId}><h4 class="font-semibold text-lg text-text-primary"${_scopeId}> Event Reminders </h4><p class="text-text-secondary"${_scopeId}> Get reminded about upcoming events. </p></span>`);
              _push2(ssrRenderComponent(_component_UiSwitch, { id: "event-reminders" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "flex flex-col items-start justify-center" }, [
                  createVNode("h4", { class: "font-semibold text-lg text-text-primary" }, " Event Reminders "),
                  createVNode("p", { class: "text-text-secondary" }, " Get reminded about upcoming events. ")
                ]),
                createVNode(_component_UiSwitch, { id: "event-reminders" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_lable, {
          for: "team-updates",
          class: "w-full flex items-center justify-between"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex flex-col items-start justify-center"${_scopeId}><h4 class="font-semibold text-lg text-text-primary"${_scopeId}> Team Updates </h4><p class="text-text-secondary"${_scopeId}>Get notified about team changes.</p></span>`);
              _push2(ssrRenderComponent(_component_UiSwitch, { id: "team-updates" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "flex flex-col items-start justify-center" }, [
                  createVNode("h4", { class: "font-semibold text-lg text-text-primary" }, " Team Updates "),
                  createVNode("p", { class: "text-text-secondary" }, "Get notified about team changes.")
                ]),
                createVNode(_component_UiSwitch, { id: "team-updates" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex-1 col-span-2 flex items-center justify-end gap-3"><button type="submit" class="bg-primary text-white cursor-pointer px-4 py-2 rounded-sm"> save changes </button></div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CPagg03Z.mjs.map
