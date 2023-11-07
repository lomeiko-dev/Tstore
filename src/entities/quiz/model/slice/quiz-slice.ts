import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IQuiz, type IQuizScheme } from '../types/quiz-scheme.ts'
import { uploadQuizThunk } from '../services/upload-quiz-thunk.ts'
import { getQuizThunk } from 'entities/quiz'

const initialState: IQuizScheme = {
  quizzes: [],
  totalCount: 0,
  page: 1,
  limit: 9,
  isLoading: false,
  error: undefined
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    uploadQuizzes (state, action: PayloadAction<{ data: IQuiz[], count: number }>) {
      state.quizzes = [...state.quizzes, ...action.payload.data]
      state.totalCount = action.payload.count
    },
    incrementPage (state) {
      state.page += 1
    },
    removeQuiz (state, action: PayloadAction<string>) {
      state.quizzes = state.quizzes.filter(item => item.id !== action.payload)
    }
  },
  extraReducers (builder) {
    builder
      .addCase(uploadQuizThunk.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(uploadQuizThunk.fulfilled, state => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(uploadQuizThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(getQuizThunk.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getQuizThunk.fulfilled, state => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(getQuizThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const quizReducer = quizSlice.reducer
export const { uploadQuizzes, incrementPage, removeQuiz } = quizSlice.actions
