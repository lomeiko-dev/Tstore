import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {changeProfileThunk} from "../services/change-profile-thunk.ts";
import {IFormProfileScheme} from "../types/form-profile.ts";
import {IProfile} from "entities/user";

const initialState: IFormProfileScheme = {
    profileDetails: undefined,
    isLoading: false,
    error: undefined,
    errorNickName: undefined,
    errorDescription: undefined,
    errorStatus: undefined,
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
            if(state.profileDetails !== undefined){
                if(state.profileDetails.nickname.length > 30 || state.profileDetails.nickname.length < 5)
                    state.errorNickName = "Имя не может быть больше 30 символов, или меньше 5";
                else
                    state.errorNickName = undefined;

                state.profileDetails.nickname = action.payload;
            }

        },
        changeStatus: (state, action: PayloadAction<string>) => {
            if(state.profileDetails !== undefined) {
                if(state.profileDetails.status.length > 50)
                    state.errorStatus = "Статус не может быть больше 50 символов";
                else
                    state.errorStatus = undefined;

                state.profileDetails.status = action.payload;
            }
        },
        changeDescription: (state, action: PayloadAction<string>) => {
            if(state.profileDetails !== undefined){
                if(state.profileDetails.description.length > 200)
                    state.errorDescription = "Описание не может быть больше 200 символов";
                else
                    state.errorDescription = undefined;

                state.profileDetails.description = action.payload;
            }
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