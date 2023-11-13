import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IQuiz } from '../types/quiz-scheme.ts'
import { type IThunk } from 'app/providers/store'
import { QUIZ } from 'shared/api/consts.ts'
import { incrementPage, uploadQuizzes } from '../slice/quiz-slice.ts'

export const uploadQuizThunk = createAsyncThunk<IQuiz[], string | undefined, IThunk>('quiz/upload',
  async (id, thunkAPI) => {
    const { page, limit, sortQuery } = thunkAPI.getState().quizReducer ?? {}
    try {
      const response = await thunkAPI.extra.api.get(QUIZ + `?${sortQuery}_page=${page}&_limit=${limit}${id && `&id_user=${id}`}`)
      thunkAPI.dispatch(uploadQuizzes({
        data: response.data,
        count: response.headers['x-total-count']
      }))
      thunkAPI.dispatch(incrementPage())

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
