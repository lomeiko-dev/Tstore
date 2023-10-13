import style from './Text.module.scss';
import * as React from "react";
import classNames from "classnames";

export enum styledText {
    NAMESPACE = "namespace",
    TITLE = "title",
    SUBTITLE = "sub_title",
    DESCRIPTION = "description",
    TEXT = "text",
    ERROR = "error",
    WARNING = "warning",
}

export enum colorText{
    DEFAULT = "default",
    LIGHT = "light",
    DARK = "dark"
}

interface ITextProps {
    children: React.ReactNode,
    className?: string,
    styled?: styledText,
    theme?: colorText
}

export const Text: React.FC<ITextProps> = (props) => {
    const {
        children,
        className,
        styled = styledText.TEXT,
        theme = colorText.DEFAULT
    } = props

    return (
        <div className={classNames(style.text_cls, className, style[styled], style[theme])}>
            {children}
        </div>
    );
};