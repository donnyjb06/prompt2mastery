"use client"

import { useState, useEffect, ReactNode } from "react";
import { ThemeContext } from "./Theme.context";
import { Theme, ThemeProviderProps } from "./types";
import { FC } from "react";
import { getInitialTheme } from "./utils";

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>("light")

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial)
  }, [])

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark");
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return(
    <ThemeContext.Provider value={{toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider