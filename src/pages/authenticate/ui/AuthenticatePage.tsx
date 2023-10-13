import classNames from "classnames";
import style from './AuthenticatePage.module.scss';

import {Button, typedButton} from "shared/ui/button";
import {colorText, styledText, Text} from "shared/ui/text";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";
import {AuthForm, RegForm} from "features/auth";

import {
    flipSelector,
    isRegFormSelector,
    namedFormSelector,
    textChangeFormSelector,
    themeSelector
} from "../model/selectors/auth-page-selectors.ts";
import {authPageReducer, toggleFlip, toggleForm} from "../model/slice/auth-page-slice.ts";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

import content from "../config/content.json";
import {Panel, styledPanel, typedPanel} from "shared/ui/panel";
import {styledField} from "shared/ui/field";
import {Page} from "shared/ui/page";

const reducers: IReducer[] = [
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
            <Page>
                <div className={style.content}>
                    <Panel
                        typed={typedPanel.ROUNDED} styled={styledPanel.SHADOW_PANEL}
                        className={classNames(style.card, style[theme])}
                        isRotate={flip} onChangeContent={changeForm}>

                        <Text className={style.text} styled={styledText.TITLE}>{namedForm}</Text>

                        {isRegForm ?
                            <RegForm className={style.form} styledField={styledField.LINE_CONTRAST} typedButton={typedButton.DARK}/> :
                            <AuthForm className={style.form} styledField={styledField.LINE} typedButton={typedButton.WHITE}/>}

                        <Button className={style.text} onClick={flipFormHandler}>{textChangeForm}</Button>

                    </Panel>
                    <Text className={style.descr} styled={styledText.SUBTITLE} theme={colorText.DARK}>{content.hello_message}</Text>
                </div>
            </Page>
        </ReducerLoader>
    );
};

export default AuthenticatePage;