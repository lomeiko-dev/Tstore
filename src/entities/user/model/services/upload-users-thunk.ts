import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { type IProfile } from '../types/user-scheme.ts'
import { PROFILE } from 'shared/api/consts.ts'
import { incrementPage, uploadUsers } from '../slices/user-slice.ts'

export const uploadUsersThunk = createAsyncThunk<IProfile[], void, IThunk>('users/upload',
  async (_, thunkAPI) => {
    const { page, limit, sortQuery } = thunkAPI.getState().userReducer ?? {}
    try {
      const response =
                await thunkAPI.extra.api.get<IProfile[]>(PROFILE + `?${sortQuery}_page=${page}&_limit=${limit}`)

      thunkAPI.dispatch(uploadUsers({
        data: response.data,
        count: response.headers['x-total-count']
      }))
      thunkAPI.dispatch(incrementPage())

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
