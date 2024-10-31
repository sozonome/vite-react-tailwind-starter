import { Classic } from '@theme-toggles/react';
import '@theme-toggles/react/css/Classic.css';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Classic
      toggle={(light) => setTheme(light ? 'light' : 'dark')}
      toggled={theme === 'light'}
      placeholder=""
      className="text-3xl"
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
}
