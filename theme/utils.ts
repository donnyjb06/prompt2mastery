import { Theme } from "./types";

export const getInitialTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return theme as Theme;
  }

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkMode) {
    return 'dark' as Theme
  }

  return "light" as Theme
}