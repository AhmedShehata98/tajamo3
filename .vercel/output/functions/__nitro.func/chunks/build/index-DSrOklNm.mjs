import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { _ as _sfc_main$1 } from './Button-BZ-geaOE.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DzJA0YMK.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import '@iconify/utils/lib/css/icon';
import './v3-DxuvcMCg.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'vue-sonner';
import 'reka-ui';
import './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Icon = __nuxt_component_0;
      const _component_UiButton = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center h-screen" }, _attrs))}>`);
      if (unref(route).query && ((_b = (_a = unref(route).query.success) == null ? void 0 : _a.toString()) == null ? void 0 : _b.toLowerCase()) === "true") {
        _push(`<div class="max-w-full md:max-w-sm flex flex-col items-center justify-center gap-2 glass-card p-6"><span class="flex items-center justify-center rounded-full bg-emerald-200/50 p-12 shadow-md backdrop-blur-lg">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "solar:bill-check-bold",
          class: "text-8xl text-emerald-700 shadow-lg"
        }, null, _parent));
        _push(`</span><div><h3 class="text-2xl text-text-primary font-bold text-center mb-3"> The payment was made successfully! </h3><p class="text-sm text-secondary-text text-center mb-5"> You can close this window now. Your payment has been processed successfully. </p><ul><li class="flex gap-3 items-center justify-start mb-1"><strong>Process ID :</strong> ${ssrInterpolate(unref(route).query.id)}</li><li class="flex gap-3 items-center justify-start mb-1"><strong>Order ID :</strong> ${ssrInterpolate(unref(route).query.order)}</li><li class="flex gap-3 items-center justify-start mb-1"><strong>Card No :</strong> ${ssrInterpolate((_d = (_c = unref(route).query["source_data.pan"]) == null ? void 0 : _c.toString()) == null ? void 0 : _d.padStart(14, "*"))}</li><li class="flex gap-3 items-center justify-start mb-1"><strong>Card Bank :</strong> ${ssrInterpolate(unref(route).query["source_data.sub_type"])}</li><li class="flex gap-3 items-center justify-start mb-1"><strong>Amount :</strong> ${ssrInterpolate((parseFloat(unref(route).query.amount_cents) / 100).toLocaleString(
          "en-EG",
          {
            style: "currency",
            currency: unref(route).query.currency || "EGP"
          }
        ))}</li><li class="flex gap-3 items-center justify-start mb-1"><strong>Order processing :</strong> ${ssrInterpolate(unref(route).query.pending || "N/A")}</li><li class="flex gap-3 items-center justify-start mb-1"><strong>Order Date :</strong> ${ssrInterpolate(unref(route).query.created_at ? new Date(unref(route).query.created_at).toLocaleString(
          "en-EG",
          {
            dateStyle: "full",
            timeStyle: "short"
          }
        ) : "N/A")}</li></ul><div class="w-full flex items-center justify-center pt-5">`);
        _push(ssrRenderComponent(_component_UiButton, { type: "button" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard/events" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Go to Events `);
                  } else {
                    return [
                      createTextVNode(" Go to Events ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/dashboard/events" }, {
                  default: withCtx(() => [
                    createTextVNode(" Go to Events ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(route).query && ((_f = (_e = unref(route).query.success) == null ? void 0 : _e.toString()) == null ? void 0 : _f.toLowerCase()) !== "true") {
        _push(`<div class="max-w-full md:max-w-sm flex flex-col items-center justify-center gap-2 glass-card p-6"><span class="flex items-center justify-center rounded-full bg-red-200/50 p-12 shadow-md backdrop-blur-lg">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "solar:bill-cross-bold",
          class: "text-8xl text-red-700 shadow-lg"
        }, null, _parent));
        _push(`</span><div><h3 class="text-2xl text-text-primary font-bold text-center mb-3"> The payment failed </h3><p class="text-sm text-secondary-text text-center mb-5"> Please confirm the card or wallet. and try again later. </p><div class="w-full flex items-center justify-center pt-5">`);
        _push(ssrRenderComponent(_component_UiButton, { type: "button" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard/events" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Go to Events `);
                  } else {
                    return [
                      createTextVNode(" Go to Events ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/dashboard/events" }, {
                  default: withCtx(() => [
                    createTextVNode(" Go to Events ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/payments/redirect/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DSrOklNm.mjs.map
