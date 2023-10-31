import React from 'react'
import style from './AppLayout.module.scss'
import { Header } from './header/Header.tsx'

interface IAppLayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => (
    <>
        <Header/>
        <div className={style.container}>
            {children}
        </div>
    </>
)
