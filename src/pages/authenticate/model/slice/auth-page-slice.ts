import {createSlice} from "@reduxjs/toolkit";
import {IAuthPageScheme} from "../types/auth-page-scheme.ts";

const initialState: IAuthPageScheme = {
    isRegForm: false,
    namedForm: "Авторизация",
    textChangeForm: "Создать новый аккаунт",
}

const authPageSlice = createSlice({
    name: "auth-page",
    initialState: initialState,
    reducers: {
        toggleForm: (state) => {
            state.isRegForm = !state.isRegForm;
            state.namedForm = state.isRegForm ? "Регистрация" : "Авторизация";
            state.textChangeForm = state.isRegForm ? "Уже существует аккаунт?" : "Создать новый аккаунт";
        }
    }
});

export const authPageReducer = authPageSlice.reducer;
export const {toggleForm} = authPageSlice.actions;