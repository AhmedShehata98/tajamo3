import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormGroup",
  __ssrInlineRender: true,
  props: {
    label: {},
    errorMessage: {},
    errorCondition: { type: Boolean },
    isRequired: { type: Boolean },
    direction: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { "{\r\n        flexdirection": "direction" },
        class: "w-full flex flex-col gap-1"
      }, _attrs))}><label${ssrRenderAttr("for", _ctx.$attrs.id)} class="capitalize text-[#374151] font-medium">${ssrInterpolate(_ctx.label)} `);
      if (_ctx.isRequired) {
        _push(`<span class="text-red-600 text-lg">*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (_ctx.errorCondition) {
        _push(`<small class="text-red-600 font-semibold mt-2">${ssrInterpolate(_ctx.errorMessage)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FormGroup-K5NL2dvp.mjs.map
