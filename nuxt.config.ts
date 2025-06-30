import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/leaflet",
  ],
  // plugins: ["~/plugins/supabase.ts"],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["d91e-154-238-180-102.ngrok-free.app"],
    },
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      paymobPublickKey: process.env.PAYMOB_PUBLIC_KEY,
    },
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    jwtSecret: process.env.JWT_SECRET,
    paymob: {
      apiKey: process.env.PAYMOB_API_KEY,
      secretKey: process.env.PAYMOB_SECRET_KEY,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "shadcn",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "~/components/ui",
  },

  routeRules: {
    "/dashboard/events/create": {
      ssr: false, // Disable SSR for this page
    },
    "/dashboard/events/create/**": {
      ssr: false, // Disable SSR for all nested routes
    },
  },
});
