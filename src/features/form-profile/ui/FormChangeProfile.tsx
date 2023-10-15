import React, {useCallback, useEffect} from "react";
import style from './FormChangeProfile.module.scss';

import {Field, styledField} from "shared/ui/field";
import {styledText, Text} from "shared/ui/text";
import {Button, typedButton} from "shared/ui/button";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";

import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useHandlers} from "../lib/useHandlers.tsx";

import {IProfile} from "entities/profile";
import {changeProfileThunk} from "../model/services/change-profile-thunk.ts";
import {errorSelector, isLoadingSelector} from "../model/selectors/form-profile-selectors.ts";
import {formProfileReducer, setProfile} from "../model/slice/form-profile-slice.ts";
import {profileDetailsSelector} from "../model/selectors/form-profile-selectors.ts";

interface IFormChangeProfileProps {
    onClose?: () => void,
    profile?: IProfile,
}

const reducers: IReducer[] = [
    {storeKey: "formProfileReducer", reducer: formProfileReducer, save: false }
]

export const FormChangeProfile: React.FC<IFormChangeProfileProps> = React.memo(({onClose = () => null, profile}) => {
    const dispatch = useAppDispatch();

    const profileDetails = useAppSelector(profileDetailsSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const {changeDescriptionHandler, changeStatusHandler, changeAvatarHandler, changeNicknameHandler}
        = useHandlers();

    useEffect(() => {
        {profile && dispatch(setProfile(profile))}
    }, []);

    const changeHandler = useCallback(() => {
        if(error === "")
            dispatch(changeProfileThunk()).finally(() => {onClose()});
    }, [dispatch, error]);

    const cancellationChangeHandler = useCallback(() => {
        onClose();
    }, []);

    return (
        <ReducerLoader reducers={reducers}>
            <div className={style.form}>
                {error && <Text styled={styledText.ERROR}>{error}</Text>}
                <Field
                    onChange={changeAvatarHandler}
                    styled={styledField.LINE}
                    className={style.field} type="text" placeholder="avatar url..." value={profileDetails?.avatar}/>
                <Field
                    onChange={changeNicknameHandler}
                    styled={styledField.LINE}
                    className={style.field} type="text" placeholder="name" value={profileDetails?.nickname}/>
                <Field
                    onChange={changeStatusHandler}
                    styled={styledField.LINE}
                    className={style.field} type="text" placeholder="status" value={profileDetails?.status}/>
                <Field
                    onChange={changeDescriptionHandler}
                    styled={styledField.BORDER}
                    multiline={true}
                    className={style.textarea} type="text" placeholder="description" value={profileDetails?.description}/>

                <div className={style.buttons_block}>
                    <Button typed={typedButton.DEFAULT} disabled={isLoading} onClick={changeHandler}>Изменить</Button>
                    <Button typed={typedButton.BACK} onClick={cancellationChangeHandler}>Отменить</Button>
                </div>
            </div>
        </ReducerLoader>
    );
});