import React from 'react'
import style from './ProfileCard.module.scss'

import { type IProfile, Profile } from 'entities/user'

import { useAuth } from 'entities/auth'
import { IconButton } from 'shared/ui/icon-button'

import PenIcon from 'shared/assets/img/icons/pen.svg?react'
import logoutIcon from 'shared/assets/img/icons/logout.svg?react'

interface IProfileCardProps {
  onChange: () => void
  logout: () => void
  profile?: IProfile
  isLoading: boolean
  error?: string
}

export const ProfileCard: React.FC<IProfileCardProps> = props => {
  const {
    profile,
    isLoading,
    error,
    logout,
    onChange
  } = props

  const authData = useAuth()
  return (
      <div className={style.card}>
          <Profile profile={profile} isLoading={isLoading} error={error}/>
          {authData?.id === profile?.id &&
          <>
              {!isLoading &&
              <>
                  <IconButton className={style.btn_change} defaultStyle={true} onClick={onChange} Icon={PenIcon}/>
                  <IconButton className={style.btn_logout} onClick={logout} color='red' Icon={logoutIcon}/>
              </>}
          </>}
      </div>
  )
}
