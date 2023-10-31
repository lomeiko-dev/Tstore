import type React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'entities/auth'
import { pathRoutes } from 'shared/config/routes'

interface IRequireAuth {
  children: React.ReactNode
}
export const RequireAuth: React.FC<IRequireAuth> = ({ children }) => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth === undefined) {
      navigate(pathRoutes.auth.name)
    }
  }, [])

  return children
}
