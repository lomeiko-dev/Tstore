import { IStore } from 'app/providers/store'
import { createSelector } from '@reduxjs/toolkit'

const selectResultQuiz = (state: IStore) => state.resultQuizReducer

export const resultQuizSelector = createSelector(
  selectResultQuiz,
  (resultQuizReducer) => resultQuizReducer?.results ?? []
)
export const totalCountSelector = (state: IStore) => state.resultQuizReducer?.totalCount ?? 0
export const limitSelector = (state: IStore) => state.resultQuizReducer?.limit ?? 0
export const isLoadingSelector = (state: IStore) => state.resultQuizReducer?.isLoading ?? false
export const errorSelector = (state: IStore) => state.resultQuizReducer?.error
