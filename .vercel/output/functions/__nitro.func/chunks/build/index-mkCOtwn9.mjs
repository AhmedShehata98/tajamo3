import { _ as __nuxt_component_0 } from './nuxt-link-DzJA0YMK.mjs';
import __nuxt_component_0$1 from './index-Ne2zYMiW.mjs';
import { _ as _sfc_main$1 } from './Switch-BR0kEJ5p.mjs';
import { _ as _sfc_main$2 } from './EventCard-CQplQHmU.mjs';
import { defineComponent, ref, shallowRef, mergeProps, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useDebounce } from '@vueuse/core';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { E as EventType } from './events-B_eYa6LR.mjs';
import { u as useAsyncData } from './asyncData-CmGrW10P.mjs';
import { b as useRequestHeaders } from './ssr-Df1vlv0O.mjs';
import { u as useSeoMeta } from './v3-DxuvcMCg.mjs';
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
import 'reka-ui';
import './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import './utils-DGl0UyFg.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const myEvents = ref(false);
    const searchQuery = shallowRef("");
    const eventType = shallowRef("all");
    const debouncedSearchQuery = useDebounce(searchQuery, 600);
    const {
      data: events2,
      error,
      status
    } = useAsyncData(
      QUERY_KEYS.EVENTS,
      () => $fetch("/api/events", {
        headers: {
          ...useRequestHeaders(["cookie"])
        },
        query: {
          search: debouncedSearchQuery.value,
          eventType: eventType.value,
          myEvents: myEvents.value ? 1 : 0
        }
      }),
      {
        watch: [debouncedSearchQuery, eventType, myEvents]
      }
    );
    useSeoMeta({
      title: "Events",
      description: "Manage all your events in one place."
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiSwitch = _sfc_main$1;
      const _component_EventsEventCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex-col flex items-start justify-start p-4" }, _attrs))}><div class="w-full flex items-center justify-between"><span><h1 class="text-2xl font-bold text-text-primary">Events</h1><p class="text-sm text-text-secondary"> Manage all your events in one place. </p></span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboard/events/create",
        class: "bg-accent px-4 py-2 rounded-sm flex items-center gap-2 backdrop-blur-md hover:bg-primary/80 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:plus",
              class: "text-xl text-white"
            }, null, _parent2, _scopeId));
            _push2(`<h5 class="text-white font-medium text-sm"${_scopeId}>Create Event</h5>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:plus",
                class: "text-xl text-white"
              }),
              createVNode("h5", { class: "text-white font-medium text-sm" }, "Create Event")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full flex items-center gap-5 justify-between max-md:flex-col max-md:gap-2 mt-5"><span class="w-full flex bg-input p-1 rounded-sm items-center justify-start"><label for="search" class="text-sm text-muted-foreground px-1 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:search",
        class: "text-2xl leading-3"
      }, null, _parent));
      _push(`</label><input type="text" id="search"${ssrRenderAttr("value", unref(searchQuery))} class="bg-inherit px-2.5 w-full" placeholder="search in events ..."></span><div class="flex items-center gap-3 max-md:w-full"><select class="max-md:w-full input p-1.5 rounded-sm text-sm text-muted-foreground min-w-48"><option value="" selected disabled>Select event type</option><!--[-->`);
      ssrRenderList(unref(EventType), (type) => {
        _push(`<option${ssrRenderAttr("value", type)}${ssrIncludeBooleanAttr(Array.isArray(unref(eventType)) ? ssrLooseContain(unref(eventType), type) : ssrLooseEqual(unref(eventType), type)) ? " selected" : ""}>${ssrInterpolate(type)}</option>`);
      });
      _push(`<!--]--><option value="all"${ssrIncludeBooleanAttr(Array.isArray(unref(eventType)) ? ssrLooseContain(unref(eventType), "all") : ssrLooseEqual(unref(eventType), "all")) ? " selected" : ""}>All</option></select><span class="flex items-center gap-2 min-w-28"><small class="text-sm text-muted-foreground leading-4">My Events</small>`);
      _push(ssrRenderComponent(_component_UiSwitch, {
        modelValue: unref(myEvents),
        "onUpdate:modelValue": ($event) => isRef(myEvents) ? myEvents.value = $event : null
      }, null, _parent));
      _push(`</span></div></div><ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-8">`);
      if (unref(status) === "pending") {
        _push(`<!--[-->`);
        ssrRenderList(4, (n) => {
          _push(`<div class="bg-card flex flex-col gap-1 rounded-md overflow-hidden"><span class="h-48 w-full inline-block bg-zinc-400 animate-pulse"></span><div class="flex flex-col w-full p-4 gap-2 mt-6"><span class="h-5 w-20 inline-block bg-zinc-400 rounded-md animate-pulse"></span><span class="h-7 w-10/12 mt-3 inline-block bg-zinc-400 rounded-md animate-pulse"></span><span class="h-5 w-44 mt-3 inline-block bg-zinc-400 rounded-md animate-pulse"></span><span class="h-5 w-34 inline-block bg-zinc-400 rounded-md animate-pulse"></span><span class="h-5 w-36 inline-block bg-zinc-400 rounded-md animate-pulse"></span><span class="h-5 w-30 inline-block bg-zinc-400 rounded-md animate-pulse"></span></div><div class="h-9 w-40 ms-auto me-4 mb-4 inline-block bg-zinc-400 rounded-md animate-pulse"></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList((_a = unref(events2)) == null ? void 0 : _a.data, (event, index) => {
          _push(ssrRenderComponent(_component_EventsEventCard, {
            key: event.id,
            event,
            style: {
              animationDelay: `${index * 100}ms`
            }
          }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</ul>`);
      if (((_c = (_b = unref(events2)) == null ? void 0 : _b.data) == null ? void 0 : _c.length) === 0) {
        _push(`<div class="w-full flex items-center justify-center mt-10"><p class="text-lg text-muted-foreground">No events found</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-mkCOtwn9.mjs.map
