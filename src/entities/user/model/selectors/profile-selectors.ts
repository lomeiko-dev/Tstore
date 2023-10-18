import {IStore} from "app/providers/store";

export const profileSelector = (state: IStore) => state.profileReducer?.profile;
export const isLoadingSelector = (state: IStore) => state.profileReducer?.isLoading || false;
export const errorSelector = (state: IStore) => state.profileReducer?.error;