export const isValidNickName = (nickname: string, errorFn: (message: string) => void, clearError?: () => void) => {
    if(nickname.length > 30 || nickname.length < 5)
        errorFn("Имя не может быть меньше 5 символов и больше 30");
    else
        {clearError && clearError();}

}