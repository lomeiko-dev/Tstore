import { IStore } from 'app/providers/store'
import { createSelector } from '@reduxjs/toolkit'

const selectThemes = (state: IStore) => state.sortingQuizThemeReducer

export const themesSelector = createSelector(
  selectThemes,
  (sortingQuizThemeReducer) => sortingQuizThemeReducer?.themes ?? []
)
export const isAllThemesSelector = (state: IStore) => state.sortingQuizThemeReducer?.isAllThemes ?? false
export const isLoadingSelector = (state: IStore) => state.sortingQuizThemeReducer?.isLoading ?? false
export const errorSelector = (state: IStore) => state.sortingQuizThemeReducer?.error
