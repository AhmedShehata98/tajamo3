import { _ as _sfc_main$a, a as _sfc_main$9, b as _sfc_main$7, c as _sfc_main$6, d as _sfc_main$5, e as _sfc_main$4 } from './index-CRifrVqn.mjs';
import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, renderSlot, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as useRoute } from './server.mjs';
import './Button-BZ-geaOE.mjs';
import 'reka-ui';
import './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import '@vueuse/core';
import 'lucide-vue-next';
import './nuxt-link-DzJA0YMK.mjs';
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
import './query-keys-DZb0vUsn.mjs';
import './utils-DGl0UyFg.mjs';
import './events-B_eYa6LR.mjs';
import './use-event-details-state-CMhwkDV8.mjs';
import './use-user-GArBKlyM.mjs';
import './ssr-Df1vlv0O.mjs';
import './fetch-DNROhRzN.mjs';
import './asyncData-CmGrW10P.mjs';
import './use-api-mutation-BYE5XpXf.mjs';
import './v3-DxuvcMCg.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import 'vue-sonner';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AttendeesItem",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    console.log(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-start gap-3 glass-card" }, _attrs))}><figure class="flex items-center justify-center">`);
      if (_ctx.data.user.avatar) {
        _push(`<img class="w-12 h-12 rounded-full object-cover"${ssrRenderAttr("src", _ctx.data.user.avatar)}>`);
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "ix:user-profile-filled",
          class: "text-5xl rounded-full object-cover"
        }, null, _parent));
      }
      _push(`</figure><div class="flex flex-col items-start justify-center"><h4 class="text-base font-semibold capitalize">${ssrInterpolate(`${_ctx.data.user.first_name} ${_ctx.data.user.last_name}`)}</h4><p class="text-sm text-muted-foreground">${ssrInterpolate(_ctx.data.user.phone)}</p></div><p class="text-accent capitalize text-sm bg-secondary px-3 py-1 rounded-full ms-auto"> you </p></li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/attendees-modal/AttendeesItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AttendeesModal",
  __ssrInlineRender: true,
  props: {
    registrations: {}
  },
  setup(__props) {
    computed(() => useRoute().params.eventId);
    const attendeesRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$a;
      const _component_UiDialogTrigger = _sfc_main$9;
      const _component_UiDialogContent = _sfc_main$7;
      const _component_UiDialogHeader = _sfc_main$6;
      const _component_UiDialogTitle = _sfc_main$5;
      const _component_UiDialogDescription = _sfc_main$4;
      const _component_EventsAttendeesModalAttendeesItem = _sfc_main$1;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        ref_key: "attendeesRef",
        ref: attendeesRef
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "trigger")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "lg:!max-w-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`all attendees`);
                            } else {
                              return [
                                createTextVNode("all attendees")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Here you can see all the attendees of this event. If you want to show your tickets, you can do it in the <strong${_scopeId4}>Orders</strong> section. `);
                            } else {
                              return [
                                createTextVNode(" Here you can see all the attendees of this event. If you want to show your tickets, you can do it in the "),
                                createVNode("strong", null, "Orders"),
                                createTextVNode(" section. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("all attendees")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Here you can see all the attendees of this event. If you want to show your tickets, you can do it in the "),
                              createVNode("strong", null, "Orders"),
                              createTextVNode(" section. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<ul class="grid grid-cols-1 items-center justify-center gap-x-4 py-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.registrations, (item) => {
                    _push3(ssrRenderComponent(_component_EventsAttendeesModalAttendeesItem, {
                      key: item,
                      data: item
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("all attendees")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Here you can see all the attendees of this event. If you want to show your tickets, you can do it in the "),
                            createVNode("strong", null, "Orders"),
                            createTextVNode(" section. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("ul", { class: "grid grid-cols-1 items-center justify-center gap-x-4 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.registrations, (item) => {
                        return openBlock(), createBlock(_component_EventsAttendeesModalAttendeesItem, {
                          key: item,
                          data: item
                        }, null, 8, ["data"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { class: "w-full" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "trigger")
                ]),
                _: 3
              }),
              createVNode(_component_UiDialogContent, { class: "lg:!max-w-lg" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("all attendees")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Here you can see all the attendees of this event. If you want to show your tickets, you can do it in the "),
                          createVNode("strong", null, "Orders"),
                          createTextVNode(" section. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("ul", { class: "grid grid-cols-1 items-center justify-center gap-x-4 py-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.registrations, (item) => {
                      return openBlock(), createBlock(_component_EventsAttendeesModalAttendeesItem, {
                        key: item,
                        data: item
                      }, null, 8, ["data"]);
                    }), 128))
                  ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/attendees-modal/AttendeesModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AttendeesModal-BBVAVNf5.mjs.map
