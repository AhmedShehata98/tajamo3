import __nuxt_component_0 from './index-Ne2zYMiW.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { c as cn } from './virtual_nuxt_E__my-projects_event-management-app_.nuxt_shadcn-nuxt_utils-H80jjgLf.mjs';
import { _ as _sfc_main$8 } from './Button-BZ-geaOE.mjs';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { u as useUser } from './use-user-GArBKlyM.mjs';
import { u as useFetch } from './fetch-DNROhRzN.mjs';
import { b as useHeadSafe } from './v3-DxuvcMCg.mjs';
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
import 'clsx';
import 'tailwind-merge';
import 'reka-ui';
import 'class-variance-authority';
import './ssr-Df1vlv0O.mjs';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "table-container",
        class: "relative w-full overflow-auto"
      }, _attrs))}><table data-slot="table" class="${ssrRenderClass(unref(cn)("w-full caption-bottom text-sm", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</table></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/Table.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TableCaption",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<caption${ssrRenderAttrs(mergeProps({
        "data-slot": "table-caption",
        class: unref(cn)("text-muted-foreground mt-4 text-sm", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</caption>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCaption.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TableHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<thead${ssrRenderAttrs(mergeProps({
        "data-slot": "table-header",
        class: unref(cn)("[&_tr]:border-b", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</thead>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        "data-slot": "table-row",
        class: unref(cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableRow.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TableHead",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        "data-slot": "table-head",
        class: unref(cn)("text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableHead.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tbody${ssrRenderAttrs(mergeProps({
        "data-slot": "table-body",
        class: unref(cn)("[&_tr:last-child]:border-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableBody.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        "data-slot": "table-cell",
        class: unref(cn)(
          "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableCell.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function OrderStateStyles(state) {
  switch (state) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "completed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    case "refunded":
      return "bg-slate-200 text-slate-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const searchQuery = ref("");
    const eventFilter = ref("");
    const stateFilter = ref("");
    const dateFilter = ref("");
    const { userStore } = useUser();
    const { data: ticketsList, error } = useFetch(`/api/tickets/user/${(_a = userStore.value) == null ? void 0 : _a.id}`, {
      key: QUERY_KEYS.TICKETS,
      method: "GET",
      watch: [() => {
        var _a2;
        return (_a2 = userStore.value) == null ? void 0 : _a2.id;
      }],
      immediate: Boolean((_b = userStore.value) == null ? void 0 : _b.id)
    }, "$FEP7flHuoe");
    const headers = [
      { key: "id", label: "Ticket ID" },
      { key: "eventImage", label: "image" },
      { key: "eventName", label: "Event Name" },
      { key: "eventDateStart", label: "Event Start" },
      { key: "eventDateEnd", label: "Event End" },
      { key: "state", label: "State" },
      { key: "code", label: "Code" },
      { key: "totalAmount", label: "Total Amount" },
      { key: "ownerName", label: "Owner Name" },
      { key: "purchaseDate", label: "Purchase Date" },
      { key: "actions", label: "Actions" }
    ];
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-EG", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
    };
    const priceFormat = (price) => {
      return new Intl.NumberFormat("en-EG", {
        style: "currency",
        currency: "EGP"
      }).format(price);
    };
    useHeadSafe({
      title: "Tickets - Dashboard",
      meta: [
        {
          name: "description",
          content: "Manage your tickets and view details in the dashboard."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_UiTable = _sfc_main$7;
      const _component_UiTableCaption = _sfc_main$6;
      const _component_UiTableHeader = _sfc_main$5;
      const _component_UiTableRow = _sfc_main$4;
      const _component_UiTableHead = _sfc_main$3;
      const _component_UiTableBody = _sfc_main$2;
      const _component_UiTableCell = _sfc_main$1;
      const _component_UiButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full max-w-full flex-col flex items-start justify-start p-4 space-y-6" }, _attrs))}><div class="w-full flex justify-between items-center"><h1 class="text-2xl font-bold text-text-primary">Tickets</h1><button class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:plus",
        class: "text-2xl"
      }, null, _parent));
      _push(` Add New Ticket </button></div><div class="w-full max-w-md"><div class="relative"><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search by event name or ID..." class="w-full px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"><span class="absolute right-3 top-2.5 text-gray-400">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:search",
        class: "text-2xl"
      }, null, _parent));
      _push(`</span></div></div><div class="w-full flex gap-4 flex-wrap"><select class="px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"><option value=""${ssrIncludeBooleanAttr(Array.isArray(eventFilter.value) ? ssrLooseContain(eventFilter.value, "") : ssrLooseEqual(eventFilter.value, "")) ? " selected" : ""}>All Events</option><!--[-->`);
      ssrRenderList(_ctx.uniqueEvents, (event) => {
        _push(`<option${ssrRenderAttr("value", event)}${ssrIncludeBooleanAttr(Array.isArray(eventFilter.value) ? ssrLooseContain(eventFilter.value, event) : ssrLooseEqual(eventFilter.value, event)) ? " selected" : ""}>${ssrInterpolate(event)}</option>`);
      });
      _push(`<!--]--></select><select class="px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"><option value=""${ssrIncludeBooleanAttr(Array.isArray(stateFilter.value) ? ssrLooseContain(stateFilter.value, "") : ssrLooseEqual(stateFilter.value, "")) ? " selected" : ""}>All States</option><option value="active"${ssrIncludeBooleanAttr(Array.isArray(stateFilter.value) ? ssrLooseContain(stateFilter.value, "active") : ssrLooseEqual(stateFilter.value, "active")) ? " selected" : ""}>Active</option><option value="used"${ssrIncludeBooleanAttr(Array.isArray(stateFilter.value) ? ssrLooseContain(stateFilter.value, "used") : ssrLooseEqual(stateFilter.value, "used")) ? " selected" : ""}>Used</option><option value="cancelled"${ssrIncludeBooleanAttr(Array.isArray(stateFilter.value) ? ssrLooseContain(stateFilter.value, "cancelled") : ssrLooseEqual(stateFilter.value, "cancelled")) ? " selected" : ""}>Cancelled</option></select><input${ssrRenderAttr("value", dateFilter.value)} type="date" class="px-4 py-2 bg-card border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"></div><div class="w-full flex overflow-hidden bg-card rounded-md p-2"><div class="max-w-[calc(100vw-4rem)] lg:max-w-[calc(100vw-8rem)] xl:max-w-[calc(100vw-16rem)]">`);
      _push(ssrRenderComponent(_component_UiTable, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTableCaption, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tickets `);
                } else {
                  return [
                    createTextVNode(" Tickets ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(headers, (header) => {
                          _push4(ssrRenderComponent(_component_UiTableHead, {
                            key: header.key,
                            class: "text-left"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(header.label)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(header.label), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(headers, (header) => {
                            return createVNode(_component_UiTableHead, {
                              key: header.key,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(header.label), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(headers, (header) => {
                          return createVNode(_component_UiTableHead, {
                            key: header.key,
                            class: "text-left"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(header.label), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiTableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(ticketsList) && unref(ticketsList).data.length >= 1) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(ticketsList).data, (ticket2) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: ticket2.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(`#${ticket2.id}`)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(`#${ticket2.id}`), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img class="inline-block rounded-md object-cover"${ssrRenderAttr("src", ticket2.order_id.event_id.image)} alt="event-img"${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      class: "inline-block rounded-md object-cover",
                                      src: ticket2.order_id.event_id.image,
                                      alt: "event-img"
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<strong class="inline-block text-sm font-semibold min-w-[10rem] max-w-[13rem] text-wrap"${_scopeId4}>${ssrInterpolate(ticket2.order_id.event_id.name)}</strong>`);
                                } else {
                                  return [
                                    createVNode("strong", { class: "inline-block text-sm font-semibold min-w-[10rem] max-w-[13rem] text-wrap" }, toDisplayString(ticket2.order_id.event_id.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(formatDate(ticket2.order_id.event_id.start_at))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.start_at)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(formatDate(ticket2.order_id.event_id.end_at))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.end_at)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span class="${ssrRenderClass([("OrderStateStyles" in _ctx ? _ctx.OrderStateStyles : unref(OrderStateStyles))(ticket2.order_id.status), "px-2 py-1 shadow-sm uppercase rounded text-xs font-semibold"])}"${_scopeId4}>${ssrInterpolate(ticket2.order_id.status)}</span>`);
                                } else {
                                  return [
                                    createVNode("span", {
                                      class: [("OrderStateStyles" in _ctx ? _ctx.OrderStateStyles : unref(OrderStateStyles))(ticket2.order_id.status), "px-2 py-1 shadow-sm uppercase rounded text-xs font-semibold"]
                                    }, toDisplayString(ticket2.order_id.status), 3)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<code${_scopeId4}>${ssrInterpolate(ticket2.code)}</code>`);
                                } else {
                                  return [
                                    createVNode("code", null, toDisplayString(ticket2.code), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<code${_scopeId4}>${ssrInterpolate(priceFormat(ticket2.order_id.final_amount || 0))}</code>`);
                                } else {
                                  return [
                                    createVNode("code", null, toDisplayString(priceFormat(ticket2.order_id.final_amount || 0)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                var _a2, _b2, _c, _d;
                                if (_push5) {
                                  _push5(`${ssrInterpolate(`${(_a2 = ticket2.user_id) == null ? void 0 : _a2.first_name} ${(_b2 = ticket2.user_id) == null ? void 0 : _b2.last_name}`)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(`${(_c = ticket2.user_id) == null ? void 0 : _c.first_name} ${(_d = ticket2.user_id) == null ? void 0 : _d.last_name}`), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(formatDate(ticket2.purchased_at))}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(formatDate(ticket2.purchased_at)), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiButton, { variant: "outline" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`View`);
                                      } else {
                                        return [
                                          createTextVNode("View")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UiButton, { variant: "outline" }, {
                                      default: withCtx(() => [
                                        createTextVNode("View")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(`#${ticket2.id}`), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "inline-block rounded-md object-cover",
                                    src: ticket2.order_id.event_id.image,
                                    alt: "event-img"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("strong", { class: "inline-block text-sm font-semibold min-w-[10rem] max-w-[13rem] text-wrap" }, toDisplayString(ticket2.order_id.event_id.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.start_at)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.end_at)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("span", {
                                    class: [("OrderStateStyles" in _ctx ? _ctx.OrderStateStyles : unref(OrderStateStyles))(ticket2.order_id.status), "px-2 py-1 shadow-sm uppercase rounded text-xs font-semibold"]
                                  }, toDisplayString(ticket2.order_id.status), 3)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("code", null, toDisplayString(ticket2.code), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("code", null, toDisplayString(priceFormat(ticket2.order_id.final_amount || 0)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => {
                                  var _a2, _b2;
                                  return [
                                    createTextVNode(toDisplayString(`${(_a2 = ticket2.user_id) == null ? void 0 : _a2.first_name} ${(_b2 = ticket2.user_id) == null ? void 0 : _b2.last_name}`), 1)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatDate(ticket2.purchased_at)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiButton, { variant: "outline" }, {
                                    default: withCtx(() => [
                                      createTextVNode("View")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center text-gray-400 py-8 font-bold" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` No tickets found matching your criteria. `);
                              } else {
                                return [
                                  createTextVNode(" No tickets found matching your criteria. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableCell, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableCell),
                            createVNode(_component_UiTableCell),
                            createVNode(_component_UiTableCell),
                            createVNode(_component_UiTableCell, { class: "text-center text-gray-400 py-8 font-bold" }, {
                              default: withCtx(() => [
                                createTextVNode(" No tickets found matching your criteria. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableCell),
                            createVNode(_component_UiTableCell),
                            createVNode(_component_UiTableCell)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(ticketsList) && unref(ticketsList).data.length >= 1 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(ticketsList).data, (ticket2) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: ticket2.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(`#${ticket2.id}`), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "inline-block rounded-md object-cover",
                                src: ticket2.order_id.event_id.image,
                                alt: "event-img"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("strong", { class: "inline-block text-sm font-semibold min-w-[10rem] max-w-[13rem] text-wrap" }, toDisplayString(ticket2.order_id.event_id.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.start_at)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.end_at)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: [("OrderStateStyles" in _ctx ? _ctx.OrderStateStyles : unref(OrderStateStyles))(ticket2.order_id.status), "px-2 py-1 shadow-sm uppercase rounded text-xs font-semibold"]
                              }, toDisplayString(ticket2.order_id.status), 3)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("code", null, toDisplayString(ticket2.code), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("code", null, toDisplayString(priceFormat(ticket2.order_id.final_amount || 0)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => {
                              var _a2, _b2;
                              return [
                                createTextVNode(toDisplayString(`${(_a2 = ticket2.user_id) == null ? void 0 : _a2.first_name} ${(_b2 = ticket2.user_id) == null ? void 0 : _b2.last_name}`), 1)
                              ];
                            }),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatDate(ticket2.purchased_at)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode("View")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell),
                        createVNode(_component_UiTableCell),
                        createVNode(_component_UiTableCell),
                        createVNode(_component_UiTableCell, { class: "text-center text-gray-400 py-8 font-bold" }, {
                          default: withCtx(() => [
                            createTextVNode(" No tickets found matching your criteria. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableCell),
                        createVNode(_component_UiTableCell),
                        createVNode(_component_UiTableCell)
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTableCaption, null, {
                default: withCtx(() => [
                  createTextVNode(" Tickets ")
                ]),
                _: 1
              }),
              createVNode(_component_UiTableHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTableRow, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(headers, (header) => {
                        return createVNode(_component_UiTableHead, {
                          key: header.key,
                          class: "text-left"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(header.label), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiTableBody, null, {
                default: withCtx(() => [
                  unref(ticketsList) && unref(ticketsList).data.length >= 1 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(ticketsList).data, (ticket2) => {
                    return openBlock(), createBlock(_component_UiTableRow, {
                      key: ticket2.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(`#${ticket2.id}`), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "inline-block rounded-md object-cover",
                              src: ticket2.order_id.event_id.image,
                              alt: "event-img"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode("strong", { class: "inline-block text-sm font-semibold min-w-[10rem] max-w-[13rem] text-wrap" }, toDisplayString(ticket2.order_id.event_id.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.start_at)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(formatDate(ticket2.order_id.event_id.end_at)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: [("OrderStateStyles" in _ctx ? _ctx.OrderStateStyles : unref(OrderStateStyles))(ticket2.order_id.status), "px-2 py-1 shadow-sm uppercase rounded text-xs font-semibold"]
                            }, toDisplayString(ticket2.order_id.status), 3)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode("code", null, toDisplayString(ticket2.code), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode("code", null, toDisplayString(priceFormat(ticket2.order_id.final_amount || 0)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => {
                            var _a2, _b2;
                            return [
                              createTextVNode(toDisplayString(`${(_a2 = ticket2.user_id) == null ? void 0 : _a2.first_name} ${(_b2 = ticket2.user_id) == null ? void 0 : _b2.last_name}`), 1)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(formatDate(ticket2.purchased_at)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiTableCell, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiButton, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode("View")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)) : (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableCell),
                      createVNode(_component_UiTableCell),
                      createVNode(_component_UiTableCell),
                      createVNode(_component_UiTableCell, { class: "text-center text-gray-400 py-8 font-bold" }, {
                        default: withCtx(() => [
                          createTextVNode(" No tickets found matching your criteria. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableCell),
                      createVNode(_component_UiTableCell),
                      createVNode(_component_UiTableCell)
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/tickets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BxiV_oaP.mjs.map
