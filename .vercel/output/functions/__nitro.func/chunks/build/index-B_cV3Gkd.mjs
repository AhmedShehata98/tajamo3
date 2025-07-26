import { _ as __nuxt_component_3, n as navigateTo } from './server.mjs';
import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { _ as _sfc_main$6 } from './FormGroup-K5NL2dvp.mjs';
import { _ as _sfc_main$7 } from './Button-BZ-geaOE.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, withDirectives, createVNode, vModelText, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, reactive, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { e as eventTypeBackgroundFactory } from './utils-DGl0UyFg.mjs';
import { toast } from 'vue-sonner';
import { c as useRequestHeader } from './ssr-Df1vlv0O.mjs';
import { A as AudienceType, L as LocationType, E as EventType } from './events-B_eYa6LR.mjs';
import { u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useApiMutation } from './use-api-mutation-BYE5XpXf.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
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
import '@iconify/utils/lib/css/icon';
import './asyncData-CmGrW10P.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'reka-ui';
import './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import './fetch-DNROhRzN.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Schedule",
  __ssrInlineRender: true,
  emits: ["next", "back"],
  setup(__props, { emit: __emit }) {
    const formBLured = ref({
      startDate: false,
      endDate: false
    });
    const form = ref({
      start_at: "",
      end_at: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_UiFormGroup = _sfc_main$6;
      const _component_UiButton = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        class: "w-full p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 glass-card"
      }, _attrs))}><span class="w-full flex items-center justify-start gap-3 mb-4 col-span-2"><button type="button" class="flex items-center justify-center size-8 rounded-md bg-secondary/60 hover:bg-secondary/40 transition-colors" aria-label="go back" aria-labelledby="go-back-button" aria-describedby="go-back-button" title="go back">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-arrow-left-solid",
        class: "text-accent cursor-pointer"
      }, null, _parent));
      _push(`</button><h3 class="text-lg font-semibold text-accent/70 col-span-2"> Event Schedule and Timing </h3></span>`);
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "start date",
        id: "start-date",
        "error-condition": unref(formBLured).startDate && !unref(form).start_at,
        "error-message": "the start date is required !",
        direction: "col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="date" name="start-date" id="start-date"${ssrRenderAttr("value", unref(form).start_at)} class="input"${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "date",
                name: "start-date",
                id: "start-date",
                "onUpdate:modelValue": ($event) => unref(form).start_at = $event,
                onBlur: () => unref(formBLured).startDate = true,
                class: "input"
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, unref(form).start_at]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "end date",
        id: "end-date",
        "error-condition": unref(formBLured).endDate && !unref(form).end_at,
        "error-message": "the end date is required !",
        direction: "col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="date" name="end-date" id="end-date"${ssrRenderAttr("value", unref(form).end_at)} class="input"${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "date",
                name: "end-date",
                id: "end-date",
                "onUpdate:modelValue": ($event) => unref(form).end_at = $event,
                onBlur: () => unref(formBLured).endDate = true,
                class: "input"
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, unref(form).end_at]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 col-span-2 flex items-center justify-end gap-3">`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        disabled: !unref(form).start_at || !unref(form).end_at
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Next `);
            _push2(ssrRenderComponent(_component_Icon, { name: "i-heroicons-arrow-right-solid" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Next "),
              createVNode(_component_Icon, { name: "i-heroicons-arrow-right-solid" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/create/steps/Schedule.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TicketsAndPricing",
  __ssrInlineRender: true,
  props: {
    eventDate: {},
    eventCapacity: {}
  },
  emits: ["back", "next"],
  setup(__props, { emit: __emit }) {
    const ERROR_MESSAGES = {
      START_DATE_REQUIRED: "The sale start date is required!",
      START_DATE_AFTER_EVENT: "The sale start date must be after the event start date or equal to!",
      END_DATE_REQUIRED: "The sale end date is required!",
      END_DATE_AFTER_EVENT: "The sale end date must be before the event end date or equal to!",
      QUANTITY_REQUIRED: "The quantity available is required!",
      QUANTITY_INVALID: "The quantity available must be greater than 0 and less than or equal to the event capacity!"
    };
    const ticketsList = ref([]);
    const form = reactive({
      name: "",
      price: 0,
      quantity_available: 0,
      sale_start: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] + "T" + (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour12: true }),
      sale_end: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] + "T" + (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour12: true }),
      description: ""
    });
    const formBLured = ref({
      name: false,
      price: false,
      quantity_available: false,
      sale_start: false,
      sale_end: false,
      description: false
    });
    const props = __props;
    const isValidStartDate = computed(() => {
      const today = /* @__PURE__ */ new Date();
      const selectedDate = new Date(form.sale_start);
      return selectedDate >= today && selectedDate <= new Date(props.eventDate.start_at);
    });
    const isValidEndDate = computed(() => {
      const today = /* @__PURE__ */ new Date();
      const selectedDate = new Date(form.sale_end);
      return selectedDate > today && selectedDate <= new Date(props.eventDate.end_at);
    });
    const isValidQuantity = computed(() => {
      return form.quantity_available > 0 && form.quantity_available <= props.eventCapacity;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_UiFormGroup = _sfc_main$6;
      const _component_UiButton = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        class: "w-full flex flex-col p-3 mt-5 glass-card"
      }, _attrs))}><span class="w-full flex items-center justify-start gap-3 mb-4"><button type="button" class="flex items-center justify-center size-8 rounded-md bg-secondary/60 hover:bg-secondary/40 transition-colors" aria-label="go back" aria-labelledby="go-back-button" aria-describedby="go-back-button" title="go back">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-arrow-left-solid",
        class: "text-accent cursor-pointer"
      }, null, _parent));
      _push(`</button><h3 class="text-lg font-semibold text-accent/70 col-span-2"> choose tickets and pricing options </h3></span><div class="w-full flex items-start justify-start gap-8"><div class="w-[60%] flex flex-col gap-3"><div class="grid grid-cols-1 gap-3"><span class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">`);
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "name",
        id: "name",
        "error-condition": unref(formBLured).name && !unref(form).name,
        "error-message": "the name is required !",
        direction: "col",
        "is-required": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="text" name="name" id="name"${ssrRenderAttr("value", unref(form).name)} class="input" placeholder="enter the ticket name ..."${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "text",
                name: "name",
                id: "name",
                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                onBlur: () => unref(formBLured).name = true,
                class: "input",
                placeholder: "enter the ticket name ..."
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, unref(form).name]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "price",
        id: "price",
        "error-condition": unref(formBLured).price && unref(form).price < 0,
        "error-message": "the price is required !",
        direction: "col",
        "is-required": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="number" name="price" id="price"${ssrRenderAttr("value", unref(form).price)} class="input" placeholder="enter the ticket price ..."${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "number",
                name: "price",
                id: "price",
                "onUpdate:modelValue": ($event) => unref(form).price = $event,
                onBlur: () => unref(formBLured).price = true,
                class: "input",
                placeholder: "enter the ticket price ..."
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, unref(form).price]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col"><label for="quantity-available" class="text-sm text-start text-text-primary font-medium capitalize leading-3">quantity available <span class="text-red-700 text-lg">*</span></label><small class="text-xs text-text-secondary mb-3">${ssrInterpolate(`Event capacity: ${_ctx.eventCapacity}`)}</small><input type="number" name="quantity-available" id="quantity-available"${ssrRenderAttr("value", unref(form).quantity_available)} class="input">`);
      if (unref(formBLured).sale_start && !unref(isValidQuantity)) {
        _push(`<small class="text-red-700 leading-4 mt-2">${ssrInterpolate(`${ERROR_MESSAGES.QUANTITY_INVALID} (${_ctx.eventCapacity})`)}</small>`);
      } else if (unref(formBLured).quantity_available && !unref(form).quantity_available) {
        _push(`<small class="text-red-700 leading-4 mt-2">${ssrInterpolate(ERROR_MESSAGES.QUANTITY_REQUIRED)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></span><span class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div class="flex flex-col"><label for="sale-start" class="text-sm text-start text-text-primary font-medium capitalize leading-3">sale start <span class="text-red-700 text-lg">*</span></label><small class="text-xs text-text-secondary mb-3">${ssrInterpolate(`Event date: ${_ctx.eventDate.start_at}`)}</small><input type="date" name="sale-start" id="sale-start"${ssrRenderAttr("value", unref(form).sale_start)} class="input">`);
      if (unref(formBLured).sale_start && !unref(isValidStartDate)) {
        _push(`<small class="text-red-700 leading-4 mt-2">${ssrInterpolate(`${ERROR_MESSAGES.START_DATE_AFTER_EVENT} (${_ctx.eventDate.start_at})`)}</small>`);
      } else if (unref(formBLured).sale_start && !unref(form).sale_start) {
        _push(`<small class="text-red-700 leading-4 mt-2">${ssrInterpolate(ERROR_MESSAGES.START_DATE_REQUIRED)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col"><label for="sale-end" class="text-sm text-start text-text-primary font-medium capitalize leading-3">sale end <span class="text-red-700 text-lg">*</span></label><small class="text-xs text-text-secondary mb-3">${ssrInterpolate(`Event date: ${_ctx.eventDate.end_at}`)}</small><input type="date" name="sale-end" id="sale-end"${ssrRenderAttr("value", unref(form).sale_end)} class="input">`);
      if (unref(formBLured).sale_end && !unref(isValidEndDate)) {
        _push(`<small class="text-red-700 leading-4 mt-2">${ssrInterpolate(`${ERROR_MESSAGES.END_DATE_AFTER_EVENT} (${_ctx.eventDate.end_at})`)}</small>`);
      } else if (unref(formBLured).sale_end && !unref(form).sale_end) {
        _push(`<small class="text-red-700 leading-4 mt-2">${ssrInterpolate(ERROR_MESSAGES.END_DATE_REQUIRED)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></span>`);
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "description",
        id: "description",
        "error-condition": false,
        "error-message": "",
        direction: "col",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<textarea name="description" id="description" rows="6" class="input" placeholder="enter the ticket description ..."${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
          } else {
            return [
              withDirectives(createVNode("textarea", {
                name: "description",
                id: "description",
                rows: "6",
                "onUpdate:modelValue": ($event) => unref(form).description = $event,
                class: "input",
                placeholder: "enter the ticket description ..."
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, unref(form).description]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 col-span-3 flex items-center justify-end gap-3 mt-3"><button type="button" class="w-full flex items-center justify-center gap-2 bg-black text-white rounded-sm px-3 py-1.5 hover:bg-black/80 cursor-pointer disabled:opacity-50 transition-colors"${ssrIncludeBooleanAttr(
        !unref(form).name || unref(form).price < 0 || !unref(isValidQuantity) || !unref(isValidStartDate) || !unref(isValidEndDate)
      ) ? " disabled" : ""}> add ticket `);
      _push(ssrRenderComponent(_component_Icon, { name: "i-heroicons-plus-solid" }, null, _parent));
      _push(`</button></div></div><div class="w-[40%] h-[68vh] flex flex-col gap-3 bg-card p-4 rounded-md"><div class="flex flex-col gap-3 h-[calc(100%-4rem)] w-full"><h3 class="text-xl font-semibold text-accent/70 text-center"> Preview </h3>`);
      if (unref(ticketsList).length < 1) {
        _push(`<p class="text-sm secondary-text text-center capitalize"> no tickets added yet </p>`);
      } else {
        _push(`<ul class="flex flex-col gap-3 overflow-y-auto px-1"><!--[-->`);
        ssrRenderList(unref(ticketsList), (ticket2, index) => {
          _push(`<li class="flex flex-col gap-1 glass-card shadow-sm p-3 rounded-md"><span class="flex items-center justify-between py-1"><h4 class="text-base font-semibold text-accent/70 capitalize">${ssrInterpolate(ticket2.name)}</h4><p class="text-sm text-black/70 font-semibold">${ssrInterpolate(ticket2.price.toLocaleString("en-EG", {
            style: "currency",
            currency: "EGP"
          }))}</p></span>`);
          if (ticket2.description) {
            _push(`<p class="text-sm text-black/40 py-1">${ssrInterpolate(ticket2.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="flex items-center justify-between"><p class="text-sm text-black/50">sale start</p><p class="text-sm text-black/70">${ssrInterpolate(ticket2.sale_start)}</p></span><span class="flex items-center justify-between"><p class="text-sm text-black/50">sale end</p><p class="text-sm text-black/80">${ssrInterpolate(ticket2.sale_end)}</p></span><span class="flex items-center justify-between">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-ticket-solid",
            class: "text-black/50 size-4"
          }, null, _parent));
          _push(`<p class="text-sm text-black/80 font-semibold">${ssrInterpolate(ticket2.quantity_available)} tickets </p></span><span class="flex items-center justify-between"><button type="button" class="flex items-center justify-center gap-2 py-1 px-4 text-center text-sm font-semibold capitalize bg-red-200 text-red-700 rounded-sm hover:bg-red-300 transition-colors">`);
          _push(ssrRenderComponent(_component_Icon, { name: "i-heroicons-trash-solid" }, null, _parent));
          _push(` remove </button></span></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div><div class="flex-1 col-span-3 flex items-center justify-end gap-3 mt-5">`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        disabled: unref(ticketsList).length < 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Next `);
            _push2(ssrRenderComponent(_component_Icon, { name: "i-heroicons-arrow-right-solid" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Next "),
              createVNode(_component_Icon, { name: "i-heroicons-arrow-right-solid" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></form>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/create/steps/TicketsAndPricing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FinalEventCreate",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  emits: ["onPublish", "onSaveDraft", "onBack"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full bg-secondary/50 p-4 rounded-md mt-5" }, _attrs))}><h3 class="font-semibold text-2xl text-start text-accent/80"> Finalize Event </h3><p class="secondary-text">Review your event details and publish it.</p><div class="w-full flex flex-col items-center justify-start gap-3 mt-8"><span class="w-full flex items-start justify-start gap-3"><figure class="shrink-0"><img${ssrRenderAttr("src", _ctx.event.image)} alt="event-image" class="w-56 h-44 object-cover rounded-md"></figure><span class="flex flex-col items-start justify-start mt-2"><h4 class="text-lg font-semibold capitalize text-text-primary">${ssrInterpolate(_ctx.event.name)}</h4><p class="text-text-secondary mb-4">${ssrInterpolate(_ctx.event.description)}</p><span class="${ssrRenderClass([unref(eventTypeBackgroundFactory)(_ctx.event.event_type), "w-fir flex items-center justify-center gap-2 px-2 py-1 rounded-md"])}"><p>${ssrInterpolate(_ctx.event.event_type)}</p></span></span></span><span class="w-full grid grid-cols-3 items-center justify-start gap-3"><span class="flex flex-col items-start justify-start gap-2"><p class="text-text-secondary">Date</p><p class="text-text-primary">${ssrInterpolate(new Date(_ctx.event.start_at).toLocaleDateString())} - ${ssrInterpolate(new Date(_ctx.event.end_at).toLocaleDateString())}</p></span><span class="flex flex-col items-start justify-start gap-2"><p class="text-text-secondary">Location</p><p class="text-text-primary">${ssrInterpolate(_ctx.event.location)}</p></span><span class="flex flex-col items-start justify-start gap-2"><p class="text-text-secondary">Capacity</p><p class="text-text-primary">${ssrInterpolate(_ctx.event.capacity)}</p></span><span class="flex flex-col items-start justify-start gap-2"><p class="text-text-secondary">Audience</p><p class="text-text-primary">${ssrInterpolate(_ctx.event.audience)}</p></span><span class="flex flex-col items-start justify-start gap-2"><p class="text-text-secondary">Event Type</p><p class="text-text-primary">${ssrInterpolate(_ctx.event.event_type)}</p></span></span><h3 class="text-lg text-text-secondary capitalize place-self-start mt-4"> tickets </h3><ul class="w-full md:max-w-2xl grid grid-cols-1 place-self-start"><!--[-->`);
      ssrRenderList(_ctx.event.tickets, (ticket2, index) => {
        _push(`<li class="flex items-start justify-start gap-3 mb-2 bg-card p-3 rounded-md"><span class="flex flex-col items-start justify-start gap-1 w-full"><p class="text-text-primary font-semibold">${ssrInterpolate(ticket2.name)}</p><p class="text-text-secondary">${ssrInterpolate(ticket2.description)}</p><p>available: ${ssrInterpolate(ticket2.quantity_available)}</p></span><p class="text-text-primary bg-white p-1 rounded-md">${ssrInterpolate(ticket2.price ? `$${ticket2.price}` : "Free")}</p></li>`);
      });
      _push(`<!--]--></ul></div><div class="w-full flex gap-2 items-center justify-start gap-3 mt-5">`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        class: "me-auto",
        onClick: ($event) => _ctx.$emit("onBack")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` go back`);
          } else {
            return [
              createTextVNode(" go back")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "secondary",
        onClick: ($event) => _ctx.$emit("onPublish")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` save draft `);
          } else {
            return [
              createTextVNode(" save draft ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "default",
        onClick: ($event) => _ctx.$emit("onPublish")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` publish `);
          } else {
            return [
              createTextVNode(" publish ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/create/steps/FinalEventCreate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
class EventCreateCommand {
  constructor(event) {
    __publicField(this, "eventId", null);
    __publicField(this, "cookies", useRequestHeader("Cookie"));
    this.event = event;
  }
  async execute() {
    var _a;
    const createdEvent = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(this.event),
      headers: {
        "Content-Type": "application/json",
        Cookie: (_a = this.cookies) != null ? _a : ""
      }
    });
    const data = await createdEvent.json();
    if (!createdEvent.ok) {
      throw new Error(data.message || "Failed to create event");
    }
    this.eventId = data.data.id;
    return data == null ? void 0 : data.data;
  }
  async undo() {
    var _a;
    const deletedEvent = await fetch(`/api/events/${this.eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: (_a = this.cookies) != null ? _a : ""
      }
    });
    if (!deletedEvent.ok) {
      const data = await deletedEvent.json();
      throw new Error(data.message || "Failed to delete event");
    }
  }
}
class TicketTypeCreateCommand {
  constructor(ticketType) {
    __publicField(this, "ticketTypeId", null);
    __publicField(this, "cookies", useRequestHeader("Cookie"));
    this.ticketType = ticketType;
  }
  async execute() {
    var _a;
    const createdTicketType = await fetch("/api/ticket-types", {
      method: "POST",
      body: JSON.stringify(this.ticketType),
      headers: {
        "Content-Type": "application/json",
        Cookie: (_a = this.cookies) != null ? _a : ""
      }
    });
    const data = await createdTicketType.json();
    if (!createdTicketType.ok) {
      throw new Error(data.message || "Failed to create ticket type");
    }
    this.ticketTypeId = data.data.id;
    return data;
  }
  async undo() {
    var _a;
    const deletedTicketType = await fetch(
      `/api/ticket-types/${this.ticketTypeId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: (_a = this.cookies) != null ? _a : ""
        }
      }
    );
    if (!deletedTicketType.ok) {
      const data = await deletedTicketType.json();
      throw new Error(data.message || "Failed to delete ticket type");
    }
  }
}
const useEventFormBuilder = () => {
  const eventFormBuilder = new EventFormBuilder();
  return eventFormBuilder;
};
class EventFormBuilder {
  constructor() {
    __publicField(this, "_form");
    __publicField(this, "_formBlurred");
    this._form = reactive({
      name: "",
      image: "",
      description: "",
      start_at: "",
      end_at: "",
      event_type: EventType.EVENT,
      capacity: 0,
      location: "",
      location_type: LocationType.OFFLINE,
      company_id: null,
      audience: AudienceType.PUBLIC,
      latitude: void 0,
      longitude: void 0,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    this._formBlurred = reactive({});
  }
  get form() {
    return this._form;
  }
  setName(name) {
    this._form.name = name;
    return this;
  }
  setImage(image) {
    this._form.image = image;
    return this;
  }
  setDescription(description) {
    this._form.description = description;
    return this;
  }
  setStartDate(startDate) {
    this._form.start_at = startDate;
    return this;
  }
  setEndDate(endDate) {
    this._form.end_at = endDate;
    return this;
  }
  setEventType(eventType) {
    this._form.event_type = eventType;
    return this;
  }
  setCapacity(capacity) {
    this._form.capacity = capacity;
    return this;
  }
  setLocation(location) {
    this._form.location = location;
    return this;
  }
  setLatitude(latitude) {
    this._form.latitude = latitude;
    return this;
  }
  setLongitude(longitude) {
    this._form.longitude = longitude;
    return this;
  }
  setLocationType(locationType) {
    this._form.location_type = locationType;
    return this;
  }
  setAudienceType(audienceType) {
    this._form.audience = audienceType;
    return this;
  }
  setCompanyId(companyId) {
    this._form.company_id = companyId;
    return this;
  }
  setFormBlurred(field, value) {
    this._formBlurred[field] = value;
    return this;
  }
  resetForm() {
    this._form = {
      name: "",
      image: "",
      description: "",
      start_at: "",
      end_at: "",
      event_type: EventType.EVENT,
      capacity: 0,
      location: "",
      location_type: LocationType.OFFLINE,
      company_id: null,
      audience: AudienceType.PUBLIC,
      latitude: void 0,
      longitude: void 0,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    return this;
  }
  resetFormBlurred() {
    this._formBlurred = {};
    return this;
  }
  resetFormAndFormBlurred() {
    this.resetForm();
    this.resetFormBlurred();
    return this;
  }
  buildForm() {
    if (!this._form.name) {
      throw new Error("Event name is required");
    }
    if (!this._form.start_at) {
      throw new Error("Event start date is required");
    }
    if (!this._form.end_at) {
      throw new Error("Event end date is required");
    }
    if (this._form.start_at >= this._form.end_at) {
      throw new Error("Event end date must be after start date");
    }
    if (this._form.capacity < 0) {
      throw new Error("Event capacity cannot be negative");
    }
    if (this._form.location_type === LocationType.OFFLINE && !this._form.location) {
      throw new Error("Event location is required for offline events");
    }
    if (!this._form.event_type) {
      throw new Error("Event type is required");
    }
    if (!this._form.image) {
      throw new Error("Event image is required");
    }
    const formData = new FormData();
    Object.keys(this._form).forEach(
      (key) => {
        const value = this._form[key] !== null && this._form[key] !== void 0 ? this._form[key] : "";
        formData.append(key, value);
      }
    );
    return { formData, data: this._form };
  }
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AudienceAndCapacity",
  __ssrInlineRender: true,
  emits: ["next", "back"],
  setup(__props, { emit: __emit }) {
    const formBLured = ref({
      capacity: false,
      audience: false,
      price: false
    });
    const form = ref({
      capacity: 0,
      audience: AudienceType.PUBLIC,
      is_free: false,
      price: 0
    });
    watch(
      () => form.value.is_free,
      () => {
        if (form.value.is_free) {
          form.value.price = 0;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_UiFormGroup = _sfc_main$6;
      const _component_UiButton = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        class: "w-full p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 glass-card"
      }, _attrs))}><span class="w-full flex items-center justify-start gap-3 mb-4 col-span-2"><button type="button" class="flex items-center justify-center size-8 rounded-md bg-secondary/60 hover:bg-secondary/40 transition-colors" aria-label="go back" aria-labelledby="go-back-button" aria-describedby="go-back-button" title="go back">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "i-heroicons-arrow-left-solid",
        class: "text-accent cursor-pointer"
      }, null, _parent));
      _push(`</button><h3 class="text-lg font-semibold text-accent/70 col-span-2"> choose audience and capacity </h3></span>`);
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "capacity",
        id: "capacity",
        "error-condition": unref(formBLured).capacity && !unref(form).capacity,
        "error-message": "the capacity is required !",
        direction: "col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="number" name="capacity" id="capacity"${ssrRenderAttr("value", unref(form).capacity)} class="input" placeholder="enter the event capacity ..."${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "number",
                name: "capacity",
                id: "capacity",
                "onUpdate:modelValue": ($event) => unref(form).capacity = $event,
                onBlur: () => unref(formBLured).capacity = true,
                class: "input",
                placeholder: "enter the event capacity ..."
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, unref(form).capacity]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "audience",
        id: "audience",
        "error-condition": unref(formBLured).audience && !unref(form).audience,
        "error-message": "the audience is required !",
        direction: "col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<select name="audience" id="audience" class="input"${_scopeId}><option value="-1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).audience) ? ssrLooseContain(unref(form).audience, "-1") : ssrLooseEqual(unref(form).audience, "-1")) ? " selected" : ""}${_scopeId}>Select audience</option><!--[-->`);
            ssrRenderList(Object.values(unref(AudienceType)), (audience) => {
              _push2(`<option${ssrRenderAttr("value", audience)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).audience) ? ssrLooseContain(unref(form).audience, audience) : ssrLooseEqual(unref(form).audience, audience)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(audience)}</option>`);
            });
            _push2(`<!--]--></select>`);
          } else {
            return [
              withDirectives(createVNode("select", {
                name: "audience",
                id: "audience",
                "onUpdate:modelValue": ($event) => unref(form).audience = $event,
                onBlur: () => unref(formBLured).audience = true,
                class: "input"
              }, [
                createVNode("option", { value: "-1" }, "Select audience"),
                (openBlock(true), createBlock(Fragment, null, renderList(Object.values(unref(AudienceType)), (audience) => {
                  return openBlock(), createBlock("option", { value: audience }, toDisplayString(audience), 9, ["value"]);
                }), 256))
              ], 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelSelect, unref(form).audience]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 col-span-2 flex items-center justify-end gap-3 mt-8">`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        disabled: !unref(form).capacity || unref(form).capacity <= 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Next `);
            _push2(ssrRenderComponent(_component_Icon, { name: "i-heroicons-arrow-right-solid" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Next "),
              createVNode(_component_Icon, { name: "i-heroicons-arrow-right-solid" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/create/steps/AudienceAndCapacity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BasicInfoForm",
  __ssrInlineRender: true,
  emits: ["next", "back"],
  setup(__props, { emit: __emit }) {
    const formBLured = ref({
      eventName: false,
      eventImage: false
    });
    const form = ref({
      name: "",
      image: "",
      description: ""
    });
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiFormGroup = _sfc_main$6;
      const _component_UiButton = _sfc_main$7;
      const _component_Icon = __nuxt_component_0;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        class: "w-full p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 glass-card"
      }, _attrs))}><span class="w-full flex items-center justify-start gap-3 mb-4 col-span-2"><h3 class="text-lg font-semibold text-accent/70 col-span-2"> Basic Information </h3></span>`);
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "event name",
        id: "event-name",
        "error-condition": formBLured.value.eventName && !form.value.name,
        "error-message": "the event name is required !",
        direction: "col",
        class: "col-span-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="text" name="event-name" id="event-name"${ssrRenderAttr("value", form.value.name)} class="input" placeholder="enter the event name ..."${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "text",
                name: "event-name",
                id: "event-name",
                "onUpdate:modelValue": ($event) => form.value.name = $event,
                onBlur: () => formBLured.value.eventName = true,
                class: "input",
                placeholder: "enter the event name ..."
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, form.value.name]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "event image",
        id: "event-image",
        "error-condition": formBLured.value.eventImage && !form.value.image,
        "error-message": "the event image is required !",
        direction: "col",
        class: "col-span-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<input type="text" name="event-image" id="event-image"${ssrRenderAttr("value", form.value.image)} class="input" placeholder="enter the event image url ..."${_scopeId}>`);
          } else {
            return [
              withDirectives(createVNode("input", {
                type: "text",
                name: "event-image",
                id: "event-image",
                "onUpdate:modelValue": ($event) => form.value.image = $event,
                onBlur: () => formBLured.value.eventImage = true,
                class: "input",
                placeholder: "enter the event image url ..."
              }, null, 40, ["onUpdate:modelValue", "onBlur"]), [
                [vModelText, form.value.image]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormGroup, {
        label: "description",
        id: "description",
        "error-condition": false,
        "error-message": "",
        direction: "col",
        class: "col-span-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<textarea name="description" id="description" rows="6" class="input" placeholder="enter the event description ..."${_scopeId}>${ssrInterpolate(form.value.description)}</textarea>`);
          } else {
            return [
              withDirectives(createVNode("textarea", {
                name: "description",
                id: "description",
                rows: "6",
                "onUpdate:modelValue": ($event) => form.value.description = $event,
                class: "input",
                placeholder: "enter the event description ..."
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, form.value.description]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-1 col-span-2 flex items-center justify-end gap-3">`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "submit",
        size: "sm",
        onClick: ($event) => emit("next", {
          name: form.value.name,
          image: form.value.image,
          description: form.value.description
        }),
        disabled: !form.value.name || !form.value.image
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-sm"${_scopeId}>Next</p>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "i-heroicons-arrow-right-solid" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-white text-sm" }, "Next"),
              createVNode(_component_Icon, { name: "i-heroicons-arrow-right-solid" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/create/steps/BasicInfoForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const finalEventForm = ref(null);
    const eventFormBuilder = useEventFormBuilder();
    const ticketsList = ref([]);
    ref(void 0);
    useUser();
    useApiMutation();
    const timeoutRefs = [];
    const handleSetBasicInfo = (event) => {
      eventFormBuilder.setName(event.name).setImage(event.image).setDescription(event.description);
      navigateTo({
        query: {
          step: "type-and-location"
          /* TYPE_AND_LOCATION */
        }
      });
    };
    const handleSetSchedule = (event) => {
      eventFormBuilder.setStartDate(event.start_at).setEndDate(event.end_at);
      navigateTo({
        query: {
          step: "audience-and-capacity"
          /* AUDIENCE_AND_CAPACITY */
        }
      });
    };
    const handleSetAudienceAndCapacity = (event) => {
      eventFormBuilder.setAudienceType(event.audience).setCapacity(event.capacity);
      navigateTo({
        query: {
          step: "tickets-and-pricing"
          /* TICKETS_AND_PRICING */
        }
      });
    };
    const handlePublish = async () => {
      let eventCreateCmd = void 0;
      let ticketTypes = void 0;
      try {
        const { data: event } = eventFormBuilder.buildForm();
        eventCreateCmd = new EventCreateCommand(event);
        const eventCreated = await eventCreateCmd.execute();
        ticketTypes = new TicketTypeCreateCommand(
          ticketsList.value.map((ticket2) => ({
            ...ticket2,
            event_id: eventCreated.id
          }))
        );
        await ticketTypes.execute();
        toast.success("Event created successfully, redirecting to events");
        eventFormBuilder.resetFormAndFormBlurred();
        timeoutRefs.push(
          setTimeout(() => {
            navigateTo("/dashboard/events");
          }, 1e3)
        );
      } catch (error2) {
        if (!eventCreateCmd) {
          return;
        }
        await eventCreateCmd.undo();
        if (!ticketTypes) {
          return;
        }
        await ticketTypes.undo();
        console.error("Error building event form:", error2);
        toast.error(
          error2 instanceof Error ? error2.message : "Please fill out all required fields before proceeding."
        );
        toast.error(
          "Something went wrong while creating the event, please try again."
        );
        return;
      }
    };
    const handleSetTicketsAndPricing = (tickets) => {
      ticketsList.value = tickets;
      navigateTo({
        query: {
          step: "final-event-create"
          /* FINAL_EVENT_CREATE */
        }
      });
    };
    const handleSaveDraft = () => {
      console.log("save draft event form");
    };
    watch(
      () => [eventFormBuilder.form, ticketsList.value],
      ([newForm, newTickets]) => {
        if (Object.keys(newForm).length === 0) {
          return;
        }
        finalEventForm.value = {
          ...newForm,
          tickets: newTickets,
          company_id: null
        };
      },
      { immediate: true, deep: true }
    );
    useSeoMeta({
      title: "Create Event",
      description: "Create a new event"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_3;
      const _component_EventsCreateStepsSchedule = _sfc_main$5;
      const _component_EventsCreateStepsTicketsAndPricing = _sfc_main$4;
      const _component_EventsCreateStepsFinalEventCreate = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 w-full flex-col items-start justify-start" }, _attrs))}><span class="w-full flex flex-col items-start justify-center gap-3"><h3 class="font-semibold text-2xl text-start text-text-primary"> Create New Event </h3><p class="text-text-secondary"> Fill out the form below to create a new event. </p></span><div class="w-full flex flex-col items-start justify-start gap-4">`);
      if (_ctx.$route.query.step === "basic-info" || !_ctx.$route.query.step) {
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          onBack: ($event) => _ctx.$router.push({
            query: {
              step: "final-event-create"
              /* FINAL_EVENT_CREATE */
            }
          }),
          onNext: handleSetBasicInfo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (_ctx.$route.query.step === "schedule" && _ctx.$route.query.step) {
        _push(ssrRenderComponent(_component_EventsCreateStepsSchedule, {
          onBack: ($event) => _ctx.$router.push({
            query: {
              step: "type-and-location"
              /* TYPE_AND_LOCATION */
            }
          }),
          onNext: handleSetSchedule
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$route.query.step === "audience-and-capacity" && _ctx.$route.query.step) {
        _push(ssrRenderComponent(unref(_sfc_main$2), {
          onBack: ($event) => _ctx.$router.push({
            query: {
              step: "schedule"
              /* SCHEDULE */
            }
          }),
          onNext: handleSetAudienceAndCapacity
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$route.query.step === "tickets-and-pricing" && _ctx.$route.query.step) {
        _push(ssrRenderComponent(_component_EventsCreateStepsTicketsAndPricing, {
          onBack: ($event) => _ctx.$router.push({
            query: {
              step: "audience-and-capacity"
              /* AUDIENCE_AND_CAPACITY */
            }
          }),
          "event-capacity": unref(eventFormBuilder).form.capacity,
          "event-date": {
            start_at: unref(eventFormBuilder).form.start_at,
            end_at: unref(eventFormBuilder).form.end_at
          },
          onNext: handleSetTicketsAndPricing
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$route.query.step === "final-event-create" && _ctx.$route.query.step) {
        _push(ssrRenderComponent(_component_EventsCreateStepsFinalEventCreate, {
          event: unref(finalEventForm),
          onOnPublish: handlePublish,
          onOnSaveDraft: handleSaveDraft,
          onOnBack: ($event) => _ctx.$router.push({
            query: {
              step: "tickets-and-pricing"
              /* TICKETS_AND_PRICING */
            }
          })
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/events/create/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B_cV3Gkd.mjs.map
