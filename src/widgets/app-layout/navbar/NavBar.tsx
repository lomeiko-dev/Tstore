import React from 'react'
import classNames from 'classnames'
import style from './NavBar.module.scss'

import { Link } from 'shared/ui/link'
import { pathRoutes } from 'shared/config/routes'
import { useAuth } from 'entities/auth'

import HomeIcon from 'shared/assets/img/icons/home.svg'
import MyTestsIcon from 'shared/assets/img/icons/my-tests.svg'
import AboutIcon from 'shared/assets/img/icons/about.svg'
import ProfileIcon from 'shared/assets/img/icons/profile.svg'
import UsersIcon from 'shared/assets/img/icons/users.svg'

interface INavBarProps {
  className?: string
}

export const NavBar: React.FC<INavBarProps> = React.memo((props) => {
  const {
    className
  } = props
  const authData = useAuth()
  return (
      <nav className={classNames(style.bar, className)}>
          <Link className={style.link} to={pathRoutes.about.name}>
              <img className={style.icon} src={AboutIcon} alt=''/>
              <div>О сайте</div>
          </Link>
          <Link to={pathRoutes.main.name}>
              <img className={style.icon} src={HomeIcon} alt=''/>
              <div>Главная</div>
          </Link>
          <Link to={pathRoutes.main.name + `/${authData?.id}`}>
              <img className={style.icon} src={MyTestsIcon} alt=''/>
              <div>Мои тесты</div>
          </Link>
          <Link to={pathRoutes.users.name}>
              <img className={style.icon} src={UsersIcon} alt=''/>
              <div>Пользователи</div>
          </Link>
          <Link to={pathRoutes.profile.name + `/${authData?.id}`}>
              <img className={style.icon} src={ProfileIcon} alt=''/>
              <div>Профиль</div>
          </Link>
      </nav>
  )
})
