import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IQuizDetailsScheme, type IQuiz } from '../types/quiz-scheme.ts'
import { uploadQuizDetailsThunk } from '../services/upload-quiz-details-thunk.ts'

const initialState: IQuizDetailsScheme = {
  quiz: undefined,
  isLoading: false,
  error: undefined
}

const quizDetailsSlice = createSlice({
  name: 'quiz-details',
  initialState,
  reducers: {
    setQuiz (state, action: PayloadAction<IQuiz>) {
      state.quiz = action.payload
    }
  },
  extraReducers (builder) {
    builder
      .addCase(uploadQuizDetailsThunk.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(uploadQuizDetailsThunk.fulfilled, state => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(uploadQuizDetailsThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const quizDetailsReducer = quizDetailsSlice.reducer
export const { setQuiz } = quizDetailsSlice.actions
