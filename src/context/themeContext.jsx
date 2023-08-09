import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;