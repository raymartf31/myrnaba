import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "myrnaba-c5caexbncqfcbteg.southeastasia-01.azurewebsites.net",
      "myrnaba.xyz",
      "www.myrnaba.com",
    ],
  },
});
