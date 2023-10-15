import React from "react";
import style from "./Header.module.scss";
import {isMobile} from "react-device-detect";

import {NavBar} from "../navbar/NavBar.tsx";
import {NamespaceApp} from "shared/ui/namespace";
import {SideNavBar} from "../navbar/side-navbar/SideNavBar.tsx";
import {displayPanel, Panel, styledPanel} from "shared/ui/panel";
import {ThemeSwitcher} from "features/theme";

export const Header = React.memo(() => {

    return (
        <Panel styled={styledPanel.SHADOW_PANEL} display={displayPanel.ROW} className={style.header}>
            <NamespaceApp/>
            {isMobile ? <SideNavBar/> : <NavBar/>}
            {!isMobile && <ThemeSwitcher/>}
        </Panel>
    );
});