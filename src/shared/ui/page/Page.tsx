import React from "react";
import style from './Page.module.scss';
import classNames from "classnames";

interface IPageProps{
    children: React.ReactNode,
    className?: string,
}

export const Page: React.FC<IPageProps> = ({children, className}) => {
    return (
        <div className={classNames(style.page, className)}>
            {children}
        </div>
    );
};