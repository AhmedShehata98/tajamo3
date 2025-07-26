import { defineComponent, inject, ref, watchEffect, onUnmounted, computed, createElementBlock, openBlock, normalizeStyle, readonly, unref, onMounted, watch } from 'vue';

const v = Symbol(), R = ref(false), C = ref(false), B = ref(false), T = ref(0);
let k = null;
const te = () => {
  const e = (void 0).createElement("script");
  return e.src = "https://accounts.google.com/gsi/client", e.async = true, e.defer = true, e;
}, ne = () => {
  C.value = true, k = te(), (void 0).head.appendChild(k), k.onload = () => {
    C.value = false, R.value = true;
  }, k.onerror = () => {
    C.value = false, B.value = true;
  };
};
watch(
  () => T.value,
  (e, o) => {
    e > 0 && !R.value && !C.value && ne();
  }
);
function x() {
  return onMounted(() => {
    T.value++;
  }), onUnmounted(() => {
    T.value--;
  }), {
    scriptLoaded: readonly(R),
    scriptLoadError: readonly(B)
  };
}
const oe = /* @__PURE__ */ defineComponent({
  __name: "GoogleSignInButton",
  props: {
    oneTap: { type: Boolean },
    autoSelect: { type: Boolean },
    loginUri: {},
    cancelOnTapOutside: { type: Boolean },
    promptParentId: {},
    nonce: {},
    context: {},
    stateCookieDomain: {},
    uxMode: {},
    allowedParentOrigin: {},
    itpSupport: { type: Boolean },
    type: {},
    theme: {},
    size: {},
    text: {},
    shape: {},
    logoAlignment: {},
    width: {},
    locale: {}
  },
  emits: ["success", "error", "intermediateIframeCloseCallback", "nativeCallback", "promptMomentNotification"],
  setup(e, { emit: o }) {
    const n = { large: 40, medium: 32, small: 20 }, t = e, i = o, l = inject(v), r = ref(null), { scriptLoaded: s } = x();
    watchEffect(() => {
      var a, u, f, p;
      s.value && ((a = (void 0).google) == null || a.accounts.id.initialize({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        client_id: l,
        callback: (g) => {
          if (!g.credential) {
            i("error");
            return;
          }
          i("success", g);
        },
        allowed_parent_origin: t.allowedParentOrigin,
        auto_select: t.autoSelect,
        cancel_on_tap_outside: t.cancelOnTapOutside,
        context: t.context,
        intermediate_iframe_close_callback: () => {
          i("intermediateIframeCloseCallback");
        },
        itp_support: t.itpSupport,
        login_uri: t.loginUri,
        native_callback: (g) => {
          i("nativeCallback", g);
        },
        nonce: t.nonce,
        prompt_parent_id: t.promptParentId,
        state_cookie_domain: t.stateCookieDomain,
        ux_mode: t.uxMode,
        use_fedcm_for_prompt: true
      }), (f = (void 0).google) == null || f.accounts.id.renderButton(r.value, {
        type: t.type,
        theme: t.theme,
        size: t.size,
        text: t.text,
        shape: t.shape,
        logo_alignment: t.logoAlignment,
        width: (u = t.width) == null ? void 0 : u.toString(),
        locale: t.locale
      }), t.oneTap && ((p = (void 0).google) == null || p.accounts.id.prompt((g) => {
        i("promptMomentNotification", g);
      })));
    }), onUnmounted(() => {
      var a;
      t.oneTap && ((a = (void 0).google) == null || a.accounts.id.cancel());
    });
    const d = computed(() => n[t.size || "large"]);
    return (a, u) => (openBlock(), createElementBlock("div", {
      ref_key: "targetElement",
      ref: r,
      style: normalizeStyle({ display: "inline-flex", height: d.value })
    }, null, 4));
  }
});
function le(e, o, ...n) {
  var t;
  return ((t = (void 0).google) == null ? void 0 : t.accounts.oauth2.hasGrantedAllScopes(
    e,
    o,
    ...n
  )) || false;
}
function re(e, o, ...n) {
  var t;
  return ((t = (void 0).google) == null ? void 0 : t.accounts.oauth2.hasGrantedAnyScope(
    e,
    o,
    ...n
  )) || false;
}
function se(e, o) {
  var n;
  (n = (void 0).google) == null || n.accounts.oauth2.revoke(e, () => {
    o == null || o();
  });
}
function ie(e) {
  const o = "https://accounts.google.com/o/oauth2/v2/auth", n = new URLSearchParams({
    gsiwebsdk: "3",
    client_id: e.client_id,
    scope: e.scope,
    include_granted_scopes: "true",
    access_type: "offline",
    response_type: "code",
    prompt: "consent"
  });
  return e.hint && n.append("hint", e.hint), e.hosted_domain && n.append("hosted_domain", e.hosted_domain), e.redirect_uri === void 0 ? n.append("redirect_uri", (void 0).origin) : n.append("redirect_uri", e.redirect_uri), e.select_account === void 0 ? n.append("select_account", "false") : n.append("select_account", `${e.select_account}`), e.enable_serial_consent === void 0 ? n.append("enable_serial_consent", "false") : n.append(
    "enable_serial_consent",
    `${e.enable_serial_consent}`
  ), e.state && n.append("state", e.state), `${o}?${n.toString()}`;
}
function de(e = {}) {
  const { scope: o = "", onError: n, onSuccess: t, ...i } = e, { scriptLoaded: l } = x(), r = inject(v), s = ref(false), d = ref(null);
  let a;
  return watchEffect(() => {
    var g;
    if (s.value = false, !l.value) return;
    const u = unref(o), p = `openid email profile ${Array.isArray(u) ? u.join(" ") : u}`;
    d.value = ie({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      client_id: r,
      scope: p,
      ...i
    }), a = (g = (void 0).google) == null ? void 0 : g.accounts.oauth2.initCodeClient({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      client_id: r,
      scope: p,
      callback: (h) => {
        if (h.error) return n == null ? void 0 : n(h);
        t == null || t(h);
      },
      ...i
    }), s.value = true;
  }), {
    isReady: readonly(s),
    login: () => a == null ? void 0 : a.requestCode(),
    codeRequestRedirectUrl: readonly(d)
  };
}
function ue(e) {
  const {
    disableAutomaticPrompt: o = false,
    onSuccess: n,
    onError: t,
    onPromptMomentNotification: i,
    onNativeCallback: l,
    onIntermediateIframeCloseCallback: r,
    autoSelect: s,
    loginUri: d,
    cancelOnTapOutside: a,
    promptParentId: u,
    nonce: f,
    context: p,
    stateCookieDomain: g,
    allowedParentOrigin: h,
    itpSupport: L
  } = e || {}, { scriptLoaded: P } = x(), $ = inject(v), y = ref(false), q = () => {
    var b;
    return y.value && ((b = (void 0).google) == null ? void 0 : b.accounts.id.prompt(
      (A) => i == null ? void 0 : i(A)
    ));
  };
  return watchEffect((b) => {
    var U, G;
    if (y.value = false, !P.value) return;
    const A = !unref(o), E = unref(s), j = unref(d), V = unref(u), D = unref(f), M = unref(p), H = unref(g), J = unref(h), K = unref(L), N = unref(a);
    (U = (void 0).google) == null || U.accounts.id.initialize({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      client_id: $,
      callback: (_) => {
        if (!_.credential) {
          t == null || t();
          return;
        }
        n == null || n(_);
      },
      native_callback: (_) => {
        l == null || l(_);
      },
      intermediate_iframe_close_callback: () => {
        r == null || r();
      },
      auto_select: E,
      allowed_parent_origin: J,
      context: M,
      itp_support: K,
      login_uri: j,
      nonce: D,
      prompt_parent_id: V,
      state_cookie_domain: H,
      cancel_on_tap_outside: N,
      use_fedcm_for_prompt: true
    }), y.value = true, A && ((G = (void 0).google) == null || G.accounts.id.prompt(
      (_) => i == null ? void 0 : i(_)
    )), b(() => {
      var _;
      (_ = (void 0).google) == null || _.accounts.id.cancel();
    });
  }), { isReady: readonly(y), login: q };
}
function pe(e = {}) {
  const { scope: o = "", onError: n, onSuccess: t, ...i } = e, { scriptLoaded: l } = x(), r = inject(v), s = ref(false);
  let d;
  return watchEffect(() => {
    var f;
    if (s.value = false, !l.value) return;
    const a = unref(o), u = Array.isArray(a) ? a.join(" ") : a;
    d = (f = (void 0).google) == null ? void 0 : f.accounts.oauth2.initTokenClient({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      client_id: r,
      scope: `openid email profile ${u}`,
      callback: (p) => {
        if (p.error) return n == null ? void 0 : n(p);
        t == null || t(p);
      },
      ...i
    }), s.value = true;
  }), {
    isReady: readonly(s),
    login: (a) => d == null ? void 0 : d.requestAccessToken(a)
  };
}
function ge(e, o) {
  var n;
  (n = (void 0).google) == null || n.accounts.id.revoke(e, (t) => {
    o == null || o(t);
  });
}
function _e(e) {
  const n = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), t = decodeURIComponent(
    (void 0).atob(n).split("").map((l) => `%${("00" + l.charCodeAt(0).toString(16)).slice(-2)}`).join("")
  ), i = JSON.parse(t);
  return {
    email: i.email,
    email_verified: i.email_verified,
    hd: i.hd,
    family_name: i.family_name,
    given_name: i.given_name,
    name: i.name,
    picture: i.picture,
    id: i.sub,
    iat: i.iat,
    exp: i.exp
  };
}
const ae = "GoogleSignInPlugin", O = (e) => `[${ae}]: ${e}`, me = {
  install(e, o) {
    if (!o)
      throw new Error(
        O("initialize plugin by passing an options object")
      );
    if (!o.clientId || o.clientId && o.clientId.trim().length === 0)
      throw new Error(O("clientId is required to initialize"));
    e.provide(v, o.clientId), e.component("GoogleSignInButton", oe);
  }
};

export { oe as GoogleSignInButton, ae as PLUGIN_NAME, ie as buildCodeRequestRedirectUrl, _e as decodeCredential, me as default, le as hasGrantedAllScopes, re as hasGrantedAnyScopes, ge as idRevoke, se as revokeAccessToken, de as useCodeClient, x as useGsiScript, ue as useOneTap, pe as useTokenClient };
//# sourceMappingURL=index.es-CUhaQ1bm.mjs.map
