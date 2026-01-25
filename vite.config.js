import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/portfolio-site/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // project: resolve(__dirname, 'project.html'), // Keeping for reference or can delete
                'siemens-pipeline': resolve(__dirname, 'projects/siemens-pipeline.html'),
                'sbb-optimization': resolve(__dirname, 'projects/sbb-optimization.html'),
                'snake-assembly': resolve(__dirname, 'projects/snake-assembly.html'),
                'address-scrambling': resolve(__dirname, 'projects/address-scrambling.html'),
            },
        },
    },
})
