import style from './Field.module.scss';
import React, {HTMLAttributes} from "react";
import classNames from "classnames";

interface IFiledProps extends HTMLAttributes<HTMLInputElement>{
    className?: string,
    type: "text" | "number" | "email" | "password" | "date",
    value?: string | number,
}

export const Field: React.FC<IFiledProps> = (props) => {
    const {
        className,
        type,
        value,
        ...otherProps
    } = props;

    return (
        <input className={classNames(style.field, className)} type={type} {...otherProps} value={value}/>
    );
};