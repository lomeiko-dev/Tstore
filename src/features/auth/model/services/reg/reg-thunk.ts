import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {AUTH, PROFILE} from "shared/api/consts.ts";
import {IAuthData, saveAuthData} from "entities/auth";

import {isValidUsername} from "entities/auth";
import {isValidPassword} from "entities/auth";
import {NavigateFunction} from "react-router-dom";
import {pathRoutes} from "shared/config/routes";
import {isValidNickName} from "entities/profile";

interface IRegThunkProps {
    navigate: NavigateFunction,
}

export const regThunk = createAsyncThunk<IAuthData, IRegThunkProps, IThunk>("auth/reg",
    async ({navigate}, thunkAPI) => {
        const {
            passwordField = "",
            usernameField = "",
            nicknameField = "",
            dateBirthdayField = ""
        } = thunkAPI.getState().formAuthReducer || {};

        try {
            isValidUsername(usernameField, message => {throw new Error(message)});
            isValidPassword(passwordField, message => {throw new Error(message)});

            const resultValidNickName = isValidNickName(nicknameField);

            if(!resultValidNickName.isSuccessfully)
                throw new Error(resultValidNickName.error);

            const auth = await thunkAPI.extra.api.get<IAuthData[]>(AUTH + `?username=${usernameField}`)
                .then(res => res.data[0]);

            if(auth !== undefined)
                throw new Error("username уже занят");

            const responseAuth = await thunkAPI.extra.api.post<IAuthData>(AUTH, {
                password: passwordField,
                username: usernameField,
            })

            const responseProfile = await thunkAPI.extra.api.post(PROFILE, {
                authId: responseAuth.data.id,
                avatar: "",
                status: "",
                description: "",
                nickname: nicknameField,
                dateBirthday: dateBirthdayField,
            });

            thunkAPI.dispatch(saveAuthData(responseAuth.data));
            navigate(pathRoutes.profile.name + `/${responseProfile.data.id}`);
            return responseAuth.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })