import {IStore} from "app/providers/store";

export const quizzesSelector = (state: IStore) => state.quizReducer?.quizzes || {};
export const isLoadingSelector = (state: IStore) => state.quizReducer?.isLoading || false;
export const errorSelector = (state: IStore) => state.quizReducer?.error;