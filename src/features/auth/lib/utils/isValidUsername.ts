export const isValidUsername = (username: string) => {
    if(username !== username.replace(/\s/g, ""))
        throw new Error("username не должен содержать пробелы");
}