export interface IQuizQuestion {
  question: string
  url: string
  illustrations: string[]
  answers: IAnswer[]
}

export interface IAnswer {
  isCorrect: boolean
  answer: string
  url: string
  score: number
  illustrations: string[]
}

export interface IQuiz {
  id: string
  id_user: string
  name: string
  icon: string
  description: string
  tags: string
  theme: string
  questions: IQuizQuestion[]
  dateCreate: string
}

export interface IQuizScheme {
  quizzes: IQuiz[]
  totalCount: number
  page: number
  limit: number
  isLoading: boolean
  error?: string
}

export interface IQuizDetailsScheme {
  quiz: IQuiz | undefined
  isLoading: boolean
  error?: string
}
