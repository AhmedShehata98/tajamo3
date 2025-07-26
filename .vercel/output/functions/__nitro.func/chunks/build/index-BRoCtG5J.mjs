import { _ as __nuxt_component_0 } from './nuxt-link-DzJA0YMK.mjs';
import __nuxt_component_0$1 from './index-Ne2zYMiW.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import './asyncData-CmGrW10P.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeamCard",
  __ssrInlineRender: true,
  props: {
    team: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-start justify-start gap-2 bg-card border-border rounded-sm shadow-sm p-4" }, _attrs))} data-v-2f68a97c><h3 class="font-semibold text-lg text-text-primary" data-v-2f68a97c>${ssrInterpolate(_ctx.team.name)}</h3><small class="text-sm text-text-secondary" data-v-2f68a97c>${ssrInterpolate(_ctx.team.description)}</small><ul class="team-members" data-v-2f68a97c><!--[-->`);
      ssrRenderList(_ctx.team.members, (member) => {
        _push(`<li data-v-2f68a97c><p class="text-white" data-v-2f68a97c>${ssrInterpolate(member.name.split(" ")[0][0])}</p><p class="text-white" data-v-2f68a97c>${ssrInterpolate(member.name.split(" ")[1][0])}</p></li>`);
      });
      _push(`<!--]--></ul><div class="w-full grid grid-cols-2 gap-2 mt-4" data-v-2f68a97c><span class="flex items-center justify-center gap-2" data-v-2f68a97c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:calendar",
        class: "text-primary text-2xl"
      }, null, _parent));
      _push(`<small class="text-text-primary font-medium capitalize" data-v-2f68a97c>${ssrInterpolate(_ctx.team.events.length)}</small><p class="text-text-primary font-medium capitalize" data-v-2f68a97c>events</p></span><span class="flex items-center justify-center gap-2" data-v-2f68a97c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:account-group",
        class: "text-primary text-2xl"
      }, null, _parent));
      _push(`<small class="text-text-primary font-medium capitalize" data-v-2f68a97c>${ssrInterpolate(_ctx.team.members.length)}</small><p class="text-text-primary font-medium capitalize" data-v-2f68a97c>members</p></span></div><div class="w-full grid grid-cols-2 gap-2" data-v-2f68a97c><button type="button" class="btn bg-primary/20 text-primary" data-v-2f68a97c><p class="text-primary text-sm" data-v-2f68a97c>events</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:arrow-right",
        class: "text-primary"
      }, null, _parent));
      _push(`</button><button type="button" class="btn btn-primary" data-v-2f68a97c><p class="text-white text-sm" data-v-2f68a97c>members</p>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:chevron-right",
        class: "text-white"
      }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/teams/TeamCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f68a97c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const teams = [
      {
        id: 1,
        name: "Marketing Team",
        description: "Responsible for brand strategy, digital marketing campaigns, and market research",
        members: [
          {
            id: 1,
            name: "Sarah Johnson"
          },
          {
            id: 2,
            name: "Michael Chen"
          },
          {
            id: 3,
            name: "Emily Rodriguez"
          }
        ],
        events: [
          {
            id: 1,
            name: "Q2 Marketing Strategy Session"
          },
          {
            id: 2,
            name: "Social Media Workshop"
          }
        ]
      },
      {
        id: 2,
        name: "Engineering Team",
        description: "Develops and maintains core software infrastructure and applications",
        members: [
          {
            id: 4,
            name: "David Kim"
          },
          {
            id: 5,
            name: "Jessica Patel"
          }
        ],
        events: [
          {
            id: 3,
            name: "Code Review Meeting"
          },
          {
            id: 4,
            name: "Sprint Planning"
          }
        ]
      },
      {
        id: 3,
        name: "Design Team",
        description: "Creates user interfaces and experiences for web and mobile applications",
        members: [
          {
            id: 6,
            name: "Alex Thompson"
          },
          {
            id: 7,
            name: "Maria Garcia"
          },
          {
            id: 8,
            name: "James Wilson"
          }
        ],
        events: [
          {
            id: 5,
            name: "UI/UX Workshop"
          },
          {
            id: 6,
            name: "Design System Review"
          }
        ]
      },
      {
        id: 4,
        name: "Sales Team",
        description: "Manages client relationships and drives business growth through sales initiatives",
        members: [
          {
            id: 9,
            name: "Robert Taylor"
          },
          {
            id: 10,
            name: "Lisa Anderson"
          }
        ],
        events: [
          {
            id: 7,
            name: "Sales Training"
          },
          {
            id: 8,
            name: "Client Presentation"
          }
        ]
      }
    ];
    useSeoMeta({
      title: "Teams",
      description: "Manage your teams and their members."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_TeamsTeamCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 w-full flex-col items-start justify-start" }, _attrs))}><div class="w-full flex items-start justify-between gap-3"><span class="w-full flex flex-col items-start justify-center gap-3"><h3 class="font-semibold text-2xl text-start text-text-primary"> Teams </h3><p class="text-text-secondary">Manage your teams and their members.</p></span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard/teams/create",
        class: "btn btn-primary min-2-48"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white text-sm"${_scopeId}>Create Team</p>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:plus",
              class: "text-white"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("p", { class: "text-white text-sm" }, "Create Team"),
              createVNode(_component_Icon, {
                name: "mdi:plus",
                class: "text-white"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5"><!--[-->`);
      ssrRenderList(teams, (team) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_TeamsTeamCard, { team }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/teams/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BRoCtG5J.mjs.map
