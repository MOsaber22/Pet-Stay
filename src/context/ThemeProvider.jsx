import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeChanger = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );
  const changeTheme = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const htmlTag = document.documentElement;
    if (theme == "dark") {
      htmlTag.classList.add("dark");
    } else {
      htmlTag.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
export default ThemeChanger;
