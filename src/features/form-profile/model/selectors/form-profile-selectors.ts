import {IStore} from "app/providers/store";

export const isLoadingSelector = (state: IStore) => state.profileReducer?.isLoading || false;
export const errorSelector = (state: IStore) => state.formProfileReducer?.error;
export const profileDetailsSelector = (state: IStore) => state.formProfileReducer?.profileDetails;