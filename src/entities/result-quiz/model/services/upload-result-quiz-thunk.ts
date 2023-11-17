import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { RESULT_QUIZ } from 'shared/api/consts.ts'
import { incrementPage, uploadResults } from '../slice/result-quiz-slice.ts'
import { IResultQuiz } from '../types/result-quiz-scheme.ts'

export const uploadResultQuizThunk = createAsyncThunk<IResultQuiz[], string, IThunk>('result-quiz/upload',
  async (id, thunkAPI) => {
    const { page, limit } = thunkAPI.getState().resultQuizReducer ?? {}
    try {
      const response =
          await thunkAPI.extra.api.get<IResultQuiz[]>(RESULT_QUIZ + `?id_user=${id}&_page=${page}&_limit=${limit}`)

      thunkAPI.dispatch(uploadResults({
        data: response.data,
        count: response.headers['x-total-count']
      }))

      thunkAPI.dispatch(incrementPage())

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
