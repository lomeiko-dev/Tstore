import React, {useState} from "react";
import style from './UserCard.module.scss';

import {IProfile} from "entities/user";
import {Image, imageStyle} from "shared/ui/image";
import {styledText, Text} from "shared/ui/text";
import {TextButton, typedButton} from "shared/ui/text-button";
import {displayPanel, Panel, styledPanel, typedPanel} from "shared/ui/panel";

interface IUserCardProps {
    data: IProfile,
    onShowUser: () => void,
}

export const UserCard: React.FC<IUserCardProps> = React.memo(({data, onShowUser}) => {
    const [isHover, setHover] = useState(false);

    return (
        <Panel
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            typed={typedPanel.ROUNDED} display={displayPanel.ROW} styled={styledPanel.SHADOW_PANEL}
            className={style.card}>

            <Image className={style.img} alt="user-avatar" src={data.avatar} styled={imageStyle.CIRCLE}/>

            {isHover ? <TextButton color="#ffffff" onClick={onShowUser} typed={typedButton.NONE}>просмотр</TextButton> :
                <Text className={style.name} styled={styledText.SUBTITLE}>{data.nickname}</Text>}

        </Panel>
    );
});