import { IStore } from 'app/providers/store'

export const indexQuestionSelector = (state: IStore) => state.passingQuizReducer?.indexQuestion ?? 1
export const questionResultSelector = (state: IStore) => state.passingQuizReducer?.questionResults ?? []
export const questionAnswerSelector = (state: IStore, indexQuestion: number) => {
  const question = state.passingQuizReducer?.questionResults[indexQuestion]

  if (question === undefined) { return [] }

  return question.answers
}
