import { questionResult } from 'entities/result-quiz'

export interface IPassingQuizScheme {
  questionResults: questionResult[]
  indexQuestion: number
}
