import { hasInjectionContext, inject } from 'vue';
import { t as tryUseNuxtApp } from './server.mjs';
import { u as useHead$1, a as useSeoMeta$1, b as useHeadSafe$1, h as headSymbol, c as useServerSeoMeta$1 } from '../routes/renderer.mjs';

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useHeadSafe(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHeadSafe$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
function useServerSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useServerSeoMeta$1(input, { head, ...options });
  }
}

export { useHead as a, useHeadSafe as b, useServerSeoMeta as c, useSeoMeta as u };
//# sourceMappingURL=v3-DxuvcMCg.mjs.map
