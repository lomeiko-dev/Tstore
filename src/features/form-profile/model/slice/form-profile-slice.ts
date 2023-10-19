import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {changeProfileThunk} from "../services/change-profile-thunk.ts";
import {IFormProfileScheme} from "../types/form-profile.ts";
import {IProfile} from "entities/user";

const initialState: IFormProfileScheme = {
    profileDetails: undefined,
    isLoading: false,
    error: undefined,
}

const formProfileSlice = createSlice({
    name: "form-profile",
    initialState: initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IProfile>) => {
            state.profileDetails = action.payload;
        },
        changeAvatar: (state, action: PayloadAction<string>) => {
            if(state.profileDetails !== undefined)
                state.profileDetails.avatar = action.payload;
        },
        changeName: (state, action: PayloadAction<string>) => {
            if(state.profileDetails !== undefined)
                state.profileDetails.nickname = action.payload;

        },
        changeStatus: (state, action: PayloadAction<string>) => {
            if(state.profileDetails !== undefined)
                state.profileDetails.status = action.payload;
        },
        changeDescription: (state, action: PayloadAction<string>) => {
            if(state.profileDetails !== undefined)
                state.profileDetails.description = action.payload;
        },
        setError: (state, action: PayloadAction<string | undefined>) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(changeProfileThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(changeProfileThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(changeProfileThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const formProfileReducer = formProfileSlice.reducer;

export const {setError,
            changeDescription,
            changeStatus,
            changeName,
            changeAvatar,
            setProfile} = formProfileSlice.actions;