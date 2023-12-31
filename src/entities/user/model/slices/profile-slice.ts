import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IProfile, type IProfileScheme } from '../types/user-scheme.ts'
import { uploadProfileThunk } from '../services/upload-profile-thunk.ts'

const initialState: IProfileScheme = {
  profile: undefined,
  isLoading: false,
  error: undefined
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    uploadProfile (state, action: PayloadAction<IProfile>) {
      state.profile = action.payload
    }
  },
  extraReducers (builder) {
    builder
      .addCase(uploadProfileThunk.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(uploadProfileThunk.fulfilled, state => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(uploadProfileThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const profileReducer = profileSlice.reducer
export const { uploadProfile } = profileSlice.actions
