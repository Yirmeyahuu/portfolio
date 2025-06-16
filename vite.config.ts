import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    base: "/portfolio",
    assetsInclude: ['**/*.mp4'],  // Handle video files
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    publicDir: 'public',  // Ensure public assets are served correctly
});