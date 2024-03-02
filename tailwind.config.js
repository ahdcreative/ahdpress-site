'use strict';

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]},
        extend: {
            height: {
                200: '50rem',
                ...defaultTheme.height
            },
            screens: {
                '3xl': '1792px',
                '4xl': '2048px'
            },
            spacing: {
                128: '32rem',
                160: '40rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                288: '72rem',
                320: '80rem',
                352: '88rem',
                384: '96rem',
            },
            colors: {
                discord: {
                    DEFAULT: 'hsl(235,86%,65%)',
                    dark: 'hsl(235,60%,54%)'
                },
                malachite: {
                    '50': 'hsl(103, 84%, 95%)',
                    '100': 'hsl(103, 85%, 89%)',
                    '200': 'hsl(106, 85%, 80%)',
                    '300': 'hsl(107, 80%, 67%)',
                    '400': 'hsl(107, 74%, 52%)',
                    '500': 'hsl(108, 76%, 44%)',
                    '600': 'hsl(109, 81%, 35%)',
                    '700': 'hsl(110, 74%, 27%)',
                    '800': 'hsl(111, 66%, 23%)',
                    '900': 'hsl(112, 57%, 20%)',
                    '950': 'hsl(114, 76%, 10%)',
                },
                hibiscus: {
                    '50': 'hsl(327, 60%, 97%)',
                    '100': 'hsl(325, 70%, 95%)',
                    '200': 'hsl(327, 73%, 90%)',
                    '300': 'hsl(328, 76%, 82%)',
                    '400': 'hsl(329, 76%, 70%)',
                    '500': 'hsl(331, 72%, 60%)',
                    '600': 'hsl(334, 63%, 49%)',
                    '700': 'hsl(336, 68%, 42%)',
                    '800': 'hsl(337, 66%, 35%)',
                    '900': 'hsl(337, 61%, 30%)',
                    '950': 'hsl(337, 75%, 17%)',
                },
                persian: {
                    '50': 'hsl(0, 71%, 97%)',
                    '100': 'hsl(0, 80%, 94%)',
                    '200': 'hsl(359, 85%, 89%)',
                    '300': 'hsl(359, 83%, 82%)',
                    '400': 'hsl(359, 80%, 71%)',
                    '500': 'hsl(359, 74%, 60%)',
                    '600': 'hsl(359, 64%, 50%)',
                    '700': 'hsl(359, 65%, 42%)',
                    '800': 'hsl(359, 62%, 35%)',
                    '900': 'hsl(359, 55%, 31%)',
                    '950': 'hsl(359, 65%, 15%)',
                },
                midnight: {
                    DEFAULT: 'hsl(218, 42%, 10%)'
                },
                blue: {
                  'dark-contrast': 'hsl(216,32%,17%)'
                },
                colors
            },
        },
        zIndex: {
            '-10': '-10'
        },
        typography: {
            '2xl': {
                css: {
                    'maxWidth': '73ch',
                    'h1, h2, h3, h4, h5, h6': {
                        fontWeight: 'bold',
                        color: 'hsl(327, 60%, 97%)'
                    },
                    'h1': {
                        fontSize: '4rem'
                    },
                    'h2': {
                        fontSize: '3rem'
                    },
                    'h3': {
                        fontSize: '2rem'
                    },
                    'p': {
                        color: 'hsl(327, 60%, 97%)'
                    },
                    'a': {
                        color: 'hsl(109, 81%, 35%)'
                    },
                    'iframe': {
                        width: '100%',
                        height: '60vh'
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
};