import {IStore} from "app/providers/store";

export const nicknameSelector = (state: IStore) => state.formAuthReducer?.nicknameField || "";
export const usernameSelector = (state: IStore) => state.formAuthReducer?.usernameField || "";
export const passwordSelector = (state: IStore) => state.formAuthReducer?.passwordField || "";
export const dateBirthdaySelector = (state: IStore) => state.formAuthReducer?.dateBirthdayField || "";
export const isLoadingSelector = (state: IStore) => state.formAuthReducer?.isLoading || false;
export const errorSelector = (state: IStore) => state.formAuthReducer?.error || "";