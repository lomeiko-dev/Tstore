import React from "react";
import style from "./Header.module.scss";

import {NavBar} from "../navbar/NavBar.tsx";
import {NamespaceApp} from "shared/ui/namespace";
import {SideNavBar} from "../navbar/side-navbar/SideNavBar.tsx";
import {displayPanel, Panel, styledPanel} from "shared/ui/panel";
import {ThemeSwitcher} from "features/theme";
import {useDevice} from "shared/lib/hooks/useDevice.tsx";

export const Header = React.memo(() => {
    const {isTablet, isMobile} = useDevice();
    const isSideMenu = isTablet || isMobile;

    return (
        <Panel styled={styledPanel.SHADOW_PANEL} display={displayPanel.ROW} className={style.header}>
            <NamespaceApp/>
            {isSideMenu ? <SideNavBar/> : <NavBar/>}
            {!isSideMenu && <ThemeSwitcher/>}
        </Panel>
    );
});