export interface IProfile {
  id: string
  authId: string
  avatar: string
  nickname: string
  status: string
  description: string
  dateBirthday: string
}

export interface IProfileScheme {
  profile?: IProfile
  isLoading: boolean
  error: string | undefined
}

export interface IUserScheme {
  users?: IProfile[]
  sortQuery: string
  totalCount: number
  page: number
  limit: number
  isLoading: boolean
  error: string | undefined
}
