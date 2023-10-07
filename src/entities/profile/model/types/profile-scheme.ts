export interface IProfile{
    id: string,
    authId: string,
    avatar: string,
    nickname: string,
    status: string,
    description: string,
    dateBirthday: string,
}

export interface IProfileScheme {
    profile?: IProfile;
    isLoading: boolean,
    error: string | undefined,
}