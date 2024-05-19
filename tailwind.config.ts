import type { Config } from 'tailwindcss';
import colors from './tailwind/colors';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        'clamp-huge': 'clamp(7rem, 15vw, 200rem)',
      },
      strokeWidth: {
        3: '3',
        4: '4',
      },
      colors: {
        'surface-var': 'var(--colors-surface)',
        'primary-var': 'var(--colors-primary)',
        'secondary-var': 'var(--colors-secondary)',
        ...colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
