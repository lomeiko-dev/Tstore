import style from './Panel.module.scss';
import React, {useEffect, useState} from "react";
import classNames from "classnames";

export enum styledPanel{
    BLUR_PANEL_DARK = "blur_panel_dark",
    BLUR_PANEL_LIGHT = "blur_panel_light",
    SHADOW_PANEL = "shadow_panel",
    NONE = "none",
}

export enum typedPanel{
    ROUNDED = "rounded",
    CIRCLE = "circle",
    BORDER = "border",
    NONE = "none",
}

export enum displayPanel{
    ROW = "row",
    GRID = "grid",
}

interface IPanelProps {
    children?: React.ReactNode,
    className?: string,
    styled?: styledPanel,
    typed?: typedPanel,
    display?: displayPanel,
    isRotate?: boolean,
    onChangeContent?: () => void,
    isAnimLoader?: boolean,
}

export const Panel: React.FC<IPanelProps> = (props) => {
    const {
        children,
        className,
        styled = styledPanel.NONE,
        typed = typedPanel.NONE,
        display = displayPanel.GRID,
        isRotate,
        onChangeContent,
        isAnimLoader = false,
    } = props;

    const [anim, setAnim] = useState(false);
    const [blocked, unBlocked] = useState(true);

    useEffect(() => {
        if(!blocked && onChangeContent !== undefined){
            setAnim(true);

            setTimeout(() => {
                onChangeContent();
            }, 500)

            setTimeout(() => {
                setAnim(false);
            }, 1000)
        }
    }, [isRotate]);

    useEffect(() => {
        unBlocked(false);
    }, []);

    const mods = {
        [style.anim_flip]: anim,
        [style.anim_loader]: isAnimLoader,
    }

    return (
        <div className={classNames(style.panel, className, style[styled], style[typed], style[display], mods)}>
            {!isAnimLoader && <>{children}</>}
        </div>
    );
};