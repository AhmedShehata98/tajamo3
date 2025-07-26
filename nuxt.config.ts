import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    // Temporarily disable @nuxt/image to fix initialization error
    // "@nuxt/image",
    "shadcn-nuxt",
    "@nuxtjs/leaflet",
    "nuxt-vue3-google-signin",
  ],
  // plugins: ["~/plugins/supabase.ts"],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["bnch91p2-3000.euw.devtunnels.ms"],
    },
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      paymobPublickKey: process.env.PAYMOB_PUBLIC_KEY,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      websiteUrl: process.env.WEBSITE_URL,
    },
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    jwtSecret: process.env.JWT_SECRET,
    geoapifyApiKey: process.env.GEOAPIFY_API_KEY,
    paymob: {
      apiKey: process.env.PAYMOB_API_KEY,
      secretKey: process.env.PAYMOB_SECRET_KEY,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
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
  nitro: {
    preset: "node",
  },
});
