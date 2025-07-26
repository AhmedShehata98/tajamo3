import { _ as __nuxt_component_0 } from './nuxt-link-DzJA0YMK.mjs';
import __nuxt_component_0$1 from './index-Ne2zYMiW.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { u as useAsyncData } from './asyncData-CmGrW10P.mjs';
import { a as useRequestFetch } from './ssr-Df1vlv0O.mjs';
import { a as useHead } from './v3-DxuvcMCg.mjs';
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
import './server.mjs';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import 'vue-sonner';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderCard",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    function orderStatusStyles(status) {
      switch (status) {
        case "completed":
          return "bg-green-300 text-green-800";
        case "pending":
          return "bg-yellow-300 text-yellow-800";
        case "cancelled":
          return "text-red-300 text-red-800";
        default:
          return "bg-gray-300 text-gray-800";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: `/dashboard/orders/${_ctx.order.id}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-start glass-card mb-2"${_scopeId}><div class="flex flex-col items-center justify-center shrink-0 me-5 bg-gray-100 p-3 rounded-md"${_scopeId}><h2 class="text-sm font-semibold text-text-primary uppercase"${_scopeId}>Order</h2><code${_scopeId}>#${ssrInterpolate(_ctx.order.id)}</code></div><div class="flex flex-col items-start justify-center"${_scopeId}><button type="button" class="${ssrRenderClass([orderStatusStyles(_ctx.order.status), "px-4 py-1.5 mb-2 rounded-md"])}"${_scopeId}><p class="text-xs text-text-secondary font-semibold uppercase"${_scopeId}>${ssrInterpolate(_ctx.order.status)}</p></button><h4 class="text-xl capitalize font-medium"${_scopeId}>${ssrInterpolate(_ctx.order.event_id.name)}</h4><p class="text-text-secondary text-sm mb-2"${_scopeId}>${ssrInterpolate(_ctx.order.event_id.description)}</p><span class="flex items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lets-icons:ticket-alt",
              class: "inline-block text-xl mr-1 text-text-secondary"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-text-primary capitalize"${_scopeId}>${ssrInterpolate(_ctx.order.ticket_type_id.name)}</p></span><span class="flex items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-heroicons:currency-dollar-solid",
              class: "inline-block text-xl mr-1 text-text-secondary"
            }, null, _parent2, _scopeId));
            _push2(`<code class="text-text-primary capitalize"${_scopeId}>${ssrInterpolate(_ctx.order.final_amount.toLocaleString("en-EG", {
              style: "currency",
              currency: "EGP"
            }))}</code></span><span class="flex items-center justify-center gap-2 text-sm capitalize"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:calendar-line-duotone",
              class: "inline-block text-xl mr-1 text-text-secondary"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-text-primary capitalize"${_scopeId}> placed on ${ssrInterpolate(new Date(_ctx.order.created_at).toLocaleString(void 0, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }))}</p></span></div><button type="button" class="absolute right-2 size-7 text-text-primary hover:text-text-accent"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-heroicons:chevron-right-solid",
              class: "inline-block text-xl ms-auto text-text-secondary"
            }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-start glass-card mb-2" }, [
                createVNode("div", { class: "flex flex-col items-center justify-center shrink-0 me-5 bg-gray-100 p-3 rounded-md" }, [
                  createVNode("h2", { class: "text-sm font-semibold text-text-primary uppercase" }, "Order"),
                  createVNode("code", null, "#" + toDisplayString(_ctx.order.id), 1)
                ]),
                createVNode("div", { class: "flex flex-col items-start justify-center" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["px-4 py-1.5 mb-2 rounded-md", orderStatusStyles(_ctx.order.status)]
                  }, [
                    createVNode("p", { class: "text-xs text-text-secondary font-semibold uppercase" }, toDisplayString(_ctx.order.status), 1)
                  ], 2),
                  createVNode("h4", { class: "text-xl capitalize font-medium" }, toDisplayString(_ctx.order.event_id.name), 1),
                  createVNode("p", { class: "text-text-secondary text-sm mb-2" }, toDisplayString(_ctx.order.event_id.description), 1),
                  createVNode("span", { class: "flex items-center justify-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "lets-icons:ticket-alt",
                      class: "inline-block text-xl mr-1 text-text-secondary"
                    }),
                    createVNode("p", { class: "text-text-primary capitalize" }, toDisplayString(_ctx.order.ticket_type_id.name), 1)
                  ]),
                  createVNode("span", { class: "flex items-center justify-center gap-2" }, [
                    createVNode(_component_Icon, {
                      name: "i-heroicons:currency-dollar-solid",
                      class: "inline-block text-xl mr-1 text-text-secondary"
                    }),
                    createVNode("code", { class: "text-text-primary capitalize" }, toDisplayString(_ctx.order.final_amount.toLocaleString("en-EG", {
                      style: "currency",
                      currency: "EGP"
                    })), 1)
                  ]),
                  createVNode("span", { class: "flex items-center justify-center gap-2 text-sm capitalize" }, [
                    createVNode(_component_Icon, {
                      name: "solar:calendar-line-duotone",
                      class: "inline-block text-xl mr-1 text-text-secondary"
                    }),
                    createVNode("p", { class: "text-text-primary capitalize" }, " placed on " + toDisplayString(new Date(_ctx.order.created_at).toLocaleString(void 0, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })), 1)
                  ])
                ]),
                createVNode("button", {
                  type: "button",
                  class: "absolute right-2 size-7 text-text-primary hover:text-text-accent"
                }, [
                  createVNode(_component_Icon, {
                    name: "i-heroicons:chevron-right-solid",
                    class: "inline-block text-xl ms-auto text-text-secondary"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/orders/OrderCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: ordersList } = useAsyncData(
      QUERY_KEYS.ORDERS_LIST,
      () => useRequestFetch()("/api/orders"),
      "$J96mAXKd1x"
    );
    useHead({
      title: "Orders",
      meta: [
        {
          name: "description",
          content: "Manage your orders efficiently with our dashboard."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_OrdersOrderCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full min-h-screen p-5" }, _attrs))}><div class="flex items-start justify-between flex-col mb-4"><h1 class="text-2xl font-bold text-text-primary">Orders</h1><p class="text-text-secondary"> Manage your orders efficiently with our dashboard. </p></div>`);
      if (((_a = unref(ordersList)) == null ? void 0 : _a.data) && unref(ordersList).data.length >= 1) {
        _push(`<ul><!--[-->`);
        ssrRenderList((_b = unref(ordersList)) == null ? void 0 : _b.data, (order) => {
          _push(ssrRenderComponent(_component_OrdersOrderCard, {
            key: order.id,
            order
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CchEwdHX.mjs.map
