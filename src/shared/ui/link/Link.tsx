import * as React from "react";
import style from './Link.module.scss';

import {LinkProps} from "react-router-dom";
import {Link as ReactLink} from "react-router-dom";
import classNames from "classnames";

interface ILinkProps  extends LinkProps{
    children: React.ReactNode,
    className?: string,
}

export const Link: React.FC<ILinkProps> = (props) => {
    const {
        children,
        className,
        ...otherProps
    } = props;

    return (
        <ReactLink {...otherProps} className={classNames(style.link, className)}>
            {children}
        </ReactLink>
    );
};