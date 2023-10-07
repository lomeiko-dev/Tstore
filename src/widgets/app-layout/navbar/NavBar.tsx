import style from "./NavBar.module.scss";
import {Link} from "shared/ui/link";
import {pathRoutes} from "shared/config/routes";
import React from "react";

export const NavBar = React.memo(() => {
    return (
        <nav className={style.bar}>
            <Link to={pathRoutes.about.name}>О сайте</Link>
            <Link to={pathRoutes.main.name}>Главная</Link>
            <Link to={pathRoutes.main.name}>Мои тесты</Link>
            <Link to={pathRoutes.main.name}>Пользователи</Link>
            <Link to={pathRoutes.profile.name}>Профиль</Link>
        </nav>
    );
});