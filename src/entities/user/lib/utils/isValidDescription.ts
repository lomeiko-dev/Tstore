import {IValidateResult} from "../types/vlidate-result.ts";


export const isValidDescription = (description: string): IValidateResult => {
    if(description.length > 200)
        return {error: "Описание не может быть больше 200 символов", isSuccessfully: false}

    return {error: "", isSuccessfully: true}

}