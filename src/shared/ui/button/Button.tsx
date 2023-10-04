import React from "react";
import style from './Button.module.scss';
import classNames from "classnames";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    className?: string,
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        className,
        ...otherProps
    } = props;

    return (
        <button className={classNames(style.button, className)} {...otherProps}>{children}</button>
    );
};