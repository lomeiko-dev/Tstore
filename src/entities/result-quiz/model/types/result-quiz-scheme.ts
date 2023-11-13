import { IQuizQuestion } from 'entities/quiz'

export type questionResult = {
  answers: boolean[]
}

export interface IResultQuiz {
  id_user: string
  percent_passing: number
  value_correct_answer: number
  value_not_correct_answer: number
  scores: number
  nameTest: string
  questions: IQuizQuestion[]
  answers: questionResult[]
}

export interface IResultQuizScheme {
  results: IResultQuiz[]
  limit: number
  page: number
  totalCount: number
  isLoading: boolean
  error?: string
}
