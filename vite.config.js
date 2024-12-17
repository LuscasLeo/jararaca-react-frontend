import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "index.ts"),
            name: "jararaca",
            fileName: function (format) { return "jararaca.".concat(format, ".js"); },
            formats: ["cjs", "es", "umd", "iife"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
});
