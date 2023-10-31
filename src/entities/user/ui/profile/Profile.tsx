import React from "react";
import style from './Profile.module.scss';

import {Image, imageStyle} from "shared/ui/image";
import {styledText, Text} from "shared/ui/text";

import {IProfile} from "../../model/types/user-scheme.ts";
import {ProfileSkeleton} from "./skeleton/ProfileSkeleton.tsx";

export interface IProfileProps {
    profile?: IProfile,
    isLoading: boolean,
    error?: string,
}

export const Profile: React.FC<IProfileProps> = React.memo(({profile, error, isLoading}) => {
    if(isLoading)
        return <ProfileSkeleton/>

    if(error !== undefined)
        return <div className={style.profile}>
            <Text styled={styledText.ERROR}>{error}</Text>
        </div>

    if(profile === undefined)
        return

    return (
        <div className={style.profile}>
            <Image styled={imageStyle.CIRCLE} className={style.avatar} src={profile?.avatar} alt="avatar"/>
            <div className={style.content}>
                <Text className={style.name} styled={styledText.TITLE}>{profile.nickname}</Text>
                <Text className={style.status} styled={styledText.SUBTITLE}>
                    статус: {profile.status === "" ? "нет" : profile.status}
                </Text>
                <Text className={style.description} styled={styledText.DESCRIPTION}>
                    описание: {profile.description === "" ? "нет" : profile.description}
                </Text>
            </div>
        </div>
    );
});
