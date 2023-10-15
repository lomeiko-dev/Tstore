import React from "react";
import {useNavigate} from "react-router-dom";
import style from "./UserList.module.scss";

import {UserCard, UserSkeleton} from "entities/user";
import {Button, typedButton} from "shared/ui/button";
import {pathRoutes} from "shared/config/routes";
import {IProfile} from "entities/profile";
import {styledText, Text} from "shared/ui/text";

interface IUserListProps {
    showMoreHandler: () => void,
    totalCount: number,
    data?: IProfile[],
    isLoading: boolean,
    error?: string,
}

export const UserList: React.FC<IUserListProps> = (props) => {
    const {
        data,
        totalCount,
        isLoading,
        error,
        showMoreHandler,
    } = props;

    if(isLoading)
        return (
            <div className={style.list}>
                <UserSkeleton/>
                <UserSkeleton/>
                <UserSkeleton/>
            </div>
        )

    if(error !== undefined)
        return (
            <div className={style.list}>
                <Text styled={styledText.ERROR}>{error}</Text>
            </div>
        )

    if(data === undefined)
        return

    const navigate = useNavigate();
    const navigateProfileHandler = (userId: string) => {
        navigate(pathRoutes.profile.name + `/${userId}`);
    }

    return (
        <div className={style.list}>
            {data.map(user =>
                <UserCard key={user.id} data={user} onShowUser={() => navigateProfileHandler(user.authId)}/>)}

            {data.length < totalCount &&
                <Button onClick={showMoreHandler} typed={typedButton.DEFAULT}>Показать ещё</Button>}
        </div>
    );
};