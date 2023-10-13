import React, {useCallback, useState} from "react";
import style from './SideNavBar.module.scss';
import classNames from "classnames";
import {isMobile} from 'react-device-detect';

import {Button, styledButton, typedButton} from "shared/ui/button";
import {NavBar} from "../NavBar.tsx";
import {displayPanel, Panel, styledPanel} from "shared/ui/panel";

import BurgerMenuIcon from "shared/assets/img/icons/burger-menu.svg";
import {useTheme} from "shared/lib/hooks/useTheme.tsx";
import {ThemeSwitcher} from "features/theme";

export const SideNavBar = React.memo(() => {
    const {theme} = useTheme();
    const [closed, setClosed] = useState(false);

    const toggleSide = useCallback(() => {
        setClosed(prevState => !prevState)
    }, [setClosed]);

    const mods = {[style.closed]: closed}
    return (
        <Panel
            styled={theme === "light" ? styledPanel.BLUR_PANEL_LIGHT : styledPanel.BLUR_PANEL_DARK} display={displayPanel.GRID}
            className={classNames(style.side, mods)}>

            {!closed &&
                <>
                    <NavBar className={style.navbar}/>
                    {isMobile && <ThemeSwitcher/>}
                </>}

            <Button
                onClick={toggleSide}
                styled={styledButton.CIRCLE} typed={typedButton.DEFAULT}
                className={style.btn_toggle}>
                <img src={BurgerMenuIcon} alt="toggle"/>
            </Button>

        </Panel>
    );
});