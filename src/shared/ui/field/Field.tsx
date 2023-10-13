import style from './Field.module.scss';
import React, {HTMLAttributes} from "react";
import classNames from "classnames";

export enum styledField{
    LINE = "line",
    LINE_CONTRAST = "line_contrast",
    BORDER = "border",
    BORDER_CONTRAST = "border_contrast",
    FILLED = "filled",
}

interface IFiledProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>{
    className?: string,
    type: "text" | "number" | "email" | "password" | "date" | "search",
    value?: string | number,
    multiline?: boolean,
    styled?: styledField,
}

export const Field: React.FC<IFiledProps> = (props) => {
    const {
        className,
        type,
        value,
        multiline = false,
        styled = styledField.FILLED,
        ...otherProps
    } = props;
    return (
        <>
            {multiline ?
                <textarea className={classNames(style.textarea, className, style[styled])} {...otherProps} value={value}/> :
                <input className={classNames(style.field, className, style[styled])} type={type} {...otherProps} value={value}/>}
        </>
    );
};