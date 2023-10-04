import {AxiosInstance} from "axios";

import { IAuthScheme } from "entities/auth";
import {IFormAuthScheme} from "features/auth";
import {IAuthPageScheme} from "pages/authenticate";


export interface IStore {
    authReducer: IAuthScheme,

    //async reducers
    formAuthReducer?: IFormAuthScheme,
    authPageReducer?: IAuthPageScheme,
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