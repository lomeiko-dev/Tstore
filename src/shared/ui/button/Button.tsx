import React from "react";
import style from './Button.module.scss';
import classNames from "classnames";

export enum styledButton {
    FILLED = "filled",
    BORDER = "outline",
    CIRCLE = "circle",
    NONE = "none",
}

export enum typedButton {
    WHITE = "white",
    DARK = "dark",
    BACK = "back",
    SUBMIT = "submit",
    DEFAULT = "default",
    NONE = "none",
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    className?: string,
    styled?: styledButton,
    typed?: typedButton,
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        styled = styledButton.NONE,
        typed = typedButton.NONE,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(style.button, className, style[styled], style[typed])}
            {...otherProps}>{children}</button>
    );
};