import { ThemeContext, type typeTheme } from 'shared/config/theme'
import React, { useState } from 'react'
import { THEME_KEY } from 'shared/config/local-storage'

const themeDefault: typeTheme = localStorage.getItem(THEME_KEY) as typeTheme

interface IThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, toggleTheme] = useState(themeDefault || 'light')

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
      </ThemeContext.Provider>
  )
}
