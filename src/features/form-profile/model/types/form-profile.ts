import {IProfile} from "entities/user";

export interface IFormProfileScheme {
    profileDetails: IProfile | undefined
    isLoading: boolean,
    error: string | undefined,
}