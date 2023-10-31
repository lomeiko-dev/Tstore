import style from './DefaultLayout.module.scss'
import * as React from 'react'
import { Header } from 'widgets/default-layout/header/Header.tsx'

import bg from 'shared/assets/img/bg/bg-auth.jpg'

interface IDefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = ({ children }) => (
    <div style={{ backgroundImage: `url(${bg})` }} className={style.layout}>
        <Header/>
        <div className={style.container}>
            {children}
        </div>
    </div>
)
