import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProfile, IProfileScheme} from "../types/profile-scheme.ts";
import {uploadProfileThunk} from "entities/profile";

const initialState: IProfileScheme = {
    profile: undefined,
    isLoading: false,
    error: undefined,
}

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        uploadProfile: (state, action: PayloadAction<IProfile>) => {
            state.profile = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadProfileThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(uploadProfileThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(uploadProfileThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const profileReducer = profileSlice.reducer;
export const {uploadProfile} = profileSlice.actions;