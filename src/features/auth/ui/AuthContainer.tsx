import React, { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.tsx'
import { clearAllField, formAuthReducer } from '../model/slice/form-auth-slice.ts'
import { type IReducer, ReducerLoader } from 'shared/ui/reducer-loader'

interface IAuthContainerProps {
  children: React.ReactNode
}

const reducers: IReducer[] = [{ storeKey: 'formAuthReducer', reducer: formAuthReducer, save: false }]

export const AuthContainer: React.FC<IAuthContainerProps> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(clearAllField())
  }, [dispatch])

  return (
      <ReducerLoader reducers={reducers}>
          {children}
      </ReducerLoader>
  )
}
