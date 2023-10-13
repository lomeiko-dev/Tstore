import {IProfile} from "entities/profile";

export interface IUserScheme{
    users?: IProfile[],
    sortQuery: string,
    totalCount: number,
    page: number,
    limit: number,
    isLoading: boolean,
    error: string | undefined,
}