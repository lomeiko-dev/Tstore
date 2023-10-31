import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IProfile, uploadProfile } from 'entities/user'
import { type IThunk } from 'app/providers/store'
import { PROFILE } from 'shared/api/consts.ts'

export const uploadProfileThunk = createAsyncThunk<IProfile, string, IThunk>('profile/upload',
  async (id, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IProfile[]>(PROFILE + `?authId=${id}`)
        .then(res => res.data[0])

      thunkAPI.dispatch(uploadProfile(response))

      return response
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
