import classNames from "classnames";
import style from './AuthenticatePage.module.scss';

import {DoubleCard} from "shared/ui/double-card";
import {Button} from "shared/ui/button";
import {styledText, Text} from "shared/ui/text";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";
import {AuthForm, RegForm, formAuthReducer} from "features/auth";

import {flipSelector, isRegFormSelector, namedFormSelector, textChangeFormSelector, themeSelector} from "../model/selectors/auth-page-selectors.ts";
import {authPageReducer, toggleFlip, toggleForm} from "../model/slice/auth-page-slice.ts";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

import content from "../config/content.json";

const reducers: IReducer[] = [
    {storeKey: "formAuthReducer", reducer: formAuthReducer, save: false},
    {storeKey: "authPageReducer", reducer: authPageReducer, save: false}
]
const AuthenticatePage = () => {
    const dispatch = useAppDispatch();

    const flip = useAppSelector(flipSelector);
    const isRegForm = useAppSelector(isRegFormSelector);
    const namedForm = useAppSelector(namedFormSelector);
    const textChangeForm = useAppSelector(textChangeFormSelector);
    const theme = useAppSelector(themeSelector);

    const flipFormHandler = () => {
        dispatch(toggleFlip());
    }

    const changeForm = () => {
        dispatch(toggleForm())
    }

    return (
        <ReducerLoader reducers={reducers}>
            <div className={style.page}>
                <DoubleCard className={classNames(style.card, style[theme])} isRotate={flip} changeContent={changeForm}>
                    <Text className={style.text} styled={styledText.TITLE}>{namedForm}</Text>
                    {isRegForm ?
                        <RegForm className={style.form}/> :
                        <AuthForm className={style.form}/>}
                    <Button className={style.text} onClick={flipFormHandler}>{textChangeForm}</Button>
                </DoubleCard>
                <Text className={style.descr} styled={styledText.SUBTITLE}>{content.hello_message}</Text>
            </div>
        </ReducerLoader>
    );
};

export default AuthenticatePage;