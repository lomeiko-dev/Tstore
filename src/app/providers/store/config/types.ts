import { type AxiosInstance } from 'axios'

import { type IAuthScheme } from 'entities/auth'
import { type IFormAuthScheme } from 'features/auth'
import { type IAuthPageScheme } from 'pages/authenticate'
import { type IProfileScheme, type IUserScheme } from 'entities/user'
import { type IFormProfileScheme } from 'features/form-profile'

import { type IQuizDetailsScheme, type IQuizScheme } from 'entities/quiz'
import { type IFormQuizQuestionsScheme, type IFormQuizScheme } from 'features/form-quiz'

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
