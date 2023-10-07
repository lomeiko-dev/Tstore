import React, {useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {clearAllField} from "../model/slice/form-auth-slice.ts";

interface IAuthContainerProps {
    children: React.ReactNode,
}
export const AuthContainer: React.FC<IAuthContainerProps> = ({children}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(clearAllField());
    }, [dispatch]);

    return children;
};