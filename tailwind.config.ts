import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import defaultTheme from 'tailwindcss/defaultTheme';

const brandColors = {
  primary: {
    // ref: https://tailcolor.com/palettes/687df7
    DEFAULT: '#687df7',
    '50': '#f0f2fe',
    '100': '#e1e5fd',
    '200': '#c3cbfc',
    '300': '#a4b1fa',
    '400': '#8697f9',
    '500': '#687df7',
    '600': '#5364c6',
    '700': '#3e4b94',
    '800': '#2a3263',
    '900': '#151931',
    foreground: '#FFFFFF',
  },
  secondary: {
    // ref: https://tailcolor.com/palettes/9b68f7
    DEFAULT: '#9b68f7',
    '50': '#f5f0fe',
    '100': '#ebe1fd',
    '200': '#d7c3fc',
    '300': '#c3a4fa',
    '400': '#af86f9',
    '500': '#9b68f7',
    '600': '#7c53c6',
    '700': '#5d3e94',
    '800': '#3e2a63',
    '900': '#1f1531',
    foreground: '#FFFFFF',
  },
  success: {
    // ref: https://tailcolor.com/palettes/4A9A4E
    DEFAULT: '#4A9A4E',
    '50': '#edf5ed',
    '100': '#dbebdc',
    '200': '#b7d7b8',
    '300': '#92c295',
    '400': '#6eae71',
    '500': '#4a9a4e',
    '600': '#3b7b3e',
    '700': '#2c5c2f',
    '800': '#1e3e1f',
    '900': '#0f1f10',
    foreground: '#FFFFFF',
  },
  warning: {
    // ref: https://tailcolor.com/palettes/D69657
    DEFAULT: '#D69657',
    '50': '#fbf5ee',
    '100': '#f7eadd',
    '200': '#efd5bc',
    '300': '#e6c09a',
    '400': '#deab79',
    '500': '#d69657',
    '600': '#ab7846',
    '700': '#805a34',
    '800': '#563c23',
    '900': '#2b1e11',
    foreground: '#FFFFFF',
  },
  danger: {
    // ref: https://tailcolor.com/palettes/DA584E
    DEFAULT: '#DA584E',
    '50': '#fbeeed',
    '100': '#f8dedc',
    '200': '#f0bcb8',
    '300': '#e99b95',
    '400': '#e17971',
    '500': '#da584e',
    '600': '#ae463e',
    '700': '#83352f',
    '800': '#57231f',
    '900': '#2c1210',
    foreground: '#FFFFFF',
  },
  focus: '#687df7',
};

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Basis Mono"', ...defaultTheme.fontFamily.mono],
        sans: ['Basis', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: brandColors,
        },
        dark: {
          colors: brandColors,
        },
      },
    }),
  ],
} satisfies Config;
