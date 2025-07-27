import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

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
    "nuxt-vue3-google-signin",
  ],
  // plugins: ["~/plugins/supabase.ts"],
  app: {
    head: {
      title: "Tajamu | Event & Conference Management System",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "description",
          name: "description",
          content:
            "Tajamu is an all-in-one platform for organizing and managing events, forums, and conferences efficiently and effortlessly.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "Ahmed shehata" },
        {
          name: "keywords",
          content:
            "Tajamu, events, conferences, forums, event management, conference system, event platform",
        },
        {
          property: "og:title",
          content: "Tajamu | Professional Event Management Platform",
        },
        {
          property: "og:description",
          content:
            "An integrated platform for planning, managing, and hosting events and conferences online and offline.",
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/og-image.jpg" },
        { property: "og:url", content: "https://tajamu.ahmedshehata.online" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Tajamu | Smart Conference & Forum Management",
        },
        {
          name: "twitter:description",
          content:
            "Tajamu simplifies the organization of professional events, whether virtual or in-person.",
        },
        { name: "twitter:image", content: "/og-image.jpg" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
        },
      ],
    },
  },
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
    componentDir: path.resolve("~/components/ui"),
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
    preset: "node-server",
  },
});
