import { type IStore } from 'app/providers/store'
import { createSelector } from '@reduxjs/toolkit'

export const quizNameSelector = (state: IStore) => state.formQuizReducer?.quizDetails.name ?? ''
export const quizDescriptionSelector = (state: IStore) => state.formQuizReducer?.quizDetails.description ?? ''
export const quizThemeSelector = (state: IStore) => state.formQuizReducer?.quizDetails.theme ?? ''
export const quizIconSelector = (state: IStore) => state.formQuizReducer?.quizDetails.icon ?? ''
export const quizTagsSelector = (state: IStore) => state.formQuizReducer?.quizDetails.tags ?? ''
export const isLoadingSelector = (state: IStore) => state.formQuizReducer?.isLoading ?? false
const selectFormQuizReducer = (state: IStore) => state.formQuizReducer
export const errorsSelector = createSelector(
  selectFormQuizReducer,
  (formQuizReducer) => [
    formQuizReducer?.error,
    formQuizReducer?.errorThemeQuiz,
    formQuizReducer?.errorNameQuiz
  ]
)
