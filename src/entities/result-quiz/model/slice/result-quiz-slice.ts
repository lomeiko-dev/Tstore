import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IResultQuiz, IResultQuizScheme } from '../types/result-quiz-scheme.ts'
import { uploadResultQuizThunk } from '../services/upload-result-quiz-thunk.ts'
import { createResultQuizThunk } from '../services/create-result-quiz-thunk.ts'

const initialState: IResultQuizScheme = {
  results: [],
  limit: 10,
  page: 1,
  totalCount: 0,
  isLoading: false,
  error: undefined
}

const resultQuizSlice = createSlice({
  name: 'result-quiz',
  initialState,
  reducers: {
    uploadResults: (state, action: PayloadAction<{ data: IResultQuiz[], count: number }>) => {
      state.results = [...state.results, ...action.payload.data]
      state.totalCount = action.payload.count
    },
    incrementPage: (state) => {
      state.page += 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadResultQuizThunk.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(uploadResultQuizThunk.fulfilled, state => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(uploadResultQuizThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(createResultQuizThunk.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(createResultQuizThunk.fulfilled, state => {
        state.isLoading = false
        state.error = undefined
      })
      .addCase(createResultQuizThunk.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const resultQuizReducer = resultQuizSlice.reducer
export const { uploadResults, incrementPage } = resultQuizSlice.actions
