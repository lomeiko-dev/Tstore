import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthData, IAuthScheme} from "../types/authscheme.ts";
import {authData_key} from "shared/config/local-storage";

const initialState: IAuthScheme = {
    authData: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        saveAuthData: (state, action: PayloadAction<IAuthData>) => {
            localStorage.setItem(authData_key, JSON.stringify(action.payload));
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const authData = localStorage.getItem(authData_key) || "undefined";
            if(authData !== "undefined")
                state.authData = JSON.parse(authData);
        },
        removeAuthData: (state) => {
            localStorage.removeItem(authData_key);
            state.authData = undefined;
        }
    }
});

export const authReducer = authSlice.reducer;
export const {saveAuthData, removeAuthData, initAuthData} = authSlice.actions;