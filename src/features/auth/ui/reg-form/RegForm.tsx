import React, {useCallback} from "react";
import classNames from "classnames";
import style from '../Auth.module.scss';

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";
import {dateBirthdaySelector, errorSelector, isLoadingSelector, nicknameSelector, passwordSelector, usernameSelector} from "../../model/selectors/auth-selectors.ts";
import {regThunk} from "../../model/services/reg/reg-thunk.ts";

import {styledText, Text} from "shared/ui/text";
import {Field, styledField} from "shared/ui/field";
import {Button, typedButton} from "shared/ui/button";
import {useNavigate} from "react-router-dom";
import {AuthContainer} from "../AuthContainer.tsx";
import {useHandlers} from "features/auth/lib/useHandlers.tsx";

interface IAuthFormProps {
    className?: string,
    styledField?: styledField,
    typedButton?: typedButton,
}

export const RegForm: React.FC<IAuthFormProps> = React.memo(({className, styledField, typedButton}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const username = useAppSelector(usernameSelector);
    const password = useAppSelector(passwordSelector);
    const nickname = useAppSelector(nicknameSelector);
    const dateBirthday = useAppSelector(dateBirthdaySelector);

    const { updateDateBirthdayHandler, updateNicknameHandler, updatePasswordHandler, updateUsernameHandler }
        = useHandlers();

    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const authHandler = useCallback(() => {
        dispatch(regThunk({navigate}))
    }, [dispatch]);

    return (
        <AuthContainer>
            <div className={classNames(style.form, className)}>
                {error && <Text styled={styledText.ERROR}>{error}</Text>}
                <Field
                    className={style.field}
                    styled={styledField}
                    onChange={updateUsernameHandler} type="text" placeholder="login" value={username}/>
                <Field
                    className={style.field}
                    styled={styledField}
                    onChange={updatePasswordHandler} type="password" placeholder="password" value={password}/>
                <Field
                    className={style.field}
                    styled={styledField}
                    onChange={updateNicknameHandler} type="text" placeholder="nickname" value={nickname}/>
                <Field
                    className={style.field}
                    styled={styledField}
                    onChange={updateDateBirthdayHandler} type="date" placeholder="birthday" value={dateBirthday}/>

                <Button
                    typed={typedButton} className={style.field}
                    disabled={isLoading} onClick={authHandler}>Регистрация</Button>
            </div>
        </AuthContainer>
    );
});