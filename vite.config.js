import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/portfolio-site/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                project: resolve(__dirname, 'project.html'),
            },
        },
    },
})
