import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Object = {
  [key: string | number]: any;
};

export interface Theme extends Object {}

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

type ThemeContextProps = {
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const dataMemoized = useMemo<ThemeContextProps>(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={dataMemoized}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
