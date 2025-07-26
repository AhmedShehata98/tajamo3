import { _ as __nuxt_component_0 } from './nuxt-link-DzJA0YMK.mjs';
import __nuxt_component_0$1 from './index-Ne2zYMiW.mjs';
import { defineComponent, shallowRef, watch, mergeProps, unref, computed, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, ref, renderSlot, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, DropdownMenuRoot, useForwardProps, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DialogRoot, DialogTrigger, DialogPortal, DialogContent, DialogClose, DialogTitle, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner, DialogOverlay, ScrollAreaScrollbar, ScrollAreaThumb } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core';
import { X } from 'lucide-vue-next';
import { c as cn } from './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { a as useState, u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useFetch } from './fetch-DNROhRzN.mjs';
import { toast } from 'vue-sonner';
import { n as navigateTo } from './server.mjs';
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
import '@iconify/utils/lib/css/icon';
import './v3-DxuvcMCg.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-CmGrW10P.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import 'clsx';
import 'tailwind-merge';
import './ssr-Df1vlv0O.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    icon: { type: String, required: true },
    to: { type: String, required: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["flex items-center justify-between-start gap-2 transition-colors rounded text-[#1D2939] duration-500 px-3 py-1.5 text-sm font-semibold capitalize hover:bg-[#EAECF0]", {
          "bg-[#7F56D9] backdrop-blur-md font-semibold text-gray-100 pointer-events-none": _ctx.$route.path.endsWith(__props.to)
        }],
        to: __props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ "!bg-[#6941C6] text-[#F9FAFB]": _ctx.$route.path.endsWith(__props.to) }, "size-9 flex items-center justify-center rounded-full bg-[#f2f4f7] text-[#7F56D9]"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: __props.icon,
              class: "text-lg"
            }, null, _parent2, _scopeId));
            _push2(`</span><p class="leading-3 text-inherit"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p>`);
          } else {
            return [
              createVNode("span", {
                class: ["size-9 flex items-center justify-center rounded-full bg-[#f2f4f7] text-[#7F56D9]", { "!bg-[#6941C6] text-[#F9FAFB]": _ctx.$route.path.endsWith(__props.to) }]
              }, [
                createVNode(_component_Icon, {
                  name: __props.icon,
                  class: "text-lg"
                }, null, 8, ["name"])
              ], 2),
              createVNode("p", { class: "leading-3 text-inherit" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dashboard/sidebar/NavLink.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "sidebar",
  __ssrInlineRender: true,
  props: {
    isOpenSidebar: { type: Boolean }
  },
  emits: ["toggle-sidebar"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDashboardSidebarNavLink = _sfc_main$m;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["min-h-screen w-full min-w-full md:min-w-(--sidebar-width) md:w-(--sidebar-width) bg-[#FCFCFD] backdrop-blur-md border-r border-r-border sticky top-0 left-0 z-50 max-lg:absolute max-md:top-16 max-lg:top-19 max-md:left-0 max-md:w-full max-md:min-w-full max-md:border-none overflow-x-auto transition-all duration-300 ease-in-out", {
          "max-md:opacity-100 max-md:translate-x-0": _ctx.isOpenSidebar,
          "max-md:opacity-50 max-md:-translate-x-full": !_ctx.isOpenSidebar
        }]
      }, _attrs))}><div class="w-full flex items-center justify-between pt-6 pb-2 ps-8"><h1 class="text-xl font-bold uppercase text-[#6941C6]">Tajamou</h1></div><div class="w-full flex flex-col gap-1 mb-5"><ul class="w-full flex flex-col px-2 gap-1 mt-5"><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "heroicons:home",
        to: "/dashboard",
        onClick: ($event) => _ctx.$emit("toggle-sidebar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` dashboard `);
          } else {
            return [
              createTextVNode(" dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "heroicons:calendar",
        to: "/dashboard/events",
        onClick: ($event) => _ctx.$emit("toggle-sidebar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` events `);
          } else {
            return [
              createTextVNode(" events ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "iconamoon:shopping-bag",
        to: "/dashboard/orders",
        onClick: ($event) => _ctx.$emit("toggle-sidebar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` orders `);
          } else {
            return [
              createTextVNode(" orders ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "heroicons:ticket",
        to: "/dashboard/tickets",
        onClick: ($event) => _ctx.$emit("toggle-sidebar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` tickets `);
          } else {
            return [
              createTextVNode(" tickets ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "heroicons:users",
        to: "/dashboard/teams",
        onClick: ($event) => _ctx.$emit("toggle-sidebar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` teams `);
          } else {
            return [
              createTextVNode(" teams ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "heroicons:building-office",
        to: "/dashboard/company",
        onClick: ($event) => _ctx.$emit("toggle-sidebar")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` company `);
          } else {
            return [
              createTextVNode(" company ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="w-full">`);
      _push(ssrRenderComponent(_component_UiDashboardSidebarNavLink, {
        icon: "heroicons:cog-6-tooth",
        to: "/dashboard/settings"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` settings `);
          } else {
            return [
              createTextVNode(" settings ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="w-full flex items-center justify-center p-3">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard/events/create",
        type: "button",
        class: "btn bg-[#6941C6] w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm font-medium text-white capitalize leading-3"${_scopeId}> new event </p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:plus",
              class: "text-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-sm font-medium text-white capitalize leading-3" }, " new event "),
              createVNode(_component_Icon, {
                name: "heroicons:plus",
                class: "text-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dashboard/sidebar/sidebar.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Sheet",
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
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps({ "data-slot": "sheet" }, unref(forwarded), _attrs), {
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SheetTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps({ "data-slot": "sheet-trigger" }, props, _attrs), {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SheetOverlay",
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
      _push(ssrRenderComponent(unref(DialogOverlay), mergeProps({
        "data-slot": "sheet-overlay",
        class: unref(cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", props.class)
      }, unref(delegatedProps), _attrs), {
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
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetOverlay.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: {},
    side: { default: "right" },
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class", "side");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              "data-slot": "sheet-content",
              style: { "background-image": "url('/images/dashboard-bg.jpg')" },
              class: unref(cn)(
                "bg-background backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                _ctx.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                _ctx.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                _ctx.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                _ctx.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                props.class
              )
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), { class: "size-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(X), { class: "size-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "size-4" }),
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
              createVNode(_sfc_main$i),
              createVNode(unref(DialogContent), mergeProps({
                "data-slot": "sheet-content",
                style: { "background-image": "url('/images/dashboard-bg.jpg')" },
                class: unref(cn)(
                  "bg-background backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                  _ctx.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                  _ctx.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                  _ctx.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                  _ctx.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                  props.class
                )
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "size-4" }),
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SheetHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sheet-header",
        class: unref(cn)("flex flex-col gap-1.5 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetHeader.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "SheetTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTitle), mergeProps({
        "data-slot": "sheet-title",
        class: unref(cn)("text-foreground font-semibold", props.class)
      }, unref(delegatedProps), _attrs), {
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
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTitle.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps({ "data-slot": "scroll-area-scrollbar" }, unref(delegatedProps), {
        class: unref(cn)(
          "flex touch-none p-px transition-colors select-none",
          _ctx.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
          _ctx.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), {
              "data-slot": "scroll-area-thumb",
              class: "bg-border relative flex-1 rounded-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), {
                "data-slot": "scroll-area-thumb",
                class: "bg-border relative flex-1 rounded-full"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps({ "data-slot": "scroll-area" }, unref(delegatedProps), {
        class: unref(cn)("relative", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), {
              "data-slot": "scroll-area-viewport",
              class: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$e, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), {
                "data-slot": "scroll-area-viewport",
                class: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$e),
              createVNode(unref(ScrollAreaCorner))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NotificationCard",
  __ssrInlineRender: true,
  props: {
    notification: {}
  },
  setup(__props) {
    const notificationIconBgStrategy = (type) => {
      switch (type) {
        case "done":
          return "text-green-700";
        case "urgent":
          return "text-red-700";
        case "warn":
          return "text-orange-500";
        case "info":
          return "text-blue-500";
      }
    };
    const notificationIconStrategy = (type) => {
      switch (type) {
        case "done":
          return "solar:check-square-bold";
        case "urgent":
          return "solar:danger-square-bold";
        case "warn":
          return "solar:shield-warning-bold";
        case "info":
          return "solar:info-square-bold";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex gap-3 p-3 rounded-sm bg-primary backdrop-blur-md border border-border" }, _attrs))}><span style="${ssrRenderStyle(!_ctx.notification.is_read ? null : { display: "none" })}" class="absolute -top-1 right-1 size-3 shadow-lg rounded-full bg-emerald-500 flex items-center justify-center"></span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: notificationIconStrategy(_ctx.notification.type),
        class: ["text-4xl shrink-0", notificationIconBgStrategy(_ctx.notification.type)]
      }, null, _parent));
      _push(`<div class="flex flex-col gap-1"><p class="text-text-primary text-sm font-medium capitalize">${ssrInterpolate(_ctx.notification.title)}</p><p class="text-xs text-text-secondary capitalize">${ssrInterpolate(_ctx.notification.description)}</p><time${ssrRenderAttr("datetime", _ctx.notification.created_at)} class="text-xs text-text-secondary capitalize mt-2">${ssrInterpolate(Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(new Date(_ctx.notification.created_at)))}</time></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dashboard/header/NotificationCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "SheetFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "sheet-footer",
        class: unref(cn)("mt-auto flex flex-col gap-2 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetFooter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
class EventSourceSingleton {
  static getInstance(url) {
    if (!this.instance) {
      this.instance = new EventSource(url);
    }
    return this.instance;
  }
  static onMessage(callback) {
    if (!this.instance) return;
    this.instance.onmessage = callback;
  }
  static onError(callback) {
    if (!this.instance) return;
    this.instance.onerror = callback;
  }
  static close() {
    if (this.instance) {
      this.instance.close();
      this.instance = null;
    }
  }
}
__publicField(EventSourceSingleton, "instance", null);
const useNotifications = () => {
  const notifications = useState(
    QUERY_KEYS.NOTIFICATIONS,
    () => ref([])
  );
  useFetch("/api/notifications", {
    key: QUERY_KEYS.PREV_NOTIFICATIONS,
    onResponse: (response) => {
      if (!response.response.ok) return;
      const data = response.response._data;
      if (data && data.data.length > 0) {
        notifications.value = data.data;
      }
    }
  }, "$FQ-xj8W3Uw");
  const setup = () => {
    EventSourceSingleton.getInstance("/api/notifications/sse");
    EventSourceSingleton.onMessage((event) => {
      try {
        const notification = JSON.parse(event.data);
        notifications.value.unshift(notification);
      } catch (error) {
        {
          console.error("Error parsing notification data");
        }
      }
      JSON.parse(event.data);
    });
    EventSourceSingleton.onError((error) => {
      console.error("EventSource failed:", error);
    });
  };
  const clearAll = async () => {
    try {
      const response = await fetch("/api/notifications", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ids: notifications.value.map((n) => n.id) })
      });
      if (!response.ok) {
        throw new Error("Failed to clear notifications");
      }
      notifications.value = [];
    } catch (error) {
      {
        console.error("Error clearing notifications:");
      }
    }
  };
  const markAllAsRead = async () => {
    try {
      const response = await fetch("/api/notifications/all-as-read", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ids: notifications.value.map((n) => n.id)
        })
      });
      if (!response.ok) {
        throw new Error("Failed to mark notifications as read");
      }
      notifications.value.forEach((n) => n.is_read = true);
    } catch (error) {
      {
        console.error("Error marking notifications as read:");
      }
    }
  };
  return {
    notifications,
    count: computed(() => notifications.value.length),
    unreadCount: computed(
      () => notifications.value.filter((n) => !n.is_read).length
    ),
    setup,
    clearAll,
    markAllAsRead,
    close: EventSourceSingleton.close
  };
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NotificationSheet",
  __ssrInlineRender: true,
  setup(__props) {
    const inPendingMarkAllAsRead = shallowRef(false);
    shallowRef(false);
    const { notifications, markAllAsRead, clearAll } = useNotifications();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$k;
      const _component_UiSheetTrigger = _sfc_main$j;
      const _component_UiSheetContent = _sfc_main$h;
      const _component_UiSheetHeader = _sfc_main$g;
      const _component_UiSheetTitle = _sfc_main$f;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiScrollArea = _sfc_main$d;
      const _component_UiDashboardHeaderNotificationCard = _sfc_main$c;
      const _component_UiSheetFooter = _sfc_main$b;
      _push(ssrRenderComponent(_component_UiSheet, mergeProps({ style: { "background-image": "url('/images/dashboard-bg.webp')" } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, { class: "flex items-center justify-between flex-row py-4 mt-8 w-full max-w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Notifications`);
                            } else {
                              return [
                                createTextVNode("Notifications")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<button type="button" class="text-sm text-accent capitalize"${ssrIncludeBooleanAttr(unref(inPendingMarkAllAsRead)) ? " disabled" : ""}${_scopeId3}>`);
                        if (!unref(inPendingMarkAllAsRead)) {
                          _push4(`<span class="flex items-center gap-2"${_scopeId3}><p class="text-inherit font-semibold"${_scopeId3}>mark all as read</p>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:check",
                            class: "inline-block"
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "line-md:loading-twotone-loop",
                            class: "text-zinc-500 inline-block text-xl ps-8"
                          }, null, _parent4, _scopeId3));
                        }
                        _push4(`</button>`);
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Notifications")
                            ]),
                            _: 1
                          }),
                          createVNode("button", {
                            type: "button",
                            class: "text-sm text-accent capitalize",
                            onClick: async () => await unref(markAllAsRead)(),
                            disabled: unref(inPendingMarkAllAsRead)
                          }, [
                            !unref(inPendingMarkAllAsRead) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode("p", { class: "text-inherit font-semibold" }, "mark all as read"),
                              createVNode(_component_Icon, {
                                name: "lucide:check",
                                class: "inline-block"
                              })
                            ])) : (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "line-md:loading-twotone-loop",
                              class: "text-zinc-500 inline-block text-xl ps-8"
                            }))
                          ], 8, ["onClick", "disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-13rem)] px-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul class="flex flex-col gap-2 pt-2"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(notifications), (notification) => {
                          _push4(ssrRenderComponent(_component_UiDashboardHeaderNotificationCard, {
                            key: notification.title,
                            notification
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></ul>`);
                      } else {
                        return [
                          createVNode("ul", { class: "flex flex-col gap-2 pt-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                              return openBlock(), createBlock(_component_UiDashboardHeaderNotificationCard, {
                                key: notification.title,
                                notification
                              }, null, 8, ["notification"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSheetFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between"${_scopeId3}><p class="text-sm text-muted-foreground"${_scopeId3}>${ssrInterpolate(unref(notifications).length)} notifications </p><button type="button" class="flex items-center gap-2 text-sm text-red-500 capitalize rounded-md px-3 py-1 font-medium hover:bg-red-200"${_scopeId3}><p class="text-inherit"${_scopeId3}>clear all</p>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:trash-2",
                          class: "inline-block"
                        }, null, _parent4, _scopeId3));
                        _push4(`</button></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(unref(notifications).length) + " notifications ", 1),
                            createVNode("button", {
                              type: "button",
                              class: "flex items-center gap-2 text-sm text-red-500 capitalize rounded-md px-3 py-1 font-medium hover:bg-red-200",
                              onClick: async () => await unref(clearAll)()
                            }, [
                              createVNode("p", { class: "text-inherit" }, "clear all"),
                              createVNode(_component_Icon, {
                                name: "lucide:trash-2",
                                class: "inline-block"
                              })
                            ], 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, { class: "flex items-center justify-between flex-row py-4 mt-8 w-full max-w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Notifications")
                          ]),
                          _: 1
                        }),
                        createVNode("button", {
                          type: "button",
                          class: "text-sm text-accent capitalize",
                          onClick: async () => await unref(markAllAsRead)(),
                          disabled: unref(inPendingMarkAllAsRead)
                        }, [
                          !unref(inPendingMarkAllAsRead) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode("p", { class: "text-inherit font-semibold" }, "mark all as read"),
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "inline-block"
                            })
                          ])) : (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "line-md:loading-twotone-loop",
                            class: "text-zinc-500 inline-block text-xl ps-8"
                          }))
                        ], 8, ["onClick", "disabled"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-13rem)] px-4" }, {
                      default: withCtx(() => [
                        createVNode("ul", { class: "flex flex-col gap-2 pt-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                            return openBlock(), createBlock(_component_UiDashboardHeaderNotificationCard, {
                              key: notification.title,
                              notification
                            }, null, 8, ["notification"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSheetFooter, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(unref(notifications).length) + " notifications ", 1),
                          createVNode("button", {
                            type: "button",
                            class: "flex items-center gap-2 text-sm text-red-500 capitalize rounded-md px-3 py-1 font-medium hover:bg-red-200",
                            onClick: async () => await unref(clearAll)()
                          }, [
                            createVNode("p", { class: "text-inherit" }, "clear all"),
                            createVNode(_component_Icon, {
                              name: "lucide:trash-2",
                              class: "inline-block"
                            })
                          ], 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_component_UiSheetContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSheetHeader, { class: "flex items-center justify-between flex-row py-4 mt-8 w-full max-w-full" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiSheetTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Notifications")
                        ]),
                        _: 1
                      }),
                      createVNode("button", {
                        type: "button",
                        class: "text-sm text-accent capitalize",
                        onClick: async () => await unref(markAllAsRead)(),
                        disabled: unref(inPendingMarkAllAsRead)
                      }, [
                        !unref(inPendingMarkAllAsRead) ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode("p", { class: "text-inherit font-semibold" }, "mark all as read"),
                          createVNode(_component_Icon, {
                            name: "lucide:check",
                            class: "inline-block"
                          })
                        ])) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "line-md:loading-twotone-loop",
                          class: "text-zinc-500 inline-block text-xl ps-8"
                        }))
                      ], 8, ["onClick", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiScrollArea, { class: "h-[calc(100vh-13rem)] px-4" }, {
                    default: withCtx(() => [
                      createVNode("ul", { class: "flex flex-col gap-2 pt-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (notification) => {
                          return openBlock(), createBlock(_component_UiDashboardHeaderNotificationCard, {
                            key: notification.title,
                            notification
                          }, null, 8, ["notification"]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiSheetFooter, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(unref(notifications).length) + " notifications ", 1),
                        createVNode("button", {
                          type: "button",
                          class: "flex items-center gap-2 text-sm text-red-500 capitalize rounded-md px-3 py-1 font-medium hover:bg-red-200",
                          onClick: async () => await unref(clearAll)()
                        }, [
                          createVNode("p", { class: "text-inherit" }, "clear all"),
                          createVNode(_component_Icon, {
                            name: "lucide:trash-2",
                            class: "inline-block"
                          })
                        ], 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dashboard/header/NotificationSheet.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps({ "data-slot": "dropdown-menu" }, unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ "data-slot": "dropdown-menu-trigger" }, unref(forwardedProps), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, unref(forwarded), {
              class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, unref(forwarded), {
                class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "inset");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps({
        "data-slot": "dropdown-menu-label",
        "data-inset": _ctx.inset ? "" : void 0
      }, unref(forwardedProps), {
        class: unref(cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", props.class)
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps({ "data-slot": "dropdown-menu-separator" }, unref(delegatedProps), {
        class: unref(cn)("bg-border -mx-1 my-1 h-px", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuGroup), mergeProps({ "data-slot": "dropdown-menu-group" }, props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "inset", "variant", "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps({
        "data-slot": "dropdown-menu-item",
        "data-inset": _ctx.inset ? "" : void 0,
        "data-variant": _ctx.variant
      }, unref(forwardedProps), {
        class: unref(cn)(
          `focus:bg-accent/40 focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
          props.class
        )
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuShortcut",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        "data-slot": "dropdown-menu-shortcut",
        class: unref(cn)("text-muted-foreground ml-auto text-xs tracking-widest", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuShortcut.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  props: {
    isOpenSidebar: { type: Boolean }
  },
  emits: ["toggle-sidebar"],
  setup(__props) {
    const { fullName, logout } = useUser();
    const { unreadCount: unreadNotificationsCount } = useNotifications();
    const handleLogout = async () => {
      try {
        await logout();
        navigateTo("/");
        toast.success("Logged out successfully");
      } catch (error) {
        toast.error("Failed to logout");
        console.error(error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDashboardHeaderNotificationSheet = _sfc_main$a;
      const _component_UiDropdownMenu = _sfc_main$9;
      const _component_UiDropdownMenuTrigger = _sfc_main$8;
      const _component_UiDropdownMenuContent = _sfc_main$7;
      const _component_UiDropdownMenuLabel = _sfc_main$6;
      const _component_UiDropdownMenuSeparator = _sfc_main$5;
      const _component_UiDropdownMenuGroup = _sfc_main$4;
      const _component_UiDropdownMenuItem = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiDropdownMenuShortcut = _sfc_main$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 left-0 z-50 isolate w-full flex items-center justify-between px-4 py-3 border-b bg-[#FCFCFD] backdrop-blur-md border-border" }, _attrs))}><div class="flex items-center justify-start gap-4"><button type="button" class="flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors lg:hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.isOpenSidebar ? "iconamoon:close-fill" : "heroicons:bars-3-center-left-20-solid",
        class: "text-3xl text-muted-foreground max-md:hidden"
      }, null, _parent));
      _push(`</button><form action="" class="max-md:hidden w-56"><span class="relative flex items-center justify-start gap-2 rounded-md input px-3.5"><label for="search" class="cursor-pointer flex items-center justify-start text-muted-foreground">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:magnifying-glass",
        class: "text-2xl"
      }, null, _parent));
      _push(`</label><input type="text" placeholder="Search" class="w-full px-4 py-1 rounded focus:outline-none focus:border-none"></span></form></div><div class="flex items-center gap-4"><div class="flex items-center justify-center gap-2">`);
      _push(ssrRenderComponent(_component_UiDashboardHeaderNotificationSheet, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-slate-800 hover:bg-slate-600 transition-colors"${_scopeId}>`);
            if (unref(unreadNotificationsCount) > 0) {
              _push2(`<span class="absolute -top-1 -left-1 bg-zinc-700 size-5 rounded-full text-white flex items-center justify-center text-xs font-medium"${_scopeId}>${ssrInterpolate(unref(unreadNotificationsCount))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:bell",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-slate-800 hover:bg-slate-600 transition-colors"
              }, [
                unref(unreadNotificationsCount) > 0 ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "absolute -top-1 -left-1 bg-zinc-700 size-5 rounded-full text-white flex items-center justify-center text-xs font-medium"
                }, toDisplayString(unref(unreadNotificationsCount)), 1)) : createCommentVNode("", true),
                createVNode(_component_Icon, {
                  name: "heroicons:bell",
                  class: "text-xl"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="relative w-10 h-10 rounded-full flex items-center justify-center text-white bg-slate-800 hover:bg-slate-600 transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:moon",
        class: "text-xl"
      }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm font-semibold capitalize leading-3 cursor-pointer"${_scopeId2}>${ssrInterpolate(unref(fullName))}</p><img src="https://picsum.photos/200" alt="avatar" width="40" height="40" class="w-10 h-10 object-cover rounded-full"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm font-semibold capitalize leading-3 cursor-pointer" }, toDisplayString(unref(fullName)), 1),
                    createVNode("img", {
                      src: "https://picsum.photos/200",
                      alt: "avatar",
                      width: "40",
                      height: "40",
                      class: "w-10 h-10 object-cover rounded-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDropdownMenuContent, { class: "w-56" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`My Account`);
                      } else {
                        return [
                          createTextVNode("My Account")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/profile",
                                class: "w-full flex items-center justify-between gap-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<small${_scopeId5}>Profile</small>`);
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuShortcut, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Icon, {
                                            name: "heroicons:user",
                                            class: "text-xl"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Icon, {
                                              name: "heroicons:user",
                                              class: "text-xl"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("small", null, "Profile"),
                                      createVNode(_component_UiDropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "heroicons:user",
                                            class: "text-xl"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, {
                                  to: "/profile",
                                  class: "w-full flex items-center justify-between gap-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("small", null, "Profile"),
                                    createVNode(_component_UiDropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "heroicons:user",
                                          class: "text-xl"
                                        })
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/settings",
                                class: "w-full flex items-center justify-between gap-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<small${_scopeId5}>Settings</small>`);
                                    _push6(ssrRenderComponent(_component_UiDropdownMenuShortcut, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Icon, {
                                            name: "heroicons:cog-6-tooth",
                                            class: "text-xl"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Icon, {
                                              name: "heroicons:cog-6-tooth",
                                              class: "text-xl"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("small", null, "Settings"),
                                      createVNode(_component_UiDropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "heroicons:cog-6-tooth",
                                            class: "text-xl"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_NuxtLink, {
                                  to: "/settings",
                                  class: "w-full flex items-center justify-between gap-2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("small", null, "Settings"),
                                    createVNode(_component_UiDropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "heroicons:cog-6-tooth",
                                          class: "text-xl"
                                        })
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDropdownMenuItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/profile",
                                class: "w-full flex items-center justify-between gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("small", null, "Profile"),
                                  createVNode(_component_UiDropdownMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "heroicons:user",
                                        class: "text-xl"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/settings",
                                class: "w-full flex items-center justify-between gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("small", null, "Settings"),
                                  createVNode(_component_UiDropdownMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "heroicons:cog-6-tooth",
                                        class: "text-xl"
                                      })
                                    ]),
                                    _: 1
                                  })
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
                  _push3(ssrRenderComponent(_component_UiDropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDropdownMenuItem, { variant: "destructive" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button type="button" class="w-full flex items-center justify-between gap-2 cursor-pointer"${_scopeId3}><small${_scopeId3}>Log out</small>`);
                        _push4(ssrRenderComponent(_component_UiDropdownMenuShortcut, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u21E7\u2318Q`);
                            } else {
                              return [
                                createTextVNode("\u21E7\u2318Q")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            type: "button",
                            onClick: handleLogout,
                            class: "w-full flex items-center justify-between gap-2 cursor-pointer"
                          }, [
                            createVNode("small", null, "Log out"),
                            createVNode(_component_UiDropdownMenuShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("\u21E7\u2318Q")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode("My Account")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuSeparator),
                    createVNode(_component_UiDropdownMenuGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDropdownMenuItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/profile",
                              class: "w-full flex items-center justify-between gap-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("small", null, "Profile"),
                                createVNode(_component_UiDropdownMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "heroicons:user",
                                      class: "text-xl"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDropdownMenuItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/settings",
                              class: "w-full flex items-center justify-between gap-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("small", null, "Settings"),
                                createVNode(_component_UiDropdownMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "heroicons:cog-6-tooth",
                                      class: "text-xl"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuSeparator),
                    createVNode(_component_UiDropdownMenuItem, { variant: "destructive" }, {
                      default: withCtx(() => [
                        createVNode("button", {
                          type: "button",
                          onClick: handleLogout,
                          class: "w-full flex items-center justify-between gap-2 cursor-pointer"
                        }, [
                          createVNode("small", null, "Log out"),
                          createVNode(_component_UiDropdownMenuShortcut, null, {
                            default: withCtx(() => [
                              createTextVNode("\u21E7\u2318Q")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-sm font-semibold capitalize leading-3 cursor-pointer" }, toDisplayString(unref(fullName)), 1),
                  createVNode("img", {
                    src: "https://picsum.photos/200",
                    alt: "avatar",
                    width: "40",
                    height: "40",
                    class: "w-10 h-10 object-cover rounded-full"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDropdownMenuContent, { class: "w-56" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                    default: withCtx(() => [
                      createTextVNode("My Account")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDropdownMenuSeparator),
                  createVNode(_component_UiDropdownMenuGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDropdownMenuItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/profile",
                            class: "w-full flex items-center justify-between gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("small", null, "Profile"),
                              createVNode(_component_UiDropdownMenuShortcut, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "heroicons:user",
                                    class: "text-xl"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/settings",
                            class: "w-full flex items-center justify-between gap-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("small", null, "Settings"),
                              createVNode(_component_UiDropdownMenuShortcut, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "heroicons:cog-6-tooth",
                                    class: "text-xl"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDropdownMenuSeparator),
                  createVNode(_component_UiDropdownMenuItem, { variant: "destructive" }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        type: "button",
                        onClick: handleLogout,
                        class: "w-full flex items-center justify-between gap-2 cursor-pointer"
                      }, [
                        createVNode("small", null, "Log out"),
                        createVNode(_component_UiDropdownMenuShortcut, null, {
                          default: withCtx(() => [
                            createTextVNode("\u21E7\u2318Q")
                          ]),
                          _: 1
                        })
                      ])
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
      }, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dashboard/header/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useNotifications();
    const isOpenSidebar = shallowRef(false);
    watch(isOpenSidebar, (newValue) => {
      if (newValue) {
        (void 0).body.classList.add("overflow-hidden");
      } else {
        (void 0).body.classList.remove("overflow-hidden");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDashboardSidebar = _sfc_main$l;
      const _component_UiDashboardHeader = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative flex items-start min-h-screen justify-start divide-x bg-fixed bg-cover bg-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiDashboardSidebar, {
        "is-open-sidebar": unref(isOpenSidebar),
        onToggleSidebar: () => isOpenSidebar.value = !unref(isOpenSidebar)
      }, null, _parent));
      _push(`<section class="flex flex-col flex-1 h-full isolate bg-[#F2F4F7]">`);
      _push(ssrRenderComponent(_component_UiDashboardHeader, {
        "is-open-sidebar": unref(isOpenSidebar),
        onToggleSidebar: () => isOpenSidebar.value = !unref(isOpenSidebar)
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-CIs3U5cT.mjs.map
