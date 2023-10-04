import {IStore} from "app/providers/store";

export const isAnimRotateFormSelector = (state: IStore) => state.authPageReducer?.isAnimRotateForm || false;
export const namedFormSelector = (state: IStore) => state.authPageReducer?.namedForm || "Авторизация";
export const isRegFormSelector = (state: IStore) => state.authPageReducer?.isRegForm || false;
export const textChangeFormSelector = (state: IStore) => state.authPageReducer?.textChangeForm || "Создать новый аккаунт";