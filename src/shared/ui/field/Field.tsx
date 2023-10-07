import style from './Field.module.scss';
import React, {HTMLAttributes} from "react";
import classNames from "classnames";

interface IFiledProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>{
    className?: string,
    type: "text" | "number" | "email" | "password" | "date",
    value?: string | number,
    multiline?: boolean,
}

export const Field: React.FC<IFiledProps> = (props) => {
    const {
        className,
        type,
        value,
        multiline = false,
        ...otherProps
    } = props;

    return (
        <>
            {multiline ?
                <textarea className={classNames(style.textarea, className)} {...otherProps} value={value}/> :
                <input className={classNames(style.field, className)} type={type} {...otherProps} value={value}/>}
        </>
    );
};