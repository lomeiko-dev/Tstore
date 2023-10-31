import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IQuizQuestion} from "entities/quiz";
import {IFormQuizScheme} from "../types/form-quiz-scheme.ts";
import {createQuizThunk} from "../services/create-quiz-thunk.ts";

const initialState: IFormQuizScheme = {
    quizDetails: {
        name: "",
        theme: "",
        icon: "",
        description: "",
        tags: "",
        dateCreate: "",
        questions: [],
        id_user: ""
    },
    isLoading: false,
    error: undefined,
    errorNameQuiz: undefined,
    errorThemeQuiz: undefined,
}

const formQuizSlice = createSlice({
    name: "form-quiz",
    initialState: initialState,
    reducers: {
        changeQuizName: (state, action: PayloadAction<string>) => {
            if(state.quizDetails.name.length > 50)
                state.errorNameQuiz = "Название теста не может быть больше 50 символов";
            else
                state.errorNameQuiz = undefined;

            state.quizDetails.name = action.payload;
        },
        changeQuizDescription: (state, action: PayloadAction<string>) => {
            state.quizDetails.description = action.payload;
        },
        changeQuizTheme: (state, action: PayloadAction<string>) => {
            if(state.quizDetails.theme.length > 30)
                state.errorThemeQuiz = "Тема теста не может быть больше 30 символов";
            else
                state.errorThemeQuiz = undefined

            state.quizDetails.theme = action.payload;
        },
        changeQuizTags: (state, action: PayloadAction<string>) => {
            state.quizDetails.tags = action.payload;
        },
        changeQuizIcon: (state, action: PayloadAction<string>) => {
            state.quizDetails.icon = action.payload;
        },
        setQuestions: (state, action: PayloadAction<IQuizQuestion[]>) => {
            state.quizDetails.questions = action.payload;
        },
        setAuthor: (state, action: PayloadAction<string>) => {
            state.quizDetails.id_user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createQuizThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(createQuizThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(createQuizThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const formQuizReducer = formQuizSlice.reducer;
export const {changeQuizName,
              changeQuizIcon,
              changeQuizDescription,
              changeQuizTags,
              changeQuizTheme,
              setQuestions,
              setAuthor} = formQuizSlice.actions;