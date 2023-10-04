import style from "./Header.module.scss";
import {NavBar} from "../navbar/NavBar.tsx";
import {NamespaceApp} from "shared/ui/namespace";

export const Header = () => {
    return (
        <div className={style.header}>
            <NamespaceApp/>
            <NavBar/>
        </div>
    );
};