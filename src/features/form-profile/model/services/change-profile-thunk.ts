import {createAsyncThunk} from "@reduxjs/toolkit";
import {IThunk} from "app/providers/store";
import {PROFILE} from "shared/api/consts.ts";
import {IProfile, uploadProfile} from "entities/profile";

export const changeProfileThunk = createAsyncThunk<IProfile, void, IThunk>("change-profile",
    async (_, thunkAPI) => {
        const profileDetails = thunkAPI.getState().formProfileReducer?.profileDetails;
        try {
            if(profileDetails === undefined)
                throw new Error("Профиль не найден");

            const response =  await thunkAPI.extra.api.put<IProfile>(PROFILE + `/${profileDetails.id}`, profileDetails);
            thunkAPI.dispatch(uploadProfile(response.data))
            return response.data;
        }
        catch (error){
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    })