import { type IQuiz, type IQuizQuestion } from 'entities/quiz'

type IQuizNonId = Record<string, unknown> & Omit<IQuiz, 'id' | 'id_use'>

export interface IFormQuizScheme {
  quizDetails: IQuizNonId
  isLoading: boolean
  error: string | undefined
  errorNameQuiz: string | undefined
  errorThemeQuiz: string | undefined
}

export interface IFormQuizQuestionsScheme {
  questions: IQuizQuestion[]
}
