import React from 'react';
import {Provider} from "react-redux";
import {store} from "../config/store.ts";

interface IStoreProviderProps {
    children: React.ReactNode,
}

export const StoreProvider: React.FC<IStoreProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};