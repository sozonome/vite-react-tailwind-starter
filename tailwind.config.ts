/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
    },
  },
  plugins: [tailwindTypography],
} satisfies Config;
