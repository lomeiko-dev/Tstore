import {IStore} from "app/providers/store";

export const usersSelector = (state: IStore) => state.userReducer?.users;
export const totalCountSelector = (state: IStore) => state.userReducer?.totalCount || 0;
export const sortQuerySelector = (state: IStore) => state.userReducer?.sortQuery || "";
export const pageSelector = (state: IStore) => state.userReducer?.page || 0;
export const limitSelector = (state: IStore) => state.userReducer?.limit || 0;
export const isLoadingSelector = (state: IStore) => state.userReducer?.isLoading || false;
export const errorSelector = (state: IStore) => state.userReducer?.error;