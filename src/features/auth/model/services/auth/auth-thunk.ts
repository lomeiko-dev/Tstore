import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { AUTH } from 'shared/api/consts.ts'
import { type IAuthData, saveAuthData } from 'entities/auth'
import { type NavigateFunction } from 'react-router-dom'
import { pathRoutes } from 'shared/config/routes'

interface IAuthThunkProps {
  navigate: NavigateFunction
}

export const authThunk = createAsyncThunk<IAuthData, IAuthThunkProps, IThunk>('auth',
  async ({ navigate }, thunkAPI) => {
    const {
      passwordField = '',
      usernameField = ''
    } = thunkAPI.getState().formAuthReducer ?? {}

    try {
      const auth = await thunkAPI.extra.api.get<IAuthData[]>(AUTH + `?username=${usernameField}&password=${passwordField}`)
        .then(res => res.data[0])

      if (auth === undefined) {
        throw new Error('Имя пользователя, или пароль не верны')
      }

      thunkAPI.dispatch(saveAuthData(auth))
      navigate(pathRoutes.profile.name + `/${auth.id}`)
      return auth
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
