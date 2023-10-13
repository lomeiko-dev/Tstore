import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {IProfile} from "entities/profile";
import {PROFILE} from "shared/api/consts.ts";
import {incrementPage, uploadUsers} from "../slice/user-slice.ts";

export const uploadUsersThunk = createAsyncThunk<IProfile[], void, IThunk>("users/upload",
    async (_, thunkAPI) => {
        const {page, limit, sortQuery} = thunkAPI.getState().userReducer || {};
        try {
            const response =
                await thunkAPI.extra.api.get<IProfile[]>(PROFILE + `?${sortQuery}_page=${page}&_limit=${limit}`);

            thunkAPI.dispatch(uploadUsers({
                data: response.data,
                count: response.headers["x-total-count"]
            }));
            thunkAPI.dispatch(incrementPage());

            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })