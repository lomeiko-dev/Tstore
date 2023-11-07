import { IResultQuiz } from 'entities/result-quiz'

export interface IResultProps extends Omit<IResultQuiz, 'id_user'> {
  nameTest: string
}
