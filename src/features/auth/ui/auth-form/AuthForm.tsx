import React, {useCallback, useEffect} from "react";
import style from './AuthForm.module.scss';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

import {dateBirthdaySelector,errorSelector,isLoadingSelector,nicknameSelector,passwordSelector,usernameSelector} from "../../model/selectors/auth-selectors.ts";
import { clearAllField, updateDateBirthdayField,updateNicknameField,updatePasswordField,updateUsernameField} from "../../model/slice/form-auth-slice.ts";

import {authThunk} from "../../model/services/auth/auth-thunk.ts";

import {styledText, Text} from "shared/ui/text";
import {Field} from "shared/ui/field";
import {Button} from "shared/ui/button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {pathRoutes} from "shared/config/routes";
import classNames from "classnames";
import {regThunk} from "features/auth/model/services/reg/reg-thunk.ts";

interface IAuthFormProps {
    classNameFields?: string,
    classNameSubmit?: string,
    isReg: boolean,
}

export const AuthForm: React.FC<IAuthFormProps> = ({classNameFields, classNameSubmit, isReg}) => {
    const dispatch = useAppDispatch();

    const username = useAppSelector(usernameSelector);
    const password = useAppSelector(passwordSelector);
    const nickname = useAppSelector(nicknameSelector);
    const dateBirthday = useAppSelector(dateBirthdaySelector);

    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearAllField());
    }, [error, isReg]);

    const updateUsernameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateUsernameField(e.target.value));
    }, [dispatch]);

    const updatePasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updatePasswordField(e.target.value));
    }, [dispatch]);

    const updateNicknameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateNicknameField(e.target.value));
    }, [dispatch]);

    const updateDateBirthdayHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateDateBirthdayField(e.target.value));
    }, [dispatch]);

    const authHandler = useCallback(async () => {
        const result = await dispatch(isReg ? regThunk() : authThunk())
            .then(res => res.meta.requestStatus);

        if(result === "fulfilled")
            navigate(pathRoutes.profile);
    }, [dispatch, isReg]);

    return (
        <div className={style.form}>
            {error && <Text styled={styledText.ERROR}>{error}</Text>}
            <Field className={classNames(style.field, classNameFields)} onChange={updateUsernameHandler} type="text" placeholder="login" value={username}/>
            <Field className={classNames(style.field, classNameFields)} onChange={updatePasswordHandler} type="password" placeholder="password" value={password}/>
            {isReg &&
                <>
                    <Field className={classNames(style.field, classNameFields)} onChange={updateNicknameHandler} type="text" placeholder="nickname" value={nickname}/>
                    <Field className={classNames(style.field, classNameFields)} onChange={updateDateBirthdayHandler} type="date" placeholder="birthday" value={dateBirthday}/>
                </>}
            <Button className={classNames(style.field, classNameSubmit)} disabled={isLoading} onClick={authHandler}>{isReg ? "Регистрация" : "Авторизация"}</Button>
        </div>
    );
};