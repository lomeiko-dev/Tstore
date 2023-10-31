import React from "react";
import style from './IllustrationMap.module.scss';

import {Image} from "shared/ui/image";

import CrossIcon from "shared/assets/img/icons/cross.svg?react";
import {IconButton} from "shared/ui/icon-button";

interface IIllustrationMapProps {
    illustrations: string[],
    onDeleted: (index: number) => void,
    color?: string
}

export const IllustrationMap: React.FC<IIllustrationMapProps> = (props) => {
    const {
        illustrations,
        onDeleted,
        color = "#333"
    } = props;

    return (
        <div style={{border: `2px dotted ${color}`}} className={style.illustrations}>
            {illustrations?.map((item, index) =>
                <div key={index} className={style.img}>
                    <Image className={style.image} alt="icon" src={item}/>
                    <IconButton className={style.delete} Icon={CrossIcon} onClick={() => onDeleted(index)}/>
                </div>)}
        </div>
    );
};