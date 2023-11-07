import { IStore } from 'app/providers/store'

export const resultQuizSelector = (state: IStore) => state.resultQuizReducer?.results ?? []
export const totalCountSelector = (state: IStore) => state.resultQuizReducer?.totalCount ?? 0
export const isLoadingSelector = (state: IStore) => state.resultQuizReducer?.isLoading ?? false
export const errorSelector = (state: IStore) => state.resultQuizReducer?.error
