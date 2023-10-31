export interface IPayloadActionQuestion<T> {
  index: number
  value: T
}
export interface IPayloadActionQuestionNonValue {
  index: number
}

export interface IPayloadActionAnswer<T> {
  indexQuestion: number
  indexAnswer: number
  value: T
}
export interface IPayloadActionAnswerNonValue {
  indexQuestion: number
  indexAnswer: number
}
