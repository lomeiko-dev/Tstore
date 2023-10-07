import style from './ProfilePage.module.scss';
import {useCallback, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {errorSelector, isLoadingSelector, profileReducer} from "entities/profile";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";
import {FormChangeProfile} from "features/form-profile";
import {DoubleCard} from "shared/ui/double-card";
import {ProfileCard} from "./profile-card/ProfileCard.tsx";

import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";

import {profileSelector} from "entities/profile";
import {uploadProfileThunk} from "entities/profile";
import {removeAuthData} from "entities/auth";
import {pathRoutes} from "shared/config/routes";

const reducers: IReducer[] = [
    {storeKey: "profileReducer", reducer: profileReducer, save: false}
]

const ProfilePage = () => {
    const [flip, setFlip] = useState(false);
    const [isChange, setChange] = useState(true);

    const dispatch = useAppDispatch();
    const {id = ""} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(uploadProfileThunk(id))
    }, [dispatch, id]);

    const profile = useAppSelector(profileSelector);
    const isLoading = useAppSelector(isLoadingSelector);
    const error = useAppSelector(errorSelector);

    const onFlipFormHandler = useCallback(() => {
        setFlip(prevState => !prevState);
    }, [flip])

    const changeProfile = useCallback(() => {
        setChange(prevState => !prevState);
    }, [dispatch, profile]);

    const logout = useCallback(() => {
        dispatch(removeAuthData());
        navigate(pathRoutes.auth.name);
    }, [dispatch]);

    return (
        <ReducerLoader reducers={reducers}>
            <div className={style.page}>
                <DoubleCard changeContent={changeProfile} isRotate={flip} className={style.card}>
                    {isChange ?
                        <ProfileCard
                            profile={profile}
                            onChange={onFlipFormHandler} logout={logout}
                            isLoading={isLoading} error={error}/> :
                        <FormChangeProfile
                            profile={profile}
                            onClose={onFlipFormHandler}/>}
                </DoubleCard>
            </div>
        </ReducerLoader>
    );
};

export default ProfilePage;