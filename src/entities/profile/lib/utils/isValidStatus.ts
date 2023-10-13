import {IValidateResult} from "../types/validate-result.ts";

export const isValidStatus = (status: string): IValidateResult => {
    if(status.length > 50)
        return {error: "Статус не может быть больше 50 символов", isSuccessfully: false}

    return {error: "", isSuccessfully: true}
}