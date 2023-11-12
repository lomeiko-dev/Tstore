import { type AxiosInstance } from 'axios'

import { type IAuthScheme } from 'entities/auth'
import { type IFormAuthScheme } from 'features/auth'
import { type IAuthPageScheme } from 'pages/authenticate'
import { type IProfileScheme, type IUserScheme } from 'entities/user'
import { type IFormProfileScheme } from 'features/form-profile'

import { type IQuizDetailsScheme, type IQuizScheme } from 'entities/quiz'
import { type IFormQuizQuestionsScheme, type IFormQuizScheme } from 'features/form-quiz'
import { type IPassingQuizScheme } from 'features/passing-quiz'
import { type IResultQuizScheme } from 'entities/result-quiz'
import { ISortingQuizThemeScheme } from 'features/sorting-quiz-theme'

export interface IStore {
  authReducer: IAuthScheme

  // Async reducers
  formAuthReducer?: IFormAuthScheme
  authPageReducer?: IAuthPageScheme
  profileReducer?: IProfileScheme
  formProfileReducer?: IFormProfileScheme
  userReducer?: IUserScheme
  quizReducer?: IQuizScheme
  quizDetailsReducer?: IQuizDetailsScheme
  formQuizReducer?: IFormQuizScheme
  formQuizQuestionReducer?: IFormQuizQuestionsScheme
  passingQuizReducer?: IPassingQuizScheme
  resultQuizReducer?: IResultQuizScheme
  sortingQuizThemeReducer?: ISortingQuizThemeScheme
}
export type storeKey = keyof IStore

interface IThunkExtra {
  api: AxiosInstance

}
export interface IThunk {
  extra: IThunkExtra
  dispatch: appDispatch
  rejectValue: string
  state: rootState
}
