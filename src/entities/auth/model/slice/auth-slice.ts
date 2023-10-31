import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IAuthData, type IAuthScheme } from '../types/authscheme.ts'
import { AUTH_DATA_KEY } from 'shared/config/local-storage'

const initialState: IAuthScheme = {
  authData: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAuthData (state, action: PayloadAction<IAuthData>) {
      localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(action.payload))
      state.authData = action.payload
    },
    initAuthData (state) {
      const authData = localStorage.getItem(AUTH_DATA_KEY) ?? 'undefined'
      if (authData !== 'undefined') {
        state.authData = JSON.parse(authData)
      }
    },
    removeAuthData (state) {
      localStorage.removeItem(AUTH_DATA_KEY)
      state.authData = undefined
    }
  }
})

export const authReducer = authSlice.reducer
export const { saveAuthData, removeAuthData, initAuthData } = authSlice.actions
