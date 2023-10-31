import { createSlice } from '@reduxjs/toolkit'
import { type IAuthPageScheme } from '../types/auth-page-scheme.ts'

const initialState: IAuthPageScheme = {
  theme: 'theme_auth',
  flip: false,
  isRegForm: false,
  namedForm: 'Авторизация',
  textChangeForm: 'Создать новый аккаунт'
}

const authPageSlice = createSlice({
  name: 'auth-page',
  initialState,
  reducers: {
    toggleFlip (state) {
      state.flip = !state.flip
    },
    toggleForm (state) {
      state.isRegForm = !state.isRegForm
      state.namedForm = state.isRegForm ? 'Регистрация' : 'Авторизация'
      state.textChangeForm = state.isRegForm ? 'Уже существует аккаунт?' : 'Создать новый аккаунт'
      state.theme = state.isRegForm ? 'theme_reg' : 'theme_auth'
    }
  }
})

export const authPageReducer = authPageSlice.reducer
export const { toggleForm, toggleFlip } = authPageSlice.actions
