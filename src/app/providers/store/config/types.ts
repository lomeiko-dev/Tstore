import {AxiosInstance} from "axios";

import { IAuthScheme } from "entities/auth";
import {IFormAuthScheme} from "features/auth";
import {IAuthPageScheme} from "pages/authenticate";
import {IProfileScheme} from "entities/profile";
import {IFormProfileScheme} from "features/form-profile";
import {IUserScheme} from "entities/user";

export interface IStore {
    authReducer: IAuthScheme,

    //async reducers
    formAuthReducer?: IFormAuthScheme,
    authPageReducer?: IAuthPageScheme,
    profileReducer?: IProfileScheme,
    formProfileReducer?: IFormProfileScheme,
    userReducer?: IUserScheme
}
export type storeKey = keyof IStore;

interface IThunkExtra {
    api: AxiosInstance,

}
export interface IThunk {
    extra: IThunkExtra,
    dispatch: appDispatch,
    rejectValue: string,
    state: rootState,
}