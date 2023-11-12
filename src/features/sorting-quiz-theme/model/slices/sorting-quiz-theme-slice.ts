import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISortingQuizThemeScheme } from '../types/sorting-quiz-theme-scheme.ts'

const initialState: ISortingQuizThemeScheme = {
  themes: [],
  start: 0,
  end: 5,
  isAllThemes: false,
  limit: 5,
  isLoading: false,
  error: undefined
}

const sortingQuizThemeSlice = createSlice({
  name: 'sorting-quiz-theme',
  initialState: initialState,
  reducers: {
    uploadThemes: (state, action: PayloadAction<string[]>) => {
      state.themes = [...state.themes, ...action.payload]
    },
    incrementPage: (state) => {
      state.start += state.limit
      state.end += state.limit
    },
    setIsAllThemes: (state, action: PayloadAction<boolean>) => {
      state.isAllThemes = action.payload
    }
  }
})

export const sortingQuizThemeReducer = sortingQuizThemeSlice.reducer
export const { uploadThemes, incrementPage, setIsAllThemes } = sortingQuizThemeSlice.actions
