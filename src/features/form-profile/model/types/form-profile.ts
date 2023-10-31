import { type IProfile } from 'entities/user'

export interface IFormProfileScheme {
  profileDetails: IProfile | undefined
  isLoading: boolean
  error: string | undefined
  errorNickName: string | undefined
  errorDescription: string | undefined
  errorStatus: string | undefined
}
