import { IStore } from 'app/providers/store'

export const themesSelector = (state: IStore) => state.sortingQuizThemeReducer?.themes ?? []
export const isAllThemesSelector = (state: IStore) => state.sortingQuizThemeReducer?.isAllThemes ?? false
export const isLoadingSelector = (state: IStore) => state.sortingQuizThemeReducer?.isLoading ?? false
export const errorSelector = (state: IStore) => state.sortingQuizThemeReducer?.error
