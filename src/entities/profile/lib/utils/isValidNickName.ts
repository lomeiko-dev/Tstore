import {IValidateResult} from "../types/validate-result.ts";


const ERROR_MESSAGE = "Имя не может быть больше 30 символов, или меньше 5";
export const isValidNickName = (nickname: string): IValidateResult => {
    if(nickname.length > 30)
        return {error: ERROR_MESSAGE, isSuccessfully: false}
    else if(nickname.length < 5)
        return {error: ERROR_MESSAGE, isSuccessfully: true}
    else
        return {error: "", isSuccessfully: true}
}