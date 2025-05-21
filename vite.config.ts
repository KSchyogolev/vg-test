import pandaPostcss from '@pandacss/dev/postcss'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                // @ts-expect-error - not typed correctly
                autoprefixer,
                // @ts-expect-error - not typed correctly
                pandaPostcss,
            ],
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'ui-kit': path.resolve(__dirname, './src/shared/ui-kit'),
            'styled-system': path.resolve(__dirname, './styled-system'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
})
