import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store/config/types.ts";
import {AUTH, PROFILE} from "shared/api/consts.ts";
import {IAuthData, saveAuthData} from "entities/auth";
import {isValidUsername} from "features/auth/lib/utils/isValidUsername.ts";
import {isValidPassword} from "features/auth/lib/utils/isValidPassword.ts";

export const regThunk = createAsyncThunk<IAuthData, void, IThunk>("auth/reg",
    async (_, thunkAPI) => {
        const {
            passwordField = "",
            usernameField = "",
            nicknameField = "",
            dateBirthdayField = ""
        } = thunkAPI.getState().formAuthReducer || {};

        try {
            isValidUsername(usernameField);
            isValidPassword(passwordField);

            const auth = await thunkAPI.extra.api.get<IAuthData[]>(AUTH + `?username=${usernameField}`)
                .then(res => res.data[0]);

            if(auth !== undefined)
                throw new Error("username уже занят");

            const responseAuth = await thunkAPI.extra.api.post<IAuthData>(AUTH, {
                password: passwordField,
                username: usernameField,
            })

            await thunkAPI.extra.api.post(PROFILE, {
                authId: responseAuth.data.id,
                avatar: "",
                nickname: nicknameField,
                dateBirthday: dateBirthdayField,
            });

            thunkAPI.dispatch(saveAuthData(responseAuth.data));
            return responseAuth.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })