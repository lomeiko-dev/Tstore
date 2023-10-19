import {AxiosInstance} from "axios";

import { IAuthScheme } from "entities/auth";
import {IFormAuthScheme} from "features/auth";
import {IAuthPageScheme} from "pages/authenticate";
import {IProfileScheme} from "entities/user";
import {IFormProfileScheme} from "features/form-profile";
import {IUserScheme} from "entities/user";
import {IQuizDetailsScheme, IQuizScheme} from "entities/quiz";

export interface IStore {
    authReducer: IAuthScheme,

    //async reducers
    formAuthReducer?: IFormAuthScheme,
    authPageReducer?: IAuthPageScheme,
    profileReducer?: IProfileScheme,
    formProfileReducer?: IFormProfileScheme,
    userReducer?: IUserScheme,
    quizReducer?: IQuizScheme,
    quizDetailsReducer?: IQuizDetailsScheme,
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