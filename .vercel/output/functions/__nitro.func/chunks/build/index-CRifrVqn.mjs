import { _ as _sfc_main$b } from './Button-BZ-geaOE.mjs';
import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { defineComponent, computed, shallowRef, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, defineAsyncComponent, ref, renderSlot, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogContent, DialogClose, useForwardProps, DialogTitle, DialogDescription, DialogOverlay } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core';
import { X } from 'lucide-vue-next';
import { c as cn } from './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import { a as useRoute, _ as __nuxt_component_3, n as navigateTo } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DzJA0YMK.mjs';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { e as eventTypeBackgroundFactory, d as dateFormatter } from './utils-DGl0UyFg.mjs';
import { u as useEventDetailsState } from './use-event-details-state-CMhwkDV8.mjs';
import { L as LocationType } from './events-B_eYa6LR.mjs';
import { u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useApiMutation } from './use-api-mutation-BYE5XpXf.mjs';
import { u as useAsyncData } from './asyncData-CmGrW10P.mjs';
import { b as useRequestHeaders, a as useRequestFetch } from './ssr-Df1vlv0O.mjs';
import { c as useServerSeoMeta } from './v3-DxuvcMCg.mjs';
import 'class-variance-authority';
import '@iconify/utils/lib/css/icon';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'clsx';
import 'tailwind-merge';
import './fetch-DNROhRzN.mjs';

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps({ "data-slot": "dialog" }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/Dialog.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps({ "data-slot": "dialog-trigger" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogTrigger.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlay",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogOverlay), mergeProps({ "data-slot": "dialog-overlay" }, unref(delegatedProps), {
        class: unref(cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogOverlay.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({ "data-slot": "dialog-content" }, unref(forwarded), {
              class: unref(cn)(
                "bg-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), null, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(X)),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" }, {
                      default: withCtx(() => [
                        createVNode(unref(X)),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8),
              createVNode(unref(DialogContent), mergeProps({ "data-slot": "dialog-content" }, unref(forwarded), {
                class: unref(cn)(
                  "bg-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" }, {
                    default: withCtx(() => [
                      createVNode(unref(X)),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DialogHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "dialog-header",
        class: unref(cn)("flex flex-col gap-2 text-center sm:text-left", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps({ "data-slot": "dialog-title" }, unref(forwardedProps), {
        class: unref(cn)("text-lg leading-none font-semibold", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogTitle.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogDescription), mergeProps({ "data-slot": "dialog-description" }, unref(forwardedProps), {
        class: unref(cn)("text-muted-foreground text-sm", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogDescription.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DialogFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "dialog-footer",
        class: unref(cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps({ "data-slot": "dialog-close" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogClose.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChooseTicketWrapper",
  __ssrInlineRender: true,
  props: {
    ticketTypes: {}
  },
  emits: ["buy", "select", "cancel"],
  setup(__props, { expose: __expose }) {
    const selectedTicket = ref(null);
    const ticketModal = ref(null);
    __expose({
      open: () => {
        var _a;
        (_a = ticketModal.value) == null ? void 0 : _a.showModal();
      },
      close: () => {
        var _a;
        (_a = ticketModal.value) == null ? void 0 : _a.close();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$a;
      const _component_UiDialogTrigger = _sfc_main$9;
      const _component_UiDialogContent = _sfc_main$7;
      const _component_UiDialogHeader = _sfc_main$6;
      const _component_UiDialogTitle = _sfc_main$5;
      const _component_UiDialogDescription = _sfc_main$4;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDialogFooter = _sfc_main$3;
      const _component_UiButton = _sfc_main$b;
      const _component_UiDialogClose = _sfc_main$2;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        ref_key: "ticketModal",
        ref: ticketModal
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "trigger")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "lg:!max-w-2xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`choose ticket`);
                            } else {
                              return [
                                createTextVNode("choose ticket")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Choose the ticket you want to buy `);
                            } else {
                              return [
                                createTextVNode(" Choose the ticket you want to buy ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("choose ticket")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Choose the ticket you want to buy ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-4 py-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.ticketTypes, (ticket2) => {
                    var _a;
                    _push3(`<label${ssrRenderAttr("for", ticket2.name)} class="flex items-center gap-2 flex-col bg-secondary/80 cursor-pointer"${_scopeId2}><input type="radio"${ssrRenderAttr("id", ticket2.name)} hidden name="ticket"${ssrIncludeBooleanAttr(ticket2.quantity_available == 0) ? " disabled" : ""} class="peer"${ssrRenderAttr("value", ticket2.id)}${_scopeId2}><div class="w-full h-full flex items-center flex-col gap-2 border-2 border-transparent peer-checked:border-accent rounded-md overflow-hidden"${_scopeId2}><span class="size-16 flex items-center justify-center bg-accent/25 text-accent rounded-full p-3 shadow-md mt-2 mx-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "solar:ticket-bold-duotone",
                      class: "text-6xl rotate-14"
                    }, null, _parent3, _scopeId2));
                    _push3(`</span><p class="text-xl font-bold uppercase text-center peer-checked:text-white px-2"${_scopeId2}>${ssrInterpolate(ticket2.name)}</p><p class="text-sm secondary-text text-center inline-block px-2"${_scopeId2}>${ssrInterpolate(ticket2.description)}</p><p class="text-sm secondary-text text-center px-2 flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "solar:user-bold-duotone",
                      class: "text-2xl"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(ticket2.quantity_available)} tickets </p><span class="${ssrRenderClass([
                      ticket2.quantity_available > 0 ? "bg-accent/10 text-accent" : "bg-black/20 text-black",
                      "w-full p-2 text-sm text-center flex items-center justify-center gap-2 font-semibold"
                    ])}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "solar:dollar-bold-duotone",
                      class: "text-2xl"
                    }, null, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate((_a = ticket2.price) == null ? void 0 : _a.toLocaleString("en-EG", {
                      style: "currency",
                      currency: "EGP"
                    }))}</span></div></label>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b, _c, _d;
                      if (_push4) {
                        if (((_a = unref(selectedTicket)) == null ? void 0 : _a.price) && unref(selectedTicket).price > 0) {
                          _push4(ssrRenderComponent(_component_UiButton, {
                            type: "submit",
                            onClick: ($event) => _ctx.$emit("buy", unref(selectedTicket))
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "solar:ticket-bold-duotone",
                                  class: "text-2xl"
                                }, null, _parent5, _scopeId4));
                                _push5(` buy now `);
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "solar:ticket-bold-duotone",
                                    class: "text-2xl"
                                  }),
                                  createTextVNode(" buy now ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (((_b = unref(selectedTicket)) == null ? void 0 : _b.price) && unref(selectedTicket).price == 0) {
                          _push4(ssrRenderComponent(_component_UiButton, { type: "submit" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "solar:ticket-bold-duotone",
                                  class: "text-2xl"
                                }, null, _parent5, _scopeId4));
                                _push5(` select ticket `);
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "solar:ticket-bold-duotone",
                                    class: "text-2xl"
                                  }),
                                  createTextVNode(" select ticket ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_UiDialogClose, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiButton, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` cancel `);
                                  } else {
                                    return [
                                      createTextVNode(" cancel ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiButton, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" cancel ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          ((_c = unref(selectedTicket)) == null ? void 0 : _c.price) && unref(selectedTicket).price > 0 ? (openBlock(), createBlock(_component_UiButton, {
                            key: 0,
                            type: "submit",
                            onClick: ($event) => _ctx.$emit("buy", unref(selectedTicket))
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "solar:ticket-bold-duotone",
                                class: "text-2xl"
                              }),
                              createTextVNode(" buy now ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : createCommentVNode("", true),
                          ((_d = unref(selectedTicket)) == null ? void 0 : _d.price) && unref(selectedTicket).price == 0 ? (openBlock(), createBlock(_component_UiButton, {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "solar:ticket-bold-duotone",
                                class: "text-2xl"
                              }),
                              createTextVNode(" select ticket ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiDialogClose, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" cancel ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("choose ticket")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Choose the ticket you want to buy ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-4 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.ticketTypes, (ticket2) => {
                        var _a;
                        return openBlock(), createBlock("label", {
                          key: ticket2.id,
                          for: ticket2.name,
                          class: "flex items-center gap-2 flex-col bg-secondary/80 cursor-pointer"
                        }, [
                          createVNode("input", {
                            type: "radio",
                            id: ticket2.name,
                            hidden: "",
                            name: "ticket",
                            onChange: ($event) => selectedTicket.value = ticket2,
                            disabled: ticket2.quantity_available == 0,
                            class: "peer",
                            value: ticket2.id
                          }, null, 40, ["id", "onChange", "disabled", "value"]),
                          createVNode("div", { class: "w-full h-full flex items-center flex-col gap-2 border-2 border-transparent peer-checked:border-accent rounded-md overflow-hidden" }, [
                            createVNode("span", { class: "size-16 flex items-center justify-center bg-accent/25 text-accent rounded-full p-3 shadow-md mt-2 mx-2" }, [
                              createVNode(_component_Icon, {
                                name: "solar:ticket-bold-duotone",
                                class: "text-6xl rotate-14"
                              })
                            ]),
                            createVNode("p", { class: "text-xl font-bold uppercase text-center peer-checked:text-white px-2" }, toDisplayString(ticket2.name), 1),
                            createVNode("p", { class: "text-sm secondary-text text-center inline-block px-2" }, toDisplayString(ticket2.description), 1),
                            createVNode("p", { class: "text-sm secondary-text text-center px-2 flex items-center gap-2" }, [
                              createVNode(_component_Icon, {
                                name: "solar:user-bold-duotone",
                                class: "text-2xl"
                              }),
                              createTextVNode(" " + toDisplayString(ticket2.quantity_available) + " tickets ", 1)
                            ]),
                            createVNode("span", {
                              class: [
                                "w-full p-2 text-sm text-center flex items-center justify-center gap-2 font-semibold",
                                ticket2.quantity_available > 0 ? "bg-accent/10 text-accent" : "bg-black/20 text-black"
                              ]
                            }, [
                              createVNode(_component_Icon, {
                                name: "solar:dollar-bold-duotone",
                                class: "text-2xl"
                              }),
                              createTextVNode(" " + toDisplayString((_a = ticket2.price) == null ? void 0 : _a.toLocaleString("en-EG", {
                                style: "currency",
                                currency: "EGP"
                              })), 1)
                            ], 2)
                          ])
                        ], 8, ["for"]);
                      }), 128))
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          ((_a = unref(selectedTicket)) == null ? void 0 : _a.price) && unref(selectedTicket).price > 0 ? (openBlock(), createBlock(_component_UiButton, {
                            key: 0,
                            type: "submit",
                            onClick: ($event) => _ctx.$emit("buy", unref(selectedTicket))
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "solar:ticket-bold-duotone",
                                class: "text-2xl"
                              }),
                              createTextVNode(" buy now ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : createCommentVNode("", true),
                          ((_b = unref(selectedTicket)) == null ? void 0 : _b.price) && unref(selectedTicket).price == 0 ? (openBlock(), createBlock(_component_UiButton, {
                            key: 1,
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "solar:ticket-bold-duotone",
                                class: "text-2xl"
                              }),
                              createTextVNode(" select ticket ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiDialogClose, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" cancel ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "trigger")
                ]),
                _: 3
              }),
              createVNode(_component_UiDialogContent, { class: "lg:!max-w-2xl" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("choose ticket")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Choose the ticket you want to buy ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-4 py-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.ticketTypes, (ticket2) => {
                      var _a;
                      return openBlock(), createBlock("label", {
                        key: ticket2.id,
                        for: ticket2.name,
                        class: "flex items-center gap-2 flex-col bg-secondary/80 cursor-pointer"
                      }, [
                        createVNode("input", {
                          type: "radio",
                          id: ticket2.name,
                          hidden: "",
                          name: "ticket",
                          onChange: ($event) => selectedTicket.value = ticket2,
                          disabled: ticket2.quantity_available == 0,
                          class: "peer",
                          value: ticket2.id
                        }, null, 40, ["id", "onChange", "disabled", "value"]),
                        createVNode("div", { class: "w-full h-full flex items-center flex-col gap-2 border-2 border-transparent peer-checked:border-accent rounded-md overflow-hidden" }, [
                          createVNode("span", { class: "size-16 flex items-center justify-center bg-accent/25 text-accent rounded-full p-3 shadow-md mt-2 mx-2" }, [
                            createVNode(_component_Icon, {
                              name: "solar:ticket-bold-duotone",
                              class: "text-6xl rotate-14"
                            })
                          ]),
                          createVNode("p", { class: "text-xl font-bold uppercase text-center peer-checked:text-white px-2" }, toDisplayString(ticket2.name), 1),
                          createVNode("p", { class: "text-sm secondary-text text-center inline-block px-2" }, toDisplayString(ticket2.description), 1),
                          createVNode("p", { class: "text-sm secondary-text text-center px-2 flex items-center gap-2" }, [
                            createVNode(_component_Icon, {
                              name: "solar:user-bold-duotone",
                              class: "text-2xl"
                            }),
                            createTextVNode(" " + toDisplayString(ticket2.quantity_available) + " tickets ", 1)
                          ]),
                          createVNode("span", {
                            class: [
                              "w-full p-2 text-sm text-center flex items-center justify-center gap-2 font-semibold",
                              ticket2.quantity_available > 0 ? "bg-accent/10 text-accent" : "bg-black/20 text-black"
                            ]
                          }, [
                            createVNode(_component_Icon, {
                              name: "solar:dollar-bold-duotone",
                              class: "text-2xl"
                            }),
                            createTextVNode(" " + toDisplayString((_a = ticket2.price) == null ? void 0 : _a.toLocaleString("en-EG", {
                              style: "currency",
                              currency: "EGP"
                            })), 1)
                          ], 2)
                        ])
                      ], 8, ["for"]);
                    }), 128))
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        ((_a = unref(selectedTicket)) == null ? void 0 : _a.price) && unref(selectedTicket).price > 0 ? (openBlock(), createBlock(_component_UiButton, {
                          key: 0,
                          type: "submit",
                          onClick: ($event) => _ctx.$emit("buy", unref(selectedTicket))
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "solar:ticket-bold-duotone",
                              class: "text-2xl"
                            }),
                            createTextVNode(" buy now ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true),
                        ((_b = unref(selectedTicket)) == null ? void 0 : _b.price) && unref(selectedTicket).price == 0 ? (openBlock(), createBlock(_component_UiButton, {
                          key: 1,
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "solar:ticket-bold-duotone",
                              class: "text-2xl"
                            }),
                            createTextVNode(" select ticket ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiDialogClose, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiButton, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" cancel ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/choose-ticket/ChooseTicketWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./AttendeesModal-BBVAVNf5.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const eventId = computed(() => route.params.eventId);
    const ticketModal = shallowRef(false);
    shallowRef(false);
    const { userStore } = useUser();
    const {
      eventDetailsState,
      handleSetEventDetails,
      handleSetSelectedTicketType
    } = useEventDetailsState();
    const { success } = useApiMutation();
    const { data: eventDetails, status } = useAsyncData(
      `${QUERY_KEYS.EVENT_DETAILS}__${eventId.value}`,
      () => $fetch(`/api/events/${eventId.value}`, {
        method: "GET",
        headers: {
          ...useRequestHeaders(["cookie"])
        }
      }),
      { watch: [eventId] }
    );
    const { data: ticketTypes2, error } = useAsyncData(
      `${QUERY_KEYS.TICKET_TYPES}__${eventId.value}`,
      () => $fetch(`/api/ticket-types/event/${eventId.value}`, {
        method: "GET"
      })
    );
    const { data: eventRegistrations, execute: executeRegistrations } = useAsyncData(
      `${QUERY_KEYS.EVENT_REGISTRATIONS}__${eventId.value}`,
      () => useRequestFetch()(`/api/registrations/${eventId.value}`),
      {
        watch: [eventId]
      }
    );
    const handleBuyTicket = (ticket2) => {
      handleSetSelectedTicketType(ticket2);
      navigateTo({
        path: `/dashboard/payments`
      });
    };
    const handleSelectTicket = (ticket2) => {
      handleSetSelectedTicketType(ticket2);
    };
    const unwatchEventDetails = watch(
      [eventDetails],
      () => {
        if (!eventDetails.value) return;
        handleSetEventDetails(eventDetails.value.data);
      },
      { immediate: true }
    );
    if (eventDetailsState.value.event && eventDetailsState.value.selectedTicketType) {
      unwatchEventDetails();
    }
    useServerSeoMeta({
      title: () => {
        var _a, _b;
        return ((_b = (_a = eventDetails == null ? void 0 : eventDetails.value) == null ? void 0 : _a.data) == null ? void 0 : _b.name) || `Event ${eventId.value}`;
      },
      description: () => {
        var _a, _b;
        return ((_b = (_a = eventDetails == null ? void 0 : eventDetails.value) == null ? void 0 : _a.data) == null ? void 0 : _b.description) || `Event ${eventId.value} details`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la;
      const _component_UiButton = _sfc_main$b;
      const _component_Icon = __nuxt_component_0;
      const _component_EventsChooseTicketWrapper = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_3;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_LazyEventsAttendeesModal = __nuxt_component_5_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex-col flex items-start justify-start" }, _attrs))}><figure class="relative w-full h-72 bg-secondary/50 backdrop-blur-md"><img${ssrRenderAttr("src", (_b = (_a = unref(eventDetails)) == null ? void 0 : _a.data) == null ? void 0 : _b.image)}${ssrRenderAttr("alt", (_d = (_c = unref(eventDetails)) == null ? void 0 : _c.data) == null ? void 0 : _d.name)} class="w-full h-full object-cover"><div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90 rounded-t-sm flex items-end justify-between justify-end max-md:flex-col max-md:items-center max-md:justify-end p-4"><div class="max-md:w-full flex flex-col items-start space-y-6 md:flex-1">`);
      if ((_f = (_e = unref(eventDetails)) == null ? void 0 : _e.data) == null ? void 0 : _f.event_type) {
        _push(`<span class="${ssrRenderClass([unref(eventTypeBackgroundFactory)((_h = (_g = unref(eventDetails)) == null ? void 0 : _g.data) == null ? void 0 : _h.event_type), "px-3 py-1 rounded-full text-white text-xs font-medium mb-3"])}">${ssrInterpolate((_j = (_i = unref(eventDetails)) == null ? void 0 : _i.data) == null ? void 0 : _j.event_type)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-white md:text-2xl font-bold mb-3">${ssrInterpolate((_l = (_k = unref(eventDetails)) == null ? void 0 : _k.data) == null ? void 0 : _l.name)}</h3></div>`);
      if (unref(status) === "success") {
        _push(`<div class="max-md:w-full flex items-center justify-start gap-2">`);
        _push(ssrRenderComponent(_component_UiButton, {
          type: "button",
          variant: "outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:share",
                class: "w-4 h-4"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-sm font-medium"${_scopeId}>Share</p>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "mdi:share",
                  class: "w-4 h-4"
                }),
                createVNode("p", { class: "text-sm font-medium" }, "Share")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (!((_n = (_m = unref(eventDetails)) == null ? void 0 : _m.data) == null ? void 0 : _n.is_registered) && ((_o = unref(eventDetails)) == null ? void 0 : _o.data.created_by) !== ((_p = unref(userStore)) == null ? void 0 : _p.id)) {
          _push(ssrRenderComponent(_component_EventsChooseTicketWrapper, {
            ticketTypes: ((_q = unref(ticketTypes2)) == null ? void 0 : _q.data) || [],
            ref_key: "ticketModal",
            ref: ticketModal,
            onBuy: handleBuyTicket,
            onSelect: handleSelectTicket
          }, {
            trigger: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiButton, { type: "button" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` enroll now `);
                    } else {
                      return [
                        createTextVNode(" enroll now ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiButton, { type: "button" }, {
                    default: withCtx(() => [
                      createTextVNode(" enroll now ")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(success) || ((_s = (_r = unref(eventDetails)) == null ? void 0 : _r.data) == null ? void 0 : _s.is_registered)) {
          _push(`<button type="button" disabled class="flex items-center justify-start gap-2 bg-accent/20 text-gray-400 px-3 py-2 rounded-lg cursor-not-allowed">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:check",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<p class="text-inherit text-sm font-medium">enrolled</p></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></figure><div class="w-full flex items-center justify-between gap-4 p-4"><ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-start gap-5"><li class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:calendar",
        class: "text-2xl text-accent shrink-0"
      }, null, _parent));
      _push(`<p class="text-xs font-semibold capitalize text-text-secondary max-w-full overflow-hidden text-ellipsis"><strong class="text-gray-800"> start : </strong> ${ssrInterpolate(unref(dateFormatter)((_u = (_t = unref(eventDetails)) == null ? void 0 : _t.data) == null ? void 0 : _u.start_at))}</p></li><li class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:calendar-range",
        class: "text-2xl text-accent shrink-0"
      }, null, _parent));
      _push(`<p class="text-xs font-semibold capitalize text-text-secondary max-w-full overflow-hidden text-ellipsis"><strong class="text-gray-800"> end : </strong> ${ssrInterpolate(unref(dateFormatter)((_w = (_v = unref(eventDetails)) == null ? void 0 : _v.data) == null ? void 0 : _w.end_at))}</p></li>`);
      if (((_y = (_x = unref(eventDetails)) == null ? void 0 : _x.data) == null ? void 0 : _y.location_type) === unref(LocationType).OFFLINE) {
        _push(`<li class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:location",
          class: "text-2xl text-accent shrink-0"
        }, null, _parent));
        _push(`<p class="text-xs font-semibold capitalize text-center text-text-secondary max-w-full overflow-hidden text-ellipsis">${ssrInterpolate((_A = (_z = unref(eventDetails)) == null ? void 0 : _z.data) == null ? void 0 : _A.location_type)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="flex items-center justify-start gap-2 bg-card px-3 py-2 rounded-lg max-w-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:users",
        class: "text-2xl text-accent shrink-0"
      }, null, _parent));
      _push(`<p class="text-xs font-semibold capitalize text-center text-text-secondary max-w-full overflow-hidden text-ellipsis">${ssrInterpolate((_C = (_B = unref(eventDetails)) == null ? void 0 : _B.data) == null ? void 0 : _C.capacity)} attendees </p></li></ul></div><div class="w-full flex items-start justify-start max-md:flex-col gap-4 py-2 px-4"><ul class="w-full md:w-1/2 lg:w-[60%] flex items-center flex-col justify-start gap-4"><li class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"><h3 class="text-xl capitalize font-semibold text-text-primary"> description </h3><p class="text-sm font-medium text-text-secondary">${ssrInterpolate((_E = (_D = unref(eventDetails)) == null ? void 0 : _D.data) == null ? void 0 : _E.description)}</p></li>`);
      if (((_G = (_F = unref(eventDetails)) == null ? void 0 : _F.data) == null ? void 0 : _G.location_type) === unref(LocationType).OFFLINE) {
        _push(`<li class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"><h3 class="text-xl capitalize font-semibold text-text-primary"> Location </h3><p class="text-sm font-medium text-text-secondary">${ssrInterpolate((_I = (_H = unref(eventDetails)) == null ? void 0 : _H.data) == null ? void 0 : _I.location)}</p><div class="w-full h-[260px] bg-background/50 backdrop-blur-md rounded-lg overflow-hidden text-center">`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div></li>`);
      } else {
        _push(`<!---->`);
      }
      if (((_K = (_J = unref(eventDetails)) == null ? void 0 : _J.data) == null ? void 0 : _K.location_type) === unref(LocationType).ONLINE) {
        _push(`<li class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"><h3 class="text-xl capitalize font-semibold text-text-primary"> event link </h3><p class="text-sm font-medium text-text-secondary"> this event is online, you can join it using the link below </p><div class="w-full h-48 flex items-center justify-center flex-col bg-accent/10 backdrop-blur-md rounded-sm text-center p-4"><span class="flex items-center justify-center bg-accent/40 w-fit p-4 rounded-full aspect-square m-auto">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:link",
          class: "text-4xl text-accent"
        }, null, _parent));
        _push(`</span>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          href: (_M = (_L = unref(eventDetails)) == null ? void 0 : _L.data) == null ? void 0 : _M.invitation_url,
          class: "flex items-center justify-center gap-2 text-sm font-medium text-accent mt-4 bg-accent/20 p-2 rounded-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate((_b2 = (_a2 = unref(eventDetails)) == null ? void 0 : _a2.data) == null ? void 0 : _b2.invitation_url)}</p>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:open-in-new",
                class: "text-base"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("p", null, toDisplayString((_d2 = (_c2 = unref(eventDetails)) == null ? void 0 : _c2.data) == null ? void 0 : _d2.invitation_url), 1),
                createVNode(_component_Icon, {
                  name: "mdi:open-in-new",
                  class: "text-base"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul><ul class="flex items-center flex-col justify-start gap-4 w-full md:w-1/2 lg:w-[40%]"><li class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"><h3 class="text-xl font-semibold text-text-primary mb-4 capitalize"> event details </h3><ul class="w-full grid grid-cols-1 gap-2">`);
      if ((_O = (_N = unref(eventDetails)) == null ? void 0 : _N.data) == null ? void 0 : _O.event_type) {
        _push(`<li class="flex items-start justify-start gap-3.5"><p class="text-sm min-w-20 font-medium capitalize text-text-primary"> type: </p><span class="${ssrRenderClass([
          unref(eventTypeBackgroundFactory)((_Q = (_P = unref(eventDetails)) == null ? void 0 : _P.data) == null ? void 0 : _Q.event_type),
          "px-3 py-1 rounded-full text-xs font-bold capitalize min-w-16 text-center mix-blend-difference"
        ])}">${ssrInterpolate((_S = (_R = unref(eventDetails)) == null ? void 0 : _R.data) == null ? void 0 : _S.event_type)}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="flex items-start justify-start gap-3.5"><p class="text-sm min-w-20 font-medium capitalize text-text-primary"> start date: </p><p class="text-sm font-medium capitalize text-text-secondary">${ssrInterpolate(unref(dateFormatter)((_U = (_T = unref(eventDetails)) == null ? void 0 : _T.data) == null ? void 0 : _U.start_at))}</p></li><li class="flex items-start justify-start gap-3.5"><p class="text-sm min-w-20 font-medium capitalize text-text-primary"> end date: </p><p class="text-sm font-medium capitalize text-text-secondary">${ssrInterpolate(unref(dateFormatter)((_W = (_V = unref(eventDetails)) == null ? void 0 : _V.data) == null ? void 0 : _W.end_at))}</p></li>`);
      if (((_Y = (_X = unref(eventDetails)) == null ? void 0 : _X.data) == null ? void 0 : _Y.location_type) === unref(LocationType).OFFLINE) {
        _push(`<li class="flex items-start justify-start gap-3.5"><p class="text-sm min-w-20 font-medium capitalize text-text-primary"> location: </p><p class="text-sm font-medium capitalize text-text-secondary">${ssrInterpolate((__ = (_Z = unref(eventDetails)) == null ? void 0 : _Z.data) == null ? void 0 : __.location)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_aa = (_$ = unref(eventDetails)) == null ? void 0 : _$.data) == null ? void 0 : _aa.company_id) {
        _push(`<li class="flex items-start justify-start gap-3.5"><p class="text-sm min-w-20 font-medium capitalize text-text-primary"> organizer: </p><p class="text-sm font-medium capitalize text-text-secondary">${ssrInterpolate((_ca = (_ba = unref(eventDetails)) == null ? void 0 : _ba.data) == null ? void 0 : _ca.company_id)}</p><p class="text-sm font-medium capitalize text-text-secondary">${ssrInterpolate((_ea = (_da = unref(eventDetails)) == null ? void 0 : _da.data) == null ? void 0 : _ea.created_by)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="flex items-start justify-start gap-3.5"><p class="text-sm min-w-20 font-medium capitalize text-text-primary"> created by: </p><p class="text-sm font-medium capitalize text-text-secondary">${ssrInterpolate((_ga = (_fa = unref(eventDetails)) == null ? void 0 : _fa.data) == null ? void 0 : _ga.creator_name)}</p></li></ul></li><li class="w-full flex items-start justify-start flex-col gap-2 p-4 rounded-sm bg-card border border-border shadow-sm"><h3 class="text-xl capitalize font-semibold text-text-primary mb-4 capitalize"> event stats </h3><p class="text-sm font-medium text-text-secondary"> Manage your event attendees here </p><div class="w-full grid grid-cols-2 gap-2"><div class="w-full flex flex-col bg-background/90 backdrop-blur-md rounded-sm items-center justify-start gap-2 p-4"><p class="text-3xl font-bold capitalize text-text-primary">${ssrInterpolate((_ia = (_ha = unref(eventDetails)) == null ? void 0 : _ha.data) == null ? void 0 : _ia.capacity)}</p><p class="text-sm font-medium text-center capitalize text-text-secondary"> Total Attendees </p></div><div class="w-full flex flex-col bg-background/90 backdrop-blur-md rounded-sm items-center justify-start gap-2 p-4"><p class="text-3xl font-bold capitalize text-text-primary">${ssrInterpolate(((_ka = (_ja = unref(eventRegistrations)) == null ? void 0 : _ja.data) == null ? void 0 : _ka.length) || 0)}</p><p class="text-sm text-center font-medium capitalize text-text-secondary"> confirmed </p></div></div><div class="w-full flex items-center justify-start gap-2 mt-4">`);
      _push(ssrRenderComponent(_component_LazyEventsAttendeesModal, {
        registrations: (_la = unref(eventRegistrations)) == null ? void 0 : _la.data
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiButton, {
              type: "button",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "mdi:account-multiple",
                    class: "w-4 h-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-sm font-medium text-white"${_scopeId2}>Manage attendees</p>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "mdi:account-multiple",
                      class: "w-4 h-4"
                    }),
                    createVNode("p", { class: "text-sm font-medium text-white" }, "Manage attendees")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiButton, {
                type: "button",
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "mdi:account-multiple",
                    class: "w-4 h-4"
                  }),
                  createVNode("p", { class: "text-sm font-medium text-white" }, "Manage attendees")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/events/[eventId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));

export { _sfc_main$a as _, _sfc_main$9 as a, _sfc_main$7 as b, _sfc_main$6 as c, _sfc_main$5 as d, _sfc_main$4 as e, index as i };
//# sourceMappingURL=index-CRifrVqn.mjs.map
