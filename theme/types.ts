import { ReactNode } from "react";

interface ThemeContextType {
  toggleTheme: () => void;
  theme: Theme;
}

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode
}

export type { ThemeContextType, Theme, ThemeProviderProps };
