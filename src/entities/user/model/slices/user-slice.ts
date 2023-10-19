import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserScheme} from "../../../user/model/types/user-scheme.ts";
import {IProfile} from "../types/user-scheme.ts";
import {uploadUsersThunk} from "../services/upload-users-thunk.ts";

const initialState: IUserScheme = {
    users: undefined,
    sortQuery: "",
    page: 1,
    limit: 3,
    totalCount: 0,
    isLoading: false,
    error: undefined
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        usersReset: (state) => {
          state.users = undefined;
          state.page = 1;
          state.sortQuery = "";
        },
        uploadUsers: (state, action: PayloadAction<{data: IProfile[], count: number}>) => {
            state.users = [...state.users || [], ...action.payload.data];
            state.totalCount = action.payload.count;
        },
        updateSortQuery: (state, action: PayloadAction<string>) => {
            state.sortQuery = action.payload;
        },
        incrementPage: (state) => {
            state.page = state.page + 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadUsersThunk.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(uploadUsersThunk.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
            })
            .addCase(uploadUsersThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const userReducer = userSlice.reducer;
export const {uploadUsers, incrementPage, usersReset, updateSortQuery} = userSlice.actions;
