import {IStore} from "app/providers/store";

export const quizNameSelector = (state: IStore) => state.formQuizReducer?.quizDetails.name || "";
export const quizDescriptionSelector = (state: IStore) => state.formQuizReducer?.quizDetails.description || "";
export const quizThemeSelector = (state: IStore) => state.formQuizReducer?.quizDetails.theme || "";
export const quizIconSelector = (state: IStore) => state.formQuizReducer?.quizDetails.icon || "";
export const quizTagsSelector = (state: IStore) => state.formQuizReducer?.quizDetails.tags || "";
export const isLoadingSelector = (state: IStore) => state.formQuizReducer?.isLoading || false;
export const errorsSelector = (state: IStore) => [
    state.formQuizReducer?.error,
    state.formQuizReducer?.errorThemeQuiz,
    state.formQuizReducer?.errorNameQuiz
];