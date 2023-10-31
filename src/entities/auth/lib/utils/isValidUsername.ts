export const isValidUsername = (username: string, errorFn: (message: string) => void) => {
  if (username !== username.replace(/\s/g, '')) {
    errorFn('username не должен содержать пробелы')
  }

  if (!(/[a-z]/i.exec(username))) {
    errorFn('username должен содержать в себе только латинские символы')
  }

  if (username.length > 30 || username.length < 5) {
    errorFn('username должен содержать минимум 5 символов, максимум 30')
  }
}
