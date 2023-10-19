import {IStore} from "app/providers/store";

export const quizDetailsSelector = (state: IStore) => state.quizDetailsReducer?.quiz || {};
export const isLoadingSelector = (state: IStore) => state.quizDetailsReducer?.isLoading || false;
export const errorSelector = (state: IStore) => state.quizDetailsReducer?.error;