export interface IAuthPageScheme {
  theme: 'theme_auth' | 'theme_reg'
  flip: boolean
  isRegForm: boolean
  namedForm: 'Авторизация' | 'Регистрация'
  textChangeForm: 'Создать новый аккаунт' | 'Уже существует аккаунт?'
}
