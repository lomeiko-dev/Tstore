import { type IStore } from 'app/providers/store'

export const quizzesSelector = (state: IStore) => state.quizReducer?.quizzes
export const sortQuerySelector = (state: IStore) => state.quizReducer?.sortQuery ?? ''
export const totalCountSelector = (state: IStore) => state.quizReducer?.totalCount ?? 0
export const limitSelector = (state: IStore) => state.quizReducer?.limit ?? 0
export const isLoadingSelector = (state: IStore) => state.quizReducer?.isLoading ?? false
export const errorSelector = (state: IStore) => state.quizReducer?.error
