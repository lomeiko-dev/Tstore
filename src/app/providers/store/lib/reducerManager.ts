import {AnyAction, combineReducers, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {IStore, storeKey} from "../config/types.ts";

export function createReducerManager(initialReducers: ReducersMapObject<IStore>) {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: storeKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: IStore, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (let key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }

            return combinedReducer(state, action)
        },
        add: (key: storeKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer

            combinedReducer = combineReducers(reducers)
        },
        remove: (key: storeKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        }
    }
}