import { useCallback, useContext } from 'react'
import { ThemeContext } from 'shared/config/theme'
import { THEME_KEY } from 'shared/config/local-storage'

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const onToggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    console.log(newTheme)
    toggleTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }, [theme])

  return { theme, onToggleTheme }
}
