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

interface ITextProps {
    children: React.ReactNode,
    className?: string,
    styled?: styledText,
}

export const Text: React.FC<ITextProps> = (props) => {
    const {
        children,
        className,
        styled = styledText.TEXT,
    } = props

    return (
        <div className={classNames(className, style[styled])}>
            {children}
        </div>
    );
};