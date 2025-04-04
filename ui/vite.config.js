import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "MicetfUI",
            fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "jsxRuntime",
                },
            },
        },
        sourcemap: true,
        // Générer des CSS séparés
        cssCodeSplit: true,
    },
    server: {
        watch: false,
    },
});
