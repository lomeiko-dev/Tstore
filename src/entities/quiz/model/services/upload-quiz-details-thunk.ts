import {createAsyncThunk} from "@reduxjs/toolkit";
import {IQuiz} from "../types/quiz-scheme.ts";
import {IThunk} from "app/providers/store";
import {QUIZ} from "shared/api/consts.ts";
import {setQuiz} from "../slice/quiz-details-slice.ts";

export const uploadQuizDetailsThunk = createAsyncThunk<IQuiz[], string, IThunk>("quiz/upload-details",
    async (id, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get(QUIZ + `?id=${id}`);

            thunkAPI.dispatch(setQuiz(response.data));

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    });