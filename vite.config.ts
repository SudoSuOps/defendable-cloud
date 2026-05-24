import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// DefendableCloud — operator-owned private inference + AgentBench + SwarmCurator.
// Deployed to defendablecloud.com via Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    target: "es2020",
    sourcemap: false,
  },
  server: {
    port: 5175,
    host: true,
  },
});
