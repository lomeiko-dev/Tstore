import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunk } from 'app/providers/store'
import { type IQuiz } from '../types/quiz-scheme.ts'
import { QUIZ } from 'shared/api/consts.ts'
import { setQuiz } from '../slice/quiz-details-slice.ts'

export const getQuizThunk = createAsyncThunk<IQuiz, string, IThunk>('quiz/get',
  async (id, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<IQuiz[]>(QUIZ + `?id=${id}`)

      thunkAPI.dispatch(setQuiz(response.data[0]))

      return response.data[0]
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  })
