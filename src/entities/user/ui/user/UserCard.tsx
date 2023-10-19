import React from "react";
import style from './UserCard.module.scss';

import {IProfile} from "entities/user";
import {Image, imageStyle} from "shared/ui/image";
import {styledText, Text} from "shared/ui/text";
import {Button, typedButton} from "shared/ui/button";
import {displayPanel, Panel, styledPanel, typedPanel} from "shared/ui/panel";

interface IUserCardProps {
    data: IProfile,
    onShowUser: () => void,
}

export const UserCard: React.FC<IUserCardProps> = React.memo(({data, onShowUser}) => {
    return (
        <Panel
            typed={typedPanel.ROUNDED} display={displayPanel.ROW} styled={styledPanel.SHADOW_PANEL}
            className={style.card}>

            <Image className={style.img} alt="user-avatar" src={data.avatar} styled={imageStyle.CIRCLE}/>
            <Text className={style.name} styled={styledText.SUBTITLE}>{data.nickname}</Text>
            <Button className={style.btn_link} onClick={onShowUser} typed={typedButton.NONE}>перейти</Button>

        </Panel>
    );
});