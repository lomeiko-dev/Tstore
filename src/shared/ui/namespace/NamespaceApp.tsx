import style from './NamespaceApp.module.scss';
import Logo from "shared/assets/img/logo/logo.png";

export const NamespaceApp = () => {
    return (
        <div className={style.namespace}>
            <img className={style.logo} src={Logo} alt=""/>
            <div className={style.name}>
                <h1>T</h1>
                <h2>Store</h2>
            </div>
        </div>
    );
};