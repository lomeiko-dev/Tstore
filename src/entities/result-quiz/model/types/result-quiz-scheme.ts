export interface IResultQuiz {
  id_user: string
  percent_passing: number
  value_correct_answer: number
  value_not_correct_answer: number
  scores: number
}

export interface IResultQuizScheme {
  results: IResultQuiz[]
  limit: number
  page: number
  totalCount: number
  isLoading: boolean
  error?: string
}
