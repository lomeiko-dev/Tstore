import style from './ThemeSwitcher.module.scss'
import SunIcon from 'shared/assets/img/icons/sun.svg'
import MoonIcon from 'shared/assets/img/icons/moon.svg'
import { useTheme } from 'shared/lib/hooks/useTheme.tsx'

export const ThemeSwitcher = () => {
  const { onToggleTheme, theme } = useTheme()
  return (
      <img onClick={onToggleTheme} className={style.switcher} src={theme === 'light' ? SunIcon : MoonIcon} alt='change theme'/>
  )
}
