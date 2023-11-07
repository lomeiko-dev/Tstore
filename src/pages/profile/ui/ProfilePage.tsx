import { useCallback, useEffect, useState } from 'react'
import style from './ProfilePage.module.scss'

import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import {
  errorSelectorProfile,
  isLoadingSelectorProfile,
  profileReducer,
  profileSelector,
  uploadProfileThunk
} from 'entities/user'
import { removeAuthData } from 'entities/auth'

import { type IReducer, ReducerLoader } from 'shared/ui/reducer-loader'
import { FormChangeProfile } from 'features/form-profile'
import { ProfileCard } from './profile-card/ProfileCard.tsx'
import { Panel, styledPanel, typedPanel } from 'shared/ui/panel'
import { Page } from 'shared/ui/page'

import { pathRoutes } from 'shared/config/routes'

const reducers: IReducer[] = [
  { storeKey: 'profileReducer', reducer: profileReducer, save: true }
]

const ProfilePage = () => {
  const [flip, setFlip] = useState(false)
  const [isChange, setChange] = useState(true)

  const dispatch = useAppDispatch()
  const { id = '' } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(uploadProfileThunk(id))
  }, [dispatch, id])

  const profile = useAppSelector(profileSelector)
  const isLoading = useAppSelector(isLoadingSelectorProfile)
  const error = useAppSelector(errorSelectorProfile)

  const onFlipFormHandler = useCallback(() => {
    setFlip(prevState => !prevState)
  }, [flip])

  const changeProfile = useCallback(() => {
    setChange(prevState => !prevState)
  }, [dispatch, profile])

  const logout = useCallback(() => {
    dispatch(removeAuthData())
    navigate(pathRoutes.auth.name)
  }, [dispatch])

  return (
      <ReducerLoader reducers={reducers}>
          <Page>
              <Panel
					typed={typedPanel.ROUNDED} styled={styledPanel.SHADOW_PANEL}
					onChangeContent={changeProfile} isRotate={flip}
					className={style.card}>

                  {isChange
					  ? <ProfileCard
							profile={profile}
							onChange={onFlipFormHandler} logout={logout}
							isLoading={isLoading} error={error}/>
					  : <FormChangeProfile
							profile={profile}
							onClose={onFlipFormHandler}/>}

              </Panel>
          </Page>
      </ReducerLoader>
  )
}

export default ProfilePage
