import {createContext} from "react";

export type typeTheme = "dark" | "light";

interface IThemeProps {
    theme: typeTheme,
    toggleTheme: (theme: typeTheme) => void,
}

export const ThemeContext = createContext<IThemeProps>({
    theme: "light",
    toggleTheme: () => null
});