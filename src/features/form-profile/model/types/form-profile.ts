import {IProfile} from "entities/profile";

export interface IFormProfileScheme {
    profileDetails?: IProfile
    isLoading: boolean,
    error: string | undefined,
}