import style from './PageLoader.module.scss';
import {Loader} from "shared/ui/loader";

export const PageLoader = () => {
    return (
        <div className={style.container}>
            <Loader/>
        </div>
    );
};