import React from "react";
import style from './Profile.module.scss';
import {IProfile} from "../../model/types/profile-scheme.ts";
import {Image, imageStyle} from "shared/ui/image";
import {styledText, Text} from "shared/ui/text";

export interface IProfileProps {
    profile?: IProfile,
    isLoading: boolean,
    error?: string,
}

export const Profile: React.FC<IProfileProps> = ({profile, error, isLoading}) => {

    if(profile === undefined)
        return

    if(isLoading){
        return <div className={style.profile}>
            <Text styled={styledText.TEXT}>{isLoading}</Text>
        </div>
    }

    if(error !== undefined){
        return <div className={style.profile}>
            <Text styled={styledText.ERROR}>{error}</Text>
        </div>
    }

    return (
        <div className={style.profile}>
            <Image styled={imageStyle.CIRCLE} className={style.avatar} src={profile?.avatar} alt="avatar"/>
            <div className={style.content}>
                <Text className={style.name} styled={styledText.TITLE}>{profile.nickname}</Text>
                <Text styled={styledText.DESCRIPTION}>
                    статус: {profile.status === "" ? "нет" : profile.status}
                </Text>
                <Text className={style.description} styled={styledText.TEXT}>
                    описание: {profile.description === "" ? "нет" : profile.description}
                </Text>
            </div>
        </div>
    );
};
