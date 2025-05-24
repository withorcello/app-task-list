import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    const themeColor = {
        light: {
            background: "#FFF",
            text: "#000",
            buttonText: "#000",
            buttonBackground: "#DDD"
        },
        dark: {
            background: "#333",
            text: "#FFF",
            buttonText: "#FFF",
            buttonBackground: "#555"
        }
    }

    const currentThemeColor = themeColor[theme];

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colors: currentThemeColor }}>
            {children}
        </ThemeContext.Provider>
    )
};