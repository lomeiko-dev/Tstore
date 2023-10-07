import React, {HTMLAttributes} from "react";
import style from './Image.module.scss';
import classNames from "classnames";

export enum imageStyle {
    RECTANGLE = "rectangle",
    CIRCLE = "circle",
}

interface IImageProps extends HTMLAttributes<HTMLDivElement>{
    alt: string,
    src: string,
    className?: string,
    styled?: imageStyle,
}

export const Image: React.FC<IImageProps> = (props) => {
    const {
        src,
        alt,
        className,
        styled,
        ...otherProps
    } = props;
    return (
        <div {...otherProps} className={classNames(style.image, className, styled && style[styled])} style={{backgroundImage: `url(${src})`}}/>
    );
};