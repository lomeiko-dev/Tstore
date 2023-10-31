import type React from 'react'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { initAuthData } from 'entities/auth'

interface IAuthenticateProviderProps {
  children: React.ReactNode
}

export const AuthenticateProvider: React.FC<IAuthenticateProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAuthData())
  }, [])

  return children
}
