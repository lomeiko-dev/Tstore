import React, {useCallback} from "react";
import {changeAvatar, changeDescription, changeName, changeStatus, setError} from "../model/slice/form-profile-slice.ts";
import {isValidDescription, isValidNickName, isValidStatus} from "entities/profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";

export const useHandlers = () => {
    const dispatch = useAppDispatch();

    const changeAvatarHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAvatar(e.target.value));
    }, [dispatch]);

    const changeNicknameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        isValidNickName(e.target.value, message => {
            dispatch(setError(message));
        }, () => {
            dispatch(setError(undefined));
            dispatch(changeName(e.target.value));
        });
    }, [dispatch]);

    const changeStatusHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        isValidStatus(e.target.value, message => {
            dispatch(setError(message));
        }, () => {
            dispatch(changeStatus(e.target.value));
            dispatch(setError(undefined));
        })
    }, [dispatch]);

    const changeDescriptionHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        isValidDescription(e.target.value, message => {
            dispatch(setError(message));
        }, () => {
            dispatch(setError(undefined));
            dispatch(changeDescription(e.target.value));
        })
    }, [dispatch]);

    return {changeAvatarHandler, changeNicknameHandler, changeDescriptionHandler, changeStatusHandler}
};