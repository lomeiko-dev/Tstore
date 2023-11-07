import { type IStore } from 'app/providers/store'
import { createSelector } from '@reduxjs/toolkit'

export const isLoadingSelector = (state: IStore) => state.formProfileReducer?.isLoading ?? false
const selectFormProfileReducer = (state: IStore) => state.formProfileReducer

export const errorSelector = createSelector(
  selectFormProfileReducer,
  (formProfileReducer) => [
    formProfileReducer?.error,
    formProfileReducer?.errorStatus,
    formProfileReducer?.errorDescription,
    formProfileReducer?.errorNickName
  ]
)
export const profileDetailsSelector = (state: IStore) => state.formProfileReducer?.profileDetails
