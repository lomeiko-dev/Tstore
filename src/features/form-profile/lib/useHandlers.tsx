import React, {useCallback} from "react";
import {changeAvatar, changeDescription, changeName, changeStatus} from "../model/slice/form-profile-slice.ts";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {isValidStatus} from "entities/user";
import {isValidNickName} from "entities/user";
import {isValidDescription} from "entities/user";
import {setError} from "../model/slice/form-profile-slice.ts";

export const useHandlers = () => {
    const dispatch = useAppDispatch();

    const changeAvatarHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAvatar(e.target.value));
    }, [dispatch]);

    const changeNicknameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const result = isValidNickName(e.target.value);
        dispatch(setError(result.error));

        if(result.isSuccessfully)
            dispatch(changeName(e.target.value));
    }, [dispatch]);

    const changeStatusHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const result = isValidStatus(e.target.value);
        dispatch(setError(result.error));

        if(result.isSuccessfully)
            dispatch(changeStatus(e.target.value));
    }, [dispatch]);

    const changeDescriptionHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const result = isValidDescription(e.target.value);
        dispatch(setError(result.error));

        if(result.isSuccessfully)
            dispatch(changeDescription(e.target.value));
    }, [dispatch]);

    return {changeAvatarHandler, changeNicknameHandler, changeDescriptionHandler, changeStatusHandler}
};