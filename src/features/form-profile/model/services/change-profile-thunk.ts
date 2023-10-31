import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { PROFILE } from 'shared/api/consts.ts'
import { type IProfile, uploadProfile } from 'entities/user'
import { errorsSelector } from 'features/form-profile/model/selectors/form-profile-selectors.ts'

export const changeProfileThunk = createAsyncThunk<IProfile | undefined, () => void, IThunk>('change-profile',
  async (onSuccessful, thunkAPI) => {
    const profileDetails = thunkAPI.getState().formProfileReducer?.profileDetails
    const errors = errorsSelector(thunkAPI.getState())
    try {
      if (profileDetails === undefined) {
        throw new Error('Профиль не найден')
      }

      if (JSON.stringify(errors) === JSON.stringify([undefined, undefined, undefined, undefined])) {
        const response = await thunkAPI.extra.api.put<IProfile>(PROFILE + `/${profileDetails.id}`, profileDetails)

        thunkAPI.dispatch(uploadProfile(response.data))
        onSuccessful()
        return response.data
      }

      return undefined
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
