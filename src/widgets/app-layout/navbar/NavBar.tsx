import style from "./NavBar.module.scss";
import {Link} from "shared/ui/link";
import {pathRoutes} from "shared/config/routes";

export const NavBar = () => {
    return (
        <nav className={style.bar}>
            <Link to={pathRoutes.about}>О сайте</Link>
            <Link to={pathRoutes.main}>Главная</Link>
            <Link to={pathRoutes.main}>Мои тесты</Link>
            <Link to={pathRoutes.profile}>Профиль</Link>
        </nav>
    );
};