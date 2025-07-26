import { _ as _sfc_main$2 } from './Button-BZ-geaOE.mjs';
import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DzJA0YMK.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useQRCode } from '@vueuse/integrations/useQRCode';
import { L as LocationType } from './events-B_eYa6LR.mjs';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { u as useAsyncData } from './asyncData-CmGrW10P.mjs';
import { a as useRoute } from './server.mjs';
import { a as useRequestFetch } from './ssr-Df1vlv0O.mjs';
import { u as useFetch } from './fetch-DNROhRzN.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
import 'reka-ui';
import './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TicketCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const qrcode = useQRCode(props.data.ticketCode);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "--component-height": "15rem" },
        class: "flex items-center justify-start w-fit max-h-[14rem]"
      }, _attrs))}><div class="relative flex flex-col items-center justify-center w-full max-w-(--component-height) h-(--component-height) p-3 bg-neutral-300 p-7 gap-3 border-e-4 border-zinc-500 border-dashed"><img${ssrRenderAttr("src", unref(qrcode))} alt="ticket-qr-code" class="w-full h-full"><span class="absolute -top-5 -right-5 rounded-full size-10 bg-background"></span><span class="absolute -bottom-5 -right-5 rounded-full size-10 bg-background"></span></div><div class="relative -z-[1] p-6 flex gap-4 flex-1 w-full h-full max-h-(--component-height) bg-neutral-200"><div><div class="text-xl font-semibold"><span class="w-full flex items-center justify-between"><strong class="text-accent text-base text-medium">Ticket No</strong><p class="text-text-secondary text-base font-medium"> #${ssrInterpolate(_ctx.data.ticketId)}</p></span><p class="text-text-primary text-lg font-semibold">${ssrInterpolate(_ctx.data.eventName)}</p></div><ul class="w-full mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 items-center justify-start">`);
      if (_ctx.data.eventLocationType === unref(LocationType).OFFLINE) {
        _push(`<li class="w-full flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:sharp-location-on",
          class: "text-3xl text-accent shrink-0"
        }, null, _parent));
        _push(`<span class="flex flex-col gap-0 max-w-full truncate"><p class="inline-block text-sm font-semibold leading-5 max-w-full truncate">${ssrInterpolate(_ctx.data.eventLocation)}</p><p class="text-text-secondary text-sm font-medium capitalize max-w-full truncate overflow-hidden">${ssrInterpolate(_ctx.data.eventLocationType)} location </p></span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.eventLocationType === unref(LocationType).ONLINE) {
        _push(`<li class="w-full flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ic:sharp-location-on",
          class: "text-3xl text-accent shrink-0"
        }, null, _parent));
        _push(`<span class="flex flex-col gap-0 max-w-full truncate">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          external: true,
          href: _ctx.data.eventLocation,
          class: "inline-block text-sm capitalize font-semibold leading-5 underline max-w-full truncate"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` go event link `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-open-in-new",
                class: "inline-block text-text-secondary text-base"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" go event link "),
                createVNode(_component_Icon, {
                  name: "ic:round-open-in-new",
                  class: "inline-block text-text-secondary text-base"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="text-text-secondary text-sm font-medium capitalize max-w-full truncate overflow-hidden"> location </p></span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="w-full flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "iconoir:plug-type-l",
        class: "text-3xl text-accent"
      }, null, _parent));
      _push(`<span class="flex flex-col gap-0"><p class="text-base font-semibold leading-5">${ssrInterpolate(_ctx.data.eventType)}</p><p class="text-text-secondary text-sm font-medium capitalize"> event type </p></span></li><li class="w-full flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "cuida:calendar-outline",
        class: "text-3xl text-accent"
      }, null, _parent));
      _push(`<span class="flex flex-col gap-0"><p class="text-base font-semibold leading-5">${ssrInterpolate(Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(new Date(_ctx.data.eventStartDate)))}</p><p class="text-text-secondary text-sm font-medium capitalize"> start date </p></span></li><li class="w-full flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "cuida:calendar-outline",
        class: "text-3xl text-accent"
      }, null, _parent));
      _push(`<span class="flex flex-col gap-0"><p class="text-base font-semibold leading-5">${ssrInterpolate(Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }).format(new Date(_ctx.data.eventEndDate)))}</p><p class="text-text-secondary text-sm font-medium capitalize"> end date </p></span></li><li class="w-full flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols-light:location-chip",
        class: "text-3xl text-accent"
      }, null, _parent));
      _push(`<span class="flex flex-col gap-0"><p class="text-base font-semibold leading-5">${ssrInterpolate(_ctx.data.eventLocationType === unref(LocationType).ONLINE ? "Online" : "In-site")}</p><p class="text-text-secondary text-sm font-medium capitalize"> lcoation type </p></span></li></ul></div><span class="place-self-end mb-6"><p class="text-base font-semibold capitalize">total</p><p class="text-2xl font-bold text-accent">${ssrInterpolate(_ctx.data.ticketTypePrice <= 0 ? "Free" : "")} ${ssrInterpolate((_a = _ctx.data.ticketTypePrice) == null ? void 0 : _a.toLocaleString("en-EG", {
        style: "currency",
        currency: "EGP"
      }))}</p></span></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tickets/TicketCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[orderId]",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: orderDetails, error } = useAsyncData(
      `${QUERY_KEYS.ORDER_DETAILS}__${useRoute().params.orderId}`,
      () => useRequestFetch()(`/api/orders/${useRoute().params.orderId}`)
    );
    const { data: ticketDetails } = useFetch(
      `/api/tickets/${useRoute().params.orderId}`,
      { key: `${QUERY_KEYS.TICKET_DETAILS}__${useRoute().params.orderId}` },
      "$dJlOWAK4z1"
    );
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
    useSeoMeta({
      title: computed(() => {
        var _a;
        return `Order #${(_a = orderDetails.value) == null ? void 0 : _a.data.id}`;
      }),
      description: "View the details of your order"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
      const _component_UiButton = _sfc_main$2;
      const _component_Icon = __nuxt_component_0;
      const _component_TicketsTicketCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full min-h-screen p-5" }, _attrs))}><div class="flex items-start justify-between mb-4"><span><h1 class="text-2xl font-bold text-text-primary"> Order No: #${ssrInterpolate((_a = unref(orderDetails)) == null ? void 0 : _a.data.id)}</h1><p class="text-text-secondary">View the details of your order.</p></span>`);
      _push(ssrRenderComponent(_component_UiButton, { variant: "destructive" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white capitalize"${_scopeId}>refund</p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-cancel",
              class: "text-2xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-white capitalize" }, "refund"),
              createVNode(_component_Icon, {
                name: "ic:round-cancel",
                class: "text-2xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4"><div class="flex flex-col gap-2 bg-white p-4 rounded-sm border border-border"><h2 class="text-xl font-semibold mb-2">Order Summary</h2><p class="flex items-center justify-start gap-4"><strong>status :</strong><span class="${ssrRenderClass([orderStatusStyles((_b = unref(orderDetails)) == null ? void 0 : _b.data.status), "px-5 py-1 rounded-full text-sm font-semibold uppercase"])}">${ssrInterpolate((_c = unref(orderDetails)) == null ? void 0 : _c.data.status)}</span></p><p class="flex items-center justify-start gap-4"><strong>Event :</strong> ${ssrInterpolate((_d = unref(orderDetails)) == null ? void 0 : _d.data.event.name)}</p><p class="flex items-center justify-start gap-4"><strong>User :</strong> ${ssrInterpolate(`${(_e = unref(orderDetails)) == null ? void 0 : _e.data.user.first_name} ${(_f = unref(orderDetails)) == null ? void 0 : _f.data.user.last_name}`)}</p><p class="flex items-center justify-start gap-4"><strong>Ticket Type :</strong> ${ssrInterpolate((_g = unref(orderDetails)) == null ? void 0 : _g.data.ticket_type.name)}</p>`);
      if ((_h = unref(orderDetails)) == null ? void 0 : _h.data.ticket_type.description) {
        _push(`<p class="flex items-center justify-start gap-4"><strong>Ticket description :</strong> ${ssrInterpolate((_i = unref(orderDetails)) == null ? void 0 : _i.data.ticket_type.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="flex items-center justify-start gap-4"><strong>Total Price :</strong> ${ssrInterpolate((_j = unref(orderDetails)) == null ? void 0 : _j.data.final_amount.toLocaleString("en-EG", {
        style: "currency",
        currency: "EGP"
      }))}</p></div></div><div class="w-full flex flex-col items-start justify-start"><span class="flex items-center justify-between w-full pt-7 pb-4"><h1 class="text-xl text-text-primary font-semibold">Tickets</h1>`);
      _push(ssrRenderComponent(_component_UiButton, { type: "button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white"${_scopeId}>print</p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-print text-white",
              class: "text-2xl text-text-secondary"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-white" }, "print"),
              createVNode(_component_Icon, {
                name: "ic:round-print text-white",
                class: "text-2xl text-text-secondary"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
      if (((_k = unref(ticketDetails)) == null ? void 0 : _k.data) && ((_l = unref(orderDetails)) == null ? void 0 : _l.data)) {
        _push(ssrRenderComponent(_component_TicketsTicketCard, {
          class: "mt-3",
          data: {
            eventName: (_m = unref(orderDetails)) == null ? void 0 : _m.data.event.name,
            eventDescription: (_n = unref(orderDetails)) == null ? void 0 : _n.data.event.description,
            ticketTypeName: (_o = unref(orderDetails)) == null ? void 0 : _o.data.ticket_type.name,
            ticketTypeDescription: (_p = unref(orderDetails)) == null ? void 0 : _p.data.ticket_type.description,
            ticketTypePrice: (_q = unref(orderDetails)) == null ? void 0 : _q.data.final_amount,
            ticketId: (_r = unref(ticketDetails)) == null ? void 0 : _r.data.id,
            ticketCode: (_s = unref(ticketDetails)) == null ? void 0 : _s.data.code,
            eventLocation: (_t = unref(orderDetails)) == null ? void 0 : _t.data.event.location,
            eventLocationType: (_u = unref(orderDetails)) == null ? void 0 : _u.data.event.location_type,
            eventType: (_v = unref(orderDetails)) == null ? void 0 : _v.data.event.event_type,
            eventStartDate: (_w = unref(orderDetails)) == null ? void 0 : _w.data.event.start_at,
            eventEndDate: (_x = unref(orderDetails)) == null ? void 0 : _x.data.event.end_at
          }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/orders/[orderId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_orderId_-CdLM9soB.mjs.map
