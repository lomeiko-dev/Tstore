import {useState} from "react";
import classNames from "classnames";
import style from './AuthenticatePage.module.scss';

import {AuthForm, formAuthReducer} from "features/auth";
import {DoubleCard} from "shared/ui/double-card";
import {Button} from "shared/ui/button";
import {styledText, Text} from "shared/ui/text";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader/ReducerLoader.tsx";

import {isRegFormSelector, namedFormSelector, textChangeFormSelector} from "../model/selectors/auth-page-selectors.ts";
import {authPageReducer, toggleForm} from "../model/slice/auth-page-slice.ts";

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

import content from "../config/content.json";

const reducers: IReducer[] = [
    {storeKey: "formAuthReducer", reducer: formAuthReducer, save: false},
    {storeKey: "authPageReducer", reducer: authPageReducer, save: false},
]
const AuthenticatePage = () => {
    const [flip, setFlip] = useState(false);
    const dispatch = useAppDispatch();

    const isRegForm = useAppSelector(isRegFormSelector);
    const namedForm = useAppSelector(namedFormSelector);
    const textChangeForm = useAppSelector(textChangeFormSelector);

    const toggleFormHandler = () => {
        setFlip(prevState => !prevState);
    }

    const mods = {[style.form_reg]: isRegForm}
    return (
        <ReducerLoader reducers={reducers}>
            <div className={style.page}>
                <DoubleCard className={classNames(style.form, mods)} isRotate={flip} changeContent={() => dispatch(toggleForm())}>
                    <Text className={style.named_form} styled={styledText.TITLE}>{namedForm}</Text>
                    <AuthForm
                        isReg={isRegForm}
                        classNameFields={style.form_fields}
                        classNameSubmit={style.form_submit}/>
                    <Button className={style.button_change_form} onClick={toggleFormHandler}>{textChangeForm}</Button>
                </DoubleCard>
                <Text className={style.descr} styled={styledText.SUBTITLE}>{content.hello_message}</Text>
            </div>
        </ReducerLoader>
    );
};

export default AuthenticatePage;