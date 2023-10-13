import React from "react";
import {useNavigate} from "react-router-dom";
import style from "./UserList.module.scss";

import {UserCard} from "entities/user";
import {Button, typedButton} from "shared/ui/button";
import {pathRoutes} from "shared/config/routes";
import {IProfile} from "entities/profile";

interface IUserListProps {
    showMoreHandler: () => void,
    isShowButton: boolean,
    data: IProfile[],
}

export const UserList: React.FC<IUserListProps> = ({showMoreHandler, isShowButton, data}) => {
    const navigate = useNavigate();
    const navigateProfileHandler = (userId: string) => {
        navigate(pathRoutes.profile.name + `/${userId}`);
    }

    return (
        <div className={style.list}>
            {data.map(user =>
                <UserCard key={user.id} data={user} onShowUser={() => navigateProfileHandler(user.authId)}/>)}

            {isShowButton &&
                <Button onClick={showMoreHandler} typed={typedButton.DEFAULT}>Показать ещё</Button>}
        </div>
    );
};