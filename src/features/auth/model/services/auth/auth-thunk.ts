import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store/config/types.ts";
import {AUTH} from "shared/api/consts.ts";
import {IAuthData, saveAuthData} from "entities/auth";

export const authThunk = createAsyncThunk<IAuthData, void, IThunk>("auth",
    async (_, thunkAPI) => {
        const {
            passwordField = "",
            usernameField = ""
        } = thunkAPI.getState().formAuthReducer || {};

        try {
            const auth = await thunkAPI.extra.api.get<IAuthData[]>(AUTH + `?username=${usernameField}&password=${passwordField}`)
                .then(res => res.data[0]);

            if(auth === undefined)
                throw new Error("Имя пользователя, или пароль не верны");

            thunkAPI.dispatch(saveAuthData(auth));

            return auth;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })