import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/portfolio-site/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'sbb-optimization': resolve(__dirname, 'projects/sbb-optimization.html'),
                'snake-assembly': resolve(__dirname, 'projects/snake-assembly.html'),
                'address-scrambling': resolve(__dirname, 'projects/address-scrambling.html'),
                'hardware-watchdog': resolve(__dirname, 'projects/hardware-watchdog.html'),
                'hack-the-tracks': resolve(__dirname, 'projects/hack-the-tracks.html'),
            },
        },
    },
})
