import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { RESULT_QUIZ } from 'shared/api/consts.ts'
import { IResultQuiz } from '../types/result-quiz-scheme.ts'

export const createResultQuizThunk = createAsyncThunk<IResultQuiz, IResultQuiz, IThunk>('result-quiz/create',
  async (resultQuiz, thunkAPI) => {
    const userId = thunkAPI.getState().authReducer.authData?.id ?? ''
    try {
      const result: IResultQuiz = {
        ...resultQuiz,
        id_user: userId
      }

      const response = await thunkAPI.extra.api.post<IResultQuiz>(RESULT_QUIZ, result)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
