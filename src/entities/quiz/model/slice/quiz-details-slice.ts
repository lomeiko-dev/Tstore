import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IQuiz, IQuizDetailsScheme } from '../types/quiz-scheme.ts'

const initialState: IQuizDetailsScheme = {
  quiz: undefined,
  isLoading: false,
  error: undefined
}

const quizDetailsSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<IQuiz>) => {
      state.quiz = action.payload
    }
  }
})

export const quizDetailsReducer = quizDetailsSlice.reducer
export const { setQuiz } = quizDetailsSlice.actions
