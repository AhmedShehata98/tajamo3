import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DzJA0YMK.mjs';
import { _ as _sfc_main$1 } from './EventCard-CQplQHmU.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { u as useFetch } from './fetch-DNROhRzN.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
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
import '@iconify/utils/lib/css/icon';
import './asyncData-CmGrW10P.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './utils-DGl0UyFg.mjs';
import './events-B_eYa6LR.mjs';
import './ssr-Df1vlv0O.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: events2 } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/events", {
      query: {
        limit: 6,
        orderBy: "created_at",
        order: "desc"
      },
      key: QUERY_KEYS.FEATURED_EVENTS
    }, "$wSvT53YUKM")), __temp = await __temp, __restore(), __temp);
    useSeoMeta({
      title: "Dashboard",
      description: "Dashboard",
      ogTitle: "Dashboard",
      ogDescription: "Dashboard",
      ogImage: "https://picsum.photos/681"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_EventsEventCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col" }, _attrs))}><div class="w-full flex items-start justify-start p-4"><ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"><li class="glass-card"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold leading-tight">Total Events</h3><span class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:calendar",
        class: "text-xl text-[#7F56D9]"
      }, null, _parent));
      _push(`</span></div><h2 class="text-3xl font-bold mt-2">156</h2><p class="text-sm secondary-text">+12% from last month</p></li><li class="glass-card"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold leading-tight">Upcoming Events</h3><span class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:calendar-days",
        class: "text-xl text-[#7F56D9]"
      }, null, _parent));
      _push(`</span></div><h2 class="text-3xl font-bold mt-2">38</h2><p class="text-sm secondary-text">Next 30 days</p></li><li class="glass-card"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold leading-tight">Total Attendees</h3><span class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:users",
        class: "text-xl text-[#7F56D9]"
      }, null, _parent));
      _push(`</span></div><h2 class="text-3xl font-bold mt-2">1,234</h2><p class="text-sm secondary-text">+25% from last month</p></li><li class="glass-card"><div class="flex items-center justify-between"><h3 class="text-lg font-semibold leading-tight">Team Members</h3><span class="size-9 flex items-center justify-center bg-[#EAECF0] rounded-full">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:user-group",
        class: "text-xl text-[#7F56D9]"
      }, null, _parent));
      _push(`</span></div><h2 class="text-3xl font-bold mt-2">134</h2><p class="text-sm secondary-text">Active members</p></li></ul></div><div class="w-full flex flex-col gap-4 px-4 py-2"><div class="w-full flex items-center justify-between"><h1 class="text-xl font-semibold">Upcoming Events</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/calender",
        class: "text-accent hover:underline flex items-center gap-2 bg-[#EAECF0] rounded-sm px-3 py-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm font-semibold"${_scopeId}>View all</p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:arrow-right",
              class: "text-base text-gray-700"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-sm font-semibold" }, "View all"),
              createVNode(_component_Icon, {
                name: "heroicons:arrow-right",
                class: "text-base text-gray-700"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="w-full flex flex-col gap-4"><li class="w-full glass-card"><div class="flex items-start justify-between gap-4"><div class="flex items-start gap-4"><div class="flex flex-col items-center"><h3 class="text-lg font-semibold">May</h3><h2 class="text-2xl text-[#6941C6] font-bold">25</h2><p class="text-sm">2023</p></div><div class="flex flex-col"><h3 class="text-lg font-semibold">Annual Tech Conference</h3><div class="flex items-center gap-2 text-sm secondary-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:clock",
        class: "text-lg"
      }, null, _parent));
      _push(`<span>9:00 AM</span></div><div class="flex items-center gap-2 text-sm secondary-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:map-pin",
        class: "text-lg"
      }, null, _parent));
      _push(`<span>Cairo International Convention Center</span></div></div></div><button class="px-4 py-2 text-[#6941C6] text-sm bg-[#F4EBFF] font-semibold hover:bg-[F4EBFF] hover:text-[#B692F6] rounded-sm"> View Details </button></div></li><li class="w-full glass-card"><div class="flex items-start justify-between gap-4"><div class="flex items-start gap-4"><div class="flex flex-col items-center"><h3 class="text-lg font-semibold">May</h3><h2 class="text-3xl text-[#6941C6] font-bold">20</h2><p class="text-sm">2023</p></div><div class="flex flex-col"><h3 class="text-lg font-semibold">Team Strategy Meeting</h3><div class="flex items-center gap-2 text-sm secondary-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:clock",
        class: "text-lg"
      }, null, _parent));
      _push(`<span>2:00 PM</span></div><div class="flex items-center gap-2 text-sm secondary-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:map-pin",
        class: "text-lg"
      }, null, _parent));
      _push(`<span>Main Office - Meeting Room A</span></div></div></div><button class="px-4 py-2 text-[#6941C6] text-sm bg-[#F4EBFF] font-semibold hover:bg-[F4EBFF] hover:text-[#B692F6] rounded-sm"> View Details </button></div></li><li class="w-full glass-card"><div class="flex items-start justify-between gap-4"><div class="flex items-start gap-4"><div class="flex flex-col items-center"><h3 class="text-lg font-semibold">June</h3><h2 class="text-3xl text-[#6941C6] font-bold">5</h2><p class="text-sm">2023</p></div><div class="flex flex-col"><h3 class="text-lg font-semibold">Product Design Workshop</h3><div class="flex items-center gap-2 text-sm secondary-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:clock",
        class: "text-lg"
      }, null, _parent));
      _push(`<span>10:00 AM</span></div><div class="flex items-center gap-2 text-sm secondary-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:map-pin",
        class: "text-lg"
      }, null, _parent));
      _push(`<span>Main Office - Meeting Room A</span></div></div></div><button class="px-4 py-2 text-[#6941C6] text-sm bg-[#F4EBFF] font-semibold hover:bg-[F4EBFF] hover:text-[#B692F6] rounded-sm"> View Details </button></div></li></ul></div><div class="w-full flex flex-col gap-4 px-4 py-2 mt-5"><div class="flex items-center justify-between"><h1 class="text-xl font-semibold">Featured Events</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/events",
        class: "text-accent hover:underline flex items-center gap-2 bg-[#EAECF0] rounded-sm px-3 py-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm font-semibold"${_scopeId}>View all</p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:arrow-right",
              class: "text-base text-gray-700"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-sm font-semibold" }, "View all"),
              createVNode(_component_Icon, {
                name: "heroicons:arrow-right",
                class: "text-base text-gray-700"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if ((_a = unref(events2)) == null ? void 0 : _a.data) {
        _push(`<ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList((_b = unref(events2)) == null ? void 0 : _b.data, (event) => {
          _push(ssrRenderComponent(_component_EventsEventCard, {
            key: event == null ? void 0 : event.id,
            event
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C6UcQwqN.mjs.map
