import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuiz, IQuizScheme} from "../types/quiz-scheme.ts";
import {uploadQuizThunk} from "../services/upload-quiz-thunk.ts";

const initialState: IQuizScheme = {
    quizzes: [],
    totalCount: 0,
    page: 1,
    limit: 9,
    isLoading: false,
    error: undefined
}

const quizSlice = createSlice({
    name: "quiz",
    initialState: initialState,
    reducers: {
        uploadQuizzes: (state, action: PayloadAction<{data: IQuiz[], count: number}>) => {
            state.quizzes = [...state.quizzes, ...action.payload.data];
            state.totalCount = action.payload.count;
        },
        incrementPage: (state) => {
            state.page += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadQuizThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(uploadQuizThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(uploadQuizThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const quizReducer = quizSlice.reducer;
export const {uploadQuizzes, incrementPage} = quizSlice.actions;