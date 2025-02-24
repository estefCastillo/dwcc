import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const initialTheme = "ligth";

const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(initialTheme);
   const handleTheme = (ev) => {
      setTheme(ev.target.value);
   };

   const data = {
      theme,
      handleTheme,
   };

   return (
      <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
   );
};
export { ThemeProvider };
export default ThemeContext;
