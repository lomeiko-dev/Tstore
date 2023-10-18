import {createAsyncThunk} from "@reduxjs/toolkit";
import {IQuiz} from "../types/quiz-scheme.ts";
import {IThunk} from "app/providers/store";
import {QUIZ} from "shared/api/consts.ts";
import {incrementPage, uploadQuizzes} from "../slice/quiz-slice.ts";

export const uploadQuizThunk = createAsyncThunk<IQuiz[], void, IThunk>("quiz/upload",
    async (_, thunkAPI) => {
        const {page, limit} = thunkAPI.getState().quizReducer || {};
        try {
            const response = await thunkAPI.extra.api.get(QUIZ + `?_page=${page}&_limit=${limit}`);

            thunkAPI.dispatch(uploadQuizzes(response.data));
            thunkAPI.dispatch(incrementPage());

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    });