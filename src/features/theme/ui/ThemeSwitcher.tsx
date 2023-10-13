import style from './ThemeSwitcher.module.scss';
import ThemeIcon from "shared/assets/img/icons/theme.svg";
import {useTheme} from "shared/lib/hooks/useTheme.tsx";

export const ThemeSwitcher = () => {
    const {onToggleTheme} = useTheme();
    return (
        <img onClick={onToggleTheme} className={style.switcher} src={ThemeIcon} alt="change theme"/>
    );
};