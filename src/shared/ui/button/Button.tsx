import React from "react";
import style from './Button.module.scss';
import classNames from "classnames";
import {Spinner} from "shared/ui/spinner";

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
    disabled?: boolean,
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        styled = styledButton.NONE,
        typed = typedButton.NONE,
        disabled,
        ...otherProps
    } = props;

    return (
        <button
            disabled={disabled}
            className={classNames(style.button, className, style[styled], style[typed])}
            {...otherProps}>{disabled ? <Spinner/> : children}</button>
    );
};