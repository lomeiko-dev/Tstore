import React, {useEffect} from "react";
import {Reducer} from "@reduxjs/toolkit";
import {type storeKey, reducerManager} from "app/providers/store";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";

export interface IReducer {
    storeKey: storeKey,
    reducer: Reducer,
    save: boolean,
}

interface IReducerLoader {
    children: React.ReactNode;
    reducers: IReducer[],
}

export const ReducerLoader: React.FC<IReducerLoader> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        props.reducers.map(item => {
            if(reducerManager.getReducerMap()[item.storeKey] !== item.reducer){
                reducerManager.add(item.storeKey, item.reducer);
                dispatch({type: `@INIT ${item.storeKey}`});
            }
        })

        return () => {
            props.reducers.map(item => {
                if(!item.save){
                    reducerManager.remove(item.storeKey);
                    dispatch({type: `@REMOVE ${item.storeKey}`});
                }
            })
        }
    }, []);

    return props.children
};