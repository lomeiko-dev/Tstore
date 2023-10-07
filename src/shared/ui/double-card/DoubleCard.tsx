import React, {useEffect, useState} from "react";
import style from './DoubleCard.module.scss';
import classNames from "classnames";

interface IDoubleCardProps {
    children: React.ReactNode;
    className?: string,
    isRotate: boolean,
    changeContent: () => void,
}

export const DoubleCard: React.FC<IDoubleCardProps> = (props) => {
    const {
        children,
        className,
        isRotate,
        changeContent,
    } = props;

    const [anim, setAnim] = useState(false);
    const [blocked, unBlocked] = useState(true);

    useEffect(() => {
        if(!blocked){
            setAnim(true);

            setTimeout(() => {
                changeContent();
            }, 500)

            setTimeout(() => {
                setAnim(false);
            }, 1000)
        }
    }, [isRotate]);

    useEffect(() => {
        unBlocked(false);
    }, []);

    const mods = {[style.anim]: anim}
    return (
        <div className={classNames(style.card, mods, className)}>
            {children}
        </div>
    );
};