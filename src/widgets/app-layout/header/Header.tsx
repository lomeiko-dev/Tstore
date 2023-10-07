import style from "./Header.module.scss";
import {NavBar} from "../navbar/NavBar.tsx";
import {NamespaceApp} from "shared/ui/namespace";
import React from "react";

export const Header = React.memo(() => {
    return (
        <div className={style.header}>
            <NamespaceApp/>
            <NavBar/>
        </div>
    );
});