import { IResultQuiz } from '../../model/types/result-quiz-scheme.ts'

export interface IResultProps extends Omit<IResultQuiz, 'id_user'> {
  nameTest: string
}
