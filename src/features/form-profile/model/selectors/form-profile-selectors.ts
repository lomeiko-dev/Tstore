import {IStore} from "app/providers/store";

export const isLoadingSelector = (state: IStore) => state.formProfileReducer?.isLoading || false;
export const errorsSelector = (state: IStore) => [
    state.formProfileReducer?.error,
    state.formProfileReducer?.errorStatus,
    state.formProfileReducer?.errorDescription,
    state.formProfileReducer?.errorNickName,
];
export const profileDetailsSelector = (state: IStore) => state.formProfileReducer?.profileDetails;