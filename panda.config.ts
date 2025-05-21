import { defineConfig } from '@pandacss/dev'

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                colors: {
                    primary: {
                        50: { value: '#D3F8DF' }, // shadow
                        100: { value: '#EDFCF2' }, // background
                        300: { value: '#73E2A3' }, // border
                        400: { value: '#097f48' }, // hover
                        500: { value: '#087443' }, // base
                        600: { value: '#076a3e' }, // active
                    },
                    gray: {
                        50: { value: '#EAECF0' }, // divider
                        100: { value: '#F2F4F7' }, // background
                        300: { value: '#D0D5DD' }, // border
                        500: { value: '#667085' }, // base
                        600: { value: '#98A2B3' }, // active
                        700: { value: '#5D6B89' }, // text button hover
                        800: { value: '#475467' }, // text
                        900: { value: '#344054' }, // secondary text but looks like a bug in figma (TODO: discuss with design)
                    },
                    error: {
                        50: { value: '#FEE4E2' }, // shadow
                        300: { value: '#FDA29B' }, // border
                        500: { value: '#F04438' }, // base
                    },
                    black: { value: '#101828' },
                },
                fonts: {
                    body: { value: "'Fixel', system-ui, sans-serif" },
                    display: {
                        value: "'Fixel Display', system-ui, sans-serif",
                    },
                },
                spacing: {
                    sm: { value: '0.5rem' },
                    md: { value: '1rem' },
                    lg: { value: '1.5rem' },
                    xl: { value: '2rem' },
                },
                radii: {
                    sm: { value: '6px' },
                    md: { value: '12px' },
                },
            },
            keyframes: {
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
                    '50%': { transform: 'scale(1.1)', opacity: '1' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20%)' },
                },
                pulseBounce: {
                    '0%, 100%': {
                        transform: 'scale(1) translateY(0)',
                        opacity: '0.5',
                    },
                    '50%': {
                        transform: 'scale(1.1) translateY(-20%)',
                        opacity: '1',
                    },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: 'styled-system',

    // The framework to use for the jsx
    jsxFramework: 'react',
})
