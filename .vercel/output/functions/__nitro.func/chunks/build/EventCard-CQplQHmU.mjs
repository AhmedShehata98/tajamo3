import { _ as __nuxt_component_0 } from './nuxt-link-DzJA0YMK.mjs';
import __nuxt_component_0$1 from './index-Ne2zYMiW.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { e as eventTypeBackgroundFactory, d as dateFormatter } from './utils-DGl0UyFg.mjs';
import { L as LocationType } from './events-B_eYa6LR.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col justify-start glass-card p-0 group overflow-hidden hover:scale-102 hover:translate-y-[-5px] transition-all duration-300" }, _attrs))}><figure class="relative h-[225px]"><img${ssrRenderAttr("src", _ctx.event.image)} alt="Event Image" width="678" height="320" loading="lazy" class="w-full h-full object-cover rounded-t-sm"><div class="group-hover:opacity-100 opacity-0 absolute inset-0 flex items-center justify-center p-8 bg-[#53389E6a] backdrop-blur-sm transition-all duration-300">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/dashboard/events/${_ctx.event.id}`,
        class: "flex flex-col text-sm px-4.5 py-2 font-bold text-black flex items-center gap-2 p-4 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm font-medium text-gray-100"${_scopeId}>View Details</p><span class="flex items-center justify-center bg-[#E9D7FE] backdrop-blur-sm rounded-full min-w-12 min-h-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-right",
              class: "text-xl"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("p", { class: "text-sm font-medium text-gray-100" }, "View Details"),
              createVNode("span", { class: "flex items-center justify-center bg-[#E9D7FE] backdrop-blur-sm rounded-full min-w-12 min-h-12" }, [
                createVNode(_component_Icon, {
                  name: "mdi:arrow-right",
                  class: "text-xl"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></figure><div class="flex items-start flex-col p-4 justify-start gap-2 mt-1.5"><span class="${ssrRenderClass([unref(eventTypeBackgroundFactory)(_ctx.event.event_type), "text-sm bg-event-color-food rounded-md p-1 px-2.5 mt-2"])}"><p class="text-sm font-semibold capitalize">${ssrInterpolate(_ctx.event.event_type)}</p></span><h3 class="text-2xl text-text-primary font-medium">${ssrInterpolate(_ctx.event.name)}</h3><p class="h-10 text-text-secondary overflow-hidden text-sm hover:overflow-visible hover:h-auto transition-[height] duration-300">${ssrInterpolate(_ctx.event.description)}</p><ul class="grid grid-cols-1 text-text-primary gap-1.5 mt-auto pt-3"><li class="text-sm flex items-center justify-start align-start gap-2 overflow-hidden font-medium"><span class="flex items-center justify-center self-start bg-[#E9D7FE] rounded-full min-w-7 min-h-7">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:location",
        class: "text-xl text-[#6941C6]"
      }, null, _parent));
      _push(`</span><p class="text-inherit text-start">${ssrInterpolate(_ctx.event.location_type === unref(LocationType).ONLINE ? "Online" : _ctx.event.location)}</p></li><li class="text-sm flex items-center justify-start gap-2 overflow-hidden font-medium"><span class="flex items-center justify-center bg-[#E9D7FE] rounded-full min-w-7 min-h-7">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:calendar",
        class: "text-xl text-[#6941C6]"
      }, null, _parent));
      _push(`</span><p class="text-inherit text-start">${ssrInterpolate(unref(dateFormatter)(_ctx.event.start_at))}</p></li><li class="text-sm flex items-center justify-start gap-2 overflow-hidden mt-1.5 font-medium"><span class="flex items-center justify-center bg-[#E9D7FE] rounded-full min-w-7 min-h-7">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:user",
        class: "text-xl text-[#6941C6]"
      }, null, _parent));
      _push(`</span><p class="text-inherit text-start">${ssrInterpolate(_ctx.event.capacity)} Attendees</p></li></ul></div></li>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/EventCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=EventCard-CQplQHmU.mjs.map
