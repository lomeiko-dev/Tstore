import styleProfile from '../Profile.module.scss';
import styleSkeleton from './ProfileSkeleton.module.scss';
import {Panel, typedPanel} from "shared/ui/panel";

export const ProfileSkeleton = () => {
    return (
        <div className={styleProfile.profile}>
            <Panel typed={typedPanel.CIRCLE} className={styleProfile.avatar} isAnimLoader={true}/>
            <div className={styleProfile.content}>
                <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.name} isAnimLoader={true}/>
                <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.status} isAnimLoader={true}/>
                <Panel typed={typedPanel.ROUNDED} className={styleSkeleton.status} isAnimLoader={true}/>
            </div>
        </div>
    );
};