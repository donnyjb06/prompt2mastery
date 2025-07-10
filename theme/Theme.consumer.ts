import { useContext } from "react";
import { ThemeContext } from "./Theme.context";

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme consumer must be used inside of ThemeProvider component")
  }

  return context
}

export default useTheme;