import type React from 'react'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { changeAvatar, changeDescription, changeName, changeStatus } from '../model/slice/form-profile-slice.ts'

export const useHandlers = () => {
  const dispatch = useAppDispatch()

  const changeAvatarHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeAvatar(e.target.value))
  }, [dispatch])

  const changeNicknameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value))
  }, [dispatch])

  const changeStatusHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(e.target.value))
  }, [dispatch])

  const changeDescriptionHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDescription(e.target.value))
  }, [dispatch])

  return { changeAvatarHandler, changeNicknameHandler, changeDescriptionHandler, changeStatusHandler }
}
