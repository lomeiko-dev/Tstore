import React from "react";
import style from './Button.module.scss';
import classNames from "classnames";

export enum buttonStyled {
    FILLED = "filled",
    OUTLINE = "outline",
    NONE = "none",
}

export enum buttonTyped {
    BACK = "back",
    SUBMIT = "submit",
    DEFAULT = "default",
    NONE = "none",
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    className?: string,
    styled?: buttonStyled,
    typed?: buttonTyped,
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        styled = buttonStyled.NONE,
        typed = buttonTyped.NONE,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(style.button, className, style[styled], style[typed])}
            {...otherProps}>{children}</button>
    );
};