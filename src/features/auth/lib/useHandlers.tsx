import type React from 'react'

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { useCallback } from 'react'
import { updateDateBirthdayField, updateNicknameField, updatePasswordField, updateUsernameField } from '../model/slice/form-auth-slice.ts'

export const useHandlers = () => {
  const dispatch = useAppDispatch()

  const updateUsernameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUsernameField(e.target.value))
  }, [dispatch])

  const updatePasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updatePasswordField(e.target.value))
  }, [dispatch])

  const updateNicknameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateNicknameField(e.target.value))
  }, [dispatch])

  const updateDateBirthdayHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateDateBirthdayField(e.target.value))
  }, [dispatch])

  return { updateNicknameHandler, updatePasswordHandler, updateUsernameHandler, updateDateBirthdayHandler }
}
