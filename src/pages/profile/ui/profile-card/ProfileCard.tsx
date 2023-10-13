import React from "react";
import style from './ProfileCard.module.scss';

import {IProfileProps, Profile} from "entities/profile";
import {Button, typedButton} from "shared/ui/button";

import {useAuth} from "entities/auth";

interface IProfileCardProps extends IProfileProps{
    onChange: () => void,
    logout: () => void,
}

export const ProfileCard: React.FC<IProfileCardProps> = (props) => {
    const {
        profile,
        isLoading,
        error,
        logout,
        onChange,
    } = props;

    const authData = useAuth();
    return (
        <div className={style.card}>
            {profile &&
                <>
                    <Profile profile={profile} isLoading={isLoading} error={error}/>
                    {authData?.id === profile?.id &&
                        <div className={style.btn_block}>
                            <Button className={style.btn} typed={typedButton.DEFAULT} onClick={onChange}>Изменить</Button>
                            <Button className={style.btn} typed={typedButton.BACK} onClick={logout}>Выйти</Button>
                        </div>}
                </>}
        </div>
    );
};