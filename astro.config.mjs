import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "server", // ✅ enables server routes
  adapter: netlify(), // ✅ needed for Netlify + local testing
  integrations: [react(), tailwind()],
});

