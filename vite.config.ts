import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const envWithVitePrefix = Object.keys(process.env)
  .filter((key) => key.startsWith("VITE_"))
  .reduce((env: { [key: string]: string | undefined }, key) => {
    env[key] = JSON.stringify(process.env[key]);
    return env;
  }, {});

// https://vite.dev/config/
export default defineConfig(({}) => {
  console.log(envWithVitePrefix);
  return {
    plugins: [react()],
    define: envWithVitePrefix,
  };
});
