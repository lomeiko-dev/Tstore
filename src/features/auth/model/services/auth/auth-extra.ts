import { type ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { type IFormAuthScheme } from '../../types/form-auth-scheme.ts'
import { authThunk } from './auth-thunk.ts'

export const authExtra = (builder: ActionReducerMapBuilder<IFormAuthScheme>) => {
  builder
    .addCase(authThunk.pending, state => {
      state.isLoading = true
      state.error = undefined
    })
    .addCase(authThunk.fulfilled, state => {
      state.isLoading = false
      state.error = undefined
    })
    .addCase(authThunk.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
      state.passwordField = ''
      state.usernameField = ''
    })
}
