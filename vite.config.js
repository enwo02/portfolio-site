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
                'epfl-spacecraft': resolve(__dirname, 'projects/epfl-spacecraft.html'),
                'lautsprecher-wasser': resolve(__dirname, 'projects/lautsprecher-wasser.html'),
                'light-pendulum': resolve(__dirname, 'projects/light-pendulum.html'),
                'uppsala-digital': resolve(__dirname, 'projects/uppsala-digital.html'),
                'analog-first-film': resolve(__dirname, 'projects/analog-first-film.html'),
                'better-contacts': resolve(__dirname, 'projects/better-contacts.html'),
            },
        },
    },
})
