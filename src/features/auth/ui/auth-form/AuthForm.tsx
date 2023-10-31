import React, { useCallback } from 'react'
import classNames from 'classnames'
import style from '../Auth.module.scss'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector.tsx'
import { errorSelector, isLoadingSelector, passwordSelector, usernameSelector } from '../../model/selectors/auth-selectors.ts'
import { authThunk } from '../../model/services/auth/auth-thunk.ts'

import { styledText, Text } from 'shared/ui/text'
import { Field } from 'shared/ui/field'
import { TextButton } from 'shared/ui/text-button'

import { useNavigate } from 'react-router-dom'
import { useHandlers } from '../../lib/useHandlers.tsx'
import { AuthContainer } from '../AuthContainer.tsx'

interface IAuthFormProps {
  className?: string
}

export const AuthForm: React.FC<IAuthFormProps> = React.memo(({ className }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const username = useAppSelector(usernameSelector)
  const password = useAppSelector(passwordSelector)

  const isLoading = useAppSelector(isLoadingSelector)
  const error = useAppSelector(errorSelector)

  const { updateUsernameHandler, updatePasswordHandler } = useHandlers()

  const authHandler = useCallback(() => {
    dispatch(authThunk({ navigate }))
  }, [dispatch])

  return (
      <AuthContainer>
          <div className={classNames(style.form, className)}>
              {error && <Text styled={styledText.ERROR}>{error}</Text>}
              <Field
					color='#fff'
					placeholderColorScheme='light'
					className={style.field}
					onChange={updateUsernameHandler} type='text' placeholder='login' value={username}/>
              <Field
					color='#fff'
					placeholderColorScheme='light'
					className={style.field}
					onChange={updatePasswordHandler} type='password' placeholder='password' value={password}/>

              <TextButton
					className={style.btn}
					bgColor='#ffffff'
					disabled={isLoading} onClick={authHandler}>Авторизация</TextButton>
          </div>
      </AuthContainer>
  )
})
