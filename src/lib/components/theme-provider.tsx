import type { ReactNode } from 'react';
import React from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => console.error('no theme provider'),
} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<string>('light');

  const toggleTheme = React.useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    window.localStorage.setItem('theme', updatedTheme);
  }, [theme]);

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const providerValue = React.useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext<IThemeContext>(ThemeContext);
