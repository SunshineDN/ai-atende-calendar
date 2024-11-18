import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 6500,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:6500",
  },
});