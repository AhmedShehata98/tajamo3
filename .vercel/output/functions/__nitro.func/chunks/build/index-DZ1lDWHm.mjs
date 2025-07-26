import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { E as publicAssetsURL } from '../_/nitro.mjs';
import { u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useEventDetailsState } from './use-event-details-state-CMhwkDV8.mjs';
import { a as useHead } from './v3-DxuvcMCg.mjs';
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
import 'vue-router';
import 'vue-sonner';
import 'jsonwebtoken';
import '@supabase/supabase-js';
import 'node:events';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import '@iconify/utils/lib/css/icon';
import './asyncData-CmGrW10P.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './ssr-Df1vlv0O.mjs';
import './fetch-DNROhRzN.mjs';

const _imports_0 = publicAssetsURL("/images/fawry.png");
const _imports_1 = publicAssetsURL("/images/credit-card.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoadingCreditCard = ref(false);
    useUser();
    const { eventDetailsState } = useEventDetailsState();
    useHead({
      title: "Payments",
      meta: [
        {
          name: "description",
          content: "Payments page for the dashboard of the user to manage payments"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 p-4" }, _attrs))}><h1 class="text-2xl font-bold text-text-primary">Payments</h1><div class="w-fit max-md:w-full flex items-start justify-start gap-4 p-2 glass-card"><figure><img${ssrRenderAttr("src", (_a = unref(eventDetailsState).event) == null ? void 0 : _a.image)} alt="order-image" class="w-44 h-44 rounded-lg object-cover"></figure><div class="flex flex-col items-start justify-start gap-2 divide-y-2"><span class="py-4"><h4 class="text-lg font-semibold text-text-primary">${ssrInterpolate((_b = unref(eventDetailsState).event) == null ? void 0 : _b.name)}</h4><p class="text-secondary-text max-w-md">${ssrInterpolate((_c = unref(eventDetailsState).event) == null ? void 0 : _c.description)}</p></span><span><h5 class="flex items-center gap-1 capitalize">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "famicons:ticket-sharp",
        class: "text-2xl"
      }, null, _parent));
      _push(` ${ssrInterpolate((_d = unref(eventDetailsState).selectedTicketType) == null ? void 0 : _d.name)}</h5><p class="text-accent font-semibold">${ssrInterpolate((_f = (_e = unref(eventDetailsState).selectedTicketType) == null ? void 0 : _e.price) == null ? void 0 : _f.toLocaleString(
        "en-EG",
        { style: "currency", currency: "EGP" }
      ))}</p></span></div></div><div class="flex flex-col items-center justify-start gap-4 bg-class max-md:p-0 p-4 mt-5 h-[calc(100vh-10rem)]"><ul class="w-4/5 max-md:w-full flex flex-col gap-2 grid grid-cols-1 md:grid-cols-2 gap-4"><li class="max-md:w-full flex flex-col items-center gap-2 glass-card p-6 hover:scale-105 hover:translate-y-[-14px] transition-all duration-300"><h4 class="text-3xl text-center font-bold text-text-primary"> Fawry </h4><p class="text-sm secondary-text"> Fawry is a payment gateway that allows you to accept payments from your customers. </p><figure class="size-48 flex items-center justify-center p-2 mt-4"><img${ssrRenderAttr("src", _imports_0)} alt="Fawry" width="128" height="128" class="rounded-lg w-full"></figure><button type="button" class="btn bg-accent w-fit self-center size-14 aspect-square rounded-full mt-auto mb-4 hover:bg-accent/80">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:arrow-right",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</button></li><li class="flex flex-col items-center gap-2 glass-card p-6 hover:scale-105 hover:translate-y-[-10px] transition-all duration-300"><h4 class="text-3xl text-center font-bold text-text-primary"> Credit Card </h4><p class="text-sm secondary-text"> Credit Card is a payment gateway that allows you to accept payments from your customers. </p><figure class="size-48 flex items-center justify-center p-2 mt-4"><img${ssrRenderAttr("src", _imports_1)} width="128" height="128" alt="Credit Card" class="rounded-lg w-full"></figure><button type="button"${ssrIncludeBooleanAttr(unref(isLoadingCreditCard)) ? " disabled" : ""} class="btn bg-accent w-fit self-center size-14 aspect-square rounded-full mt-auto mb-4 hover:bg-accent/80">`);
      if (!unref(isLoadingCreditCard)) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:arrow-right",
          class: "w-6 h-6"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:loading",
          class: "w-12 h-12 animate-spin"
        }, null, _parent));
      }
      _push(`</button></li></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/payments/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DZ1lDWHm.mjs.map
