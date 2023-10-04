export interface IAuthData {
    id: string,
    username: string,
    password: string,
}

export interface IAuthScheme {
    authData?: IAuthData,
}