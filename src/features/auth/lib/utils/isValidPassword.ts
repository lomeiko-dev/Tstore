export const isValidPassword = (password: string) => {
    if(password.length < 8){
        throw new Error("Пароль должен содержать больше 8 символов");
    }
}