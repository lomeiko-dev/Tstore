import {displayPanel, Panel, styledPanel, typedPanel} from "shared/ui/panel";
import styleUser from "../UserCard.module.scss";
import styleSkeleton from "./UserSkeleton.module.scss";

export const UserSkeleton = () => {
    return (
        <Panel
            typed={typedPanel.ROUNDED} display={displayPanel.ROW} styled={styledPanel.SHADOW_PANEL}
            className={styleUser.card}>

            <Panel className={styleUser.img} typed={typedPanel.CIRCLE} isAnimLoader={true}/>
            <Panel className={styleSkeleton.name} typed={typedPanel.ROUNDED} isAnimLoader={true}/>
            <Panel className={styleSkeleton.button} typed={typedPanel.ROUNDED} isAnimLoader={true}/>

        </Panel>
    );
};