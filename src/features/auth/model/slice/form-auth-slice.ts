import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFormAuthScheme} from "../types/form-auth-scheme.ts";
import {authExtra} from "../services/auth/auth-extra.ts";
import {regExtra} from "../services/reg/reg-extra.ts";

const initialState: IFormAuthScheme = {
    nicknameField: "",
    usernameField: "",
    passwordField: "",
    dateBirthdayField: "",
    isLoading: false,
    error: undefined,
}

const formAuthSlice = createSlice({
    name: "form-auth",
    initialState: initialState,
    reducers: {
        updateNicknameField: (state, action: PayloadAction<string>) => {
            state.nicknameField = action.payload;
        },
        updateUsernameField: (state, action: PayloadAction<string>) => {
            state.usernameField = action.payload;
        },
        updatePasswordField: (state, action: PayloadAction<string>) => {
            state.passwordField = action.payload;
        },
        updateDateBirthdayField: (state, action: PayloadAction<string>) => {
            state.dateBirthdayField = action.payload;
        },
        clearAllField: (state) => {
            state.usernameField = "";
            state.passwordField = "";
            state.nicknameField = "";
            state.dateBirthdayField = "";
        }
    },
    extraReducers: (builder) => {
        authExtra(builder);
        regExtra(builder);
    }
});

export const formAuthReducer = formAuthSlice.reducer;
export const {updateNicknameField,
    updateDateBirthdayField,
    updateUsernameField,
    updatePasswordField,
    clearAllField} = formAuthSlice.actions;