import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {IFormAuthScheme} from "../../types/form-auth-scheme.ts";
import {regThunk} from "../reg/reg-thunk.ts";

export const regExtra = (builder: ActionReducerMapBuilder<IFormAuthScheme>) => {
    builder
        .addCase(regThunk.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(regThunk.fulfilled, (state) => {
            state.isLoading = false;
            state.error = undefined;
        })
        .addCase(regThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.passwordField = "";
            state.usernameField = "";
        })
}