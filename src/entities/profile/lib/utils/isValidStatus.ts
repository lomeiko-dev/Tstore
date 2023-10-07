export const isValidStatus = (status: string, errorFn: (message: string) => void, clearError?: () => void) => {
    if(status.length > 50){
        errorFn("Статус не может быть больше 50 символов");
    }
    else {
        {clearError && clearError();}
    }
}