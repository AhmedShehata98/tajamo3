import { Q as executeAsync } from '../_/nitro.mjs';
import { Q as QUERY_KEYS } from './query-keys-DZb0vUsn.mjs';
import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { c as useRequestHeader } from './ssr-Df1vlv0O.mjs';
import { u as useFetch } from './fetch-DNROhRzN.mjs';
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
import 'vue';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import 'vue/server-renderer';
import 'vue-sonner';
import './asyncData-CmGrW10P.mjs';

const publicRoutes = ["/", "/register", "/login"];
const auth = defineNuxtRouteMiddleware(async (to, from) => {
  var _a, _b, _c;
  let __temp, __restore;
  const controller = new AbortController();
  try {
    if (publicRoutes.includes(to.path)) {
      return;
    }
    const cookies = useRequestHeader("cookie");
    const token = (_a = cookies == null ? void 0 : cookies.split(";").find((cookie) => cookie.includes("token"))) == null ? void 0 : _a.split("=");
    const { data: verifiedToken, status } = ([__temp, __restore] = executeAsync(() => useFetch("/api/auth/verify-token", {
      key: QUERY_KEYS.VERIFIED_TOKEN,
      signal: controller.signal
    }, "$3Szstf5fnx")), __temp = await __temp, __restore(), __temp);
    if (status.value === "error" || !((_b = verifiedToken.value) == null ? void 0 : _b.data)) {
      controller.abort();
      return navigateTo("/");
    }
    if (((_c = verifiedToken.value) == null ? void 0 : _c.data) && publicRoutes.includes(to.path)) {
      controller.abort();
      return navigateTo("/dashboard");
    }
  } catch (error) {
    console.error("Error !!, Auth middleware: ", error);
    controller.abort();
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth-Bw3ooFA5.mjs.map
