import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './v3-DxuvcMCg.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './asyncData-CmGrW10P.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cards = [
      {
        id: 1,
        icon: "mdi:users",
        title: "Team Management",
        description: "Create and manage multiple teams"
      },
      {
        id: 2,
        icon: "mdi:calendar",
        title: "Advanced Events",
        description: "Organize complex event series"
      },
      {
        id: 3,
        icon: "mdi:cash",
        title: "Billing Management",
        description: "Centralized billing and invoicing"
      },
      {
        id: 4,
        icon: "hugeicons:global",
        title: "Global Access",
        description: "Manage events across locations"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex-col flex items-start justify-start p-4" }, _attrs))}><div class="w-full flex flex-col gap-4 bg-background rounded-md p-4"><div class="w-full flex flex-col gap-3"><span class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "hugeicons:building-06",
        class: "text-3xl text-primary"
      }, null, _parent));
      _push(`<h3 class="text-xl font-bold">Create Your Company</h3></span><small> Transform your individual account to a company account and unlock powerful features for team management and event organization. </small></div><ul class="w-full grid grid-cols-2 flex-wrap gap-5"><!--[-->`);
      ssrRenderList(cards, (card) => {
        _push(`<li class="w-full flex items-center justify-center flex-col gap-2 bg-card rounded-md p-4"><span class="w-fit flex items-center justify-center gap-2 bg-primary/20 rounded-full backdrop-blur-md p-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: card.icon,
          class: "text-3xl text-primary"
        }, null, _parent));
        _push(`</span><h3 class="text-lg font-bold">${ssrInterpolate(card.title)}</h3><p class="text-sm text-text-secondary">${ssrInterpolate(card.description)}</p></li>`);
      });
      _push(`<!--]--></ul><div class="w-full flex items-center justify-end gap-3 mt-5"><button type="button" class="w-fit flex items-center justify-center gap-2 bg-primary text-white rounded-md px-4 py-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "hugeicons:building-06",
        class: "text-2xl"
      }, null, _parent));
      _push(`<span class="text-sm font-bold">Create Company</span></button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/company/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-2VFQDjPC.mjs.map
