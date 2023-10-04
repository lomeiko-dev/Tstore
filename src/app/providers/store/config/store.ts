import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {createReducerManager} from "../lib/reducerManager.ts";
import {authReducer} from "entities/auth";
import {apiInstance} from "shared/api/instance.ts";
import {IStore} from "./types.ts";

const rootReducers: ReducersMapObject<IStore> = {
    authReducer: authReducer,
}

export const reducerManager = createReducerManager(rootReducers);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStore>>,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument:{
                api: apiInstance,
            }
        }
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

