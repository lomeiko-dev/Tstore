import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuiz, IQuizScheme} from "../types/quiz-scheme.ts";

const initialState: IQuizScheme = {
    quizzes: [],
    page: 1,
    limit: 20,
    isLoading: false,
    error: undefined
}

const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,
    reducers: {
        uploadQuizzes: (state, action: PayloadAction<IQuiz[]>) => {
            state.quizzes = [...state.quizzes, ...action.payload];
        },
        incrementPage: (state) => {
            state.page += 1;
        }
    }
})

export const quizReducer = quizSlice.reducer;
export const {uploadQuizzes, incrementPage} = quizSlice.actions;