import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {QUIZ} from "shared/api/consts.ts";
import {IQuiz, removeQuiz} from "entities/quiz";

export const deleteQuizThunk = createAsyncThunk<IQuiz | undefined, string, IThunk>("quiz/delete",
    async (id, thunkAPI) => {
        try {
            const response =  await thunkAPI.extra.api.delete<IQuiz>(QUIZ + `/${id}`);
            thunkAPI.dispatch(removeQuiz(id));
            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })