export const isValidDescription = (description: string, errorFn: (message: string) => void, clearError?: () => void) => {
    if(description.length > 200){
        errorFn("Описание не может быть больше 200 символов");
    }
    else {
        {clearError && clearError();}
    }
}