export type questionResult = {
  answers: boolean[]
}

export interface IPassingQuizScheme {
  questionResults: questionResult[]
  indexQuestion: number
}
