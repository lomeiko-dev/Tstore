import React, {useCallback, useEffect} from "react";
import style from './FormChangeProfile.module.scss';

import {enumDesign, Field} from "shared/ui/field";
import {styledText, Text} from "shared/ui/text";
import {TextButton, typedButton} from "shared/ui/text-button";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";

import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useHandlers} from "../lib/useHandlers.tsx";

import {IProfile} from "entities/user";
import {changeProfileThunk} from "../model/services/change-profile-thunk.ts";
import {
    errorsSelector,
    isLoadingSelector,
    profileDetailsSelector
} from "../model/selectors/form-profile-selectors.ts";
import {formProfileReducer, setProfile} from "../model/slice/form-profile-slice.ts";

import BackIcon from "shared/assets/img/icons/back.svg?react";
import {IconButton} from "shared/ui/icon-button";

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
    const errors = useAppSelector(errorsSelector);

    const {changeDescriptionHandler, changeStatusHandler, changeAvatarHandler, changeNicknameHandler}
        = useHandlers();

    useEffect(() => {
        {profile && dispatch(setProfile(profile))}
    }, []);

    const changeHandler = useCallback(() => {
        dispatch(changeProfileThunk(onClose));
    }, [dispatch, onClose]);

    const cancellationChangeHandler = useCallback(() => {
        onClose();
    }, []);

    return (
        <ReducerLoader reducers={reducers}>
            <div className={style.form}>
                {errors.map(error =>
                    <Text styled={styledText.ERROR}>{error}</Text>)}

                <IconButton onClick={cancellationChangeHandler} color="red"
                            className={style.back} Icon={BackIcon}/>

                <Field
                    center={true}
                    onChange={changeAvatarHandler}
                    design={enumDesign.LINE}
                    className={style.field}
                    type="text" placeholder="avatar url..." value={profileDetails?.avatar || ""}/>
                <Field
                    center={true}
                    onChange={changeNicknameHandler}
                    design={enumDesign.LINE}
                    className={style.field}
                    type="text" placeholder="name" value={profileDetails?.nickname || ""}/>
                <Field
                    center={true}
                    onChange={changeStatusHandler}
                    design={enumDesign.LINE}
                    className={style.field}
                    type="text" placeholder="status" value={profileDetails?.status || ""}/>
                <Field
                    center={true}
                    onChange={changeDescriptionHandler}
                    design={enumDesign.LINE}
                    multiline={true}
                    className={style.multiline_field}
                    type="text" placeholder="description" value={profileDetails?.description || ""}/>

                <TextButton
                    typed={typedButton.DEFAULT}
                    disabled={isLoading}
                    onClick={changeHandler}>Изменить</TextButton>
            </div>
        </ReducerLoader>
    );
});