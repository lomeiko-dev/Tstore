import { type IStore } from 'app/providers/store'

export const namedFormSelector = (state: IStore) => state.authPageReducer?.namedForm ?? 'Авторизация'
export const themeSelector = (state: IStore) => state.authPageReducer?.theme ?? 'theme_auth'
export const flipSelector = (state: IStore) => state.authPageReducer?.flip ?? false
export const isRegFormSelector = (state: IStore) => state.authPageReducer?.isRegForm ?? false
export const textChangeFormSelector = (state: IStore) => state.authPageReducer?.textChangeForm ?? 'Создать новый аккаунт'
