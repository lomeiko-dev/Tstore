import { IStore } from 'app/providers/store'
import { createSelector } from '@reduxjs/toolkit'

export const indexQuestionSelector = (state: IStore) => state.passingQuizReducer?.indexQuestion ?? 1
const selectQuestionResult = (state: IStore) => state.passingQuizReducer

export const questionResultSelector = createSelector(
  selectQuestionResult,
  (passingQuizReducer) => passingQuizReducer?.questionResults ?? []
)
export const questionAnswerSelector = (state: IStore, indexQuestion: number) => {
  const question = state.passingQuizReducer?.questionResults[indexQuestion]

  if (question === undefined) { return [] }

  return question.answers
}
