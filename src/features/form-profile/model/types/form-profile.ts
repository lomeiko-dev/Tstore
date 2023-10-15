import {IProfile} from "entities/profile";

export interface IFormProfileScheme {
    profileDetails: IProfile | undefined
    isLoading: boolean,
    error: string | undefined,
}