import {useCallback, useContext} from "react";
import {ThemeContext} from "shared/config/theme";
import {theme_key} from "shared/config/local-storage";

export const useTheme = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const onToggleTheme = useCallback(() => {
        const newTheme = theme === "light" ? "dark" : "light";
        console.log(newTheme)
        toggleTheme(newTheme);
        localStorage.setItem(theme_key, newTheme);
    }, [theme]);

    return {theme, onToggleTheme}
};