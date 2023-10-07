export const isValidPassword = (password: string, errorFn: (message: string) => void) => {
    if(password.length < 8){
        errorFn("Пароль должен содержать больше 8 символов");
    }
}