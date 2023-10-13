import {useEffect} from "react";

import {UserList} from "./user-list/UserList.tsx";
import {FormSearchedUser} from "features/sorting-users";
import {IReducer, ReducerLoader} from "shared/ui/reducer-loader";
import {Page} from "shared/ui/page";

import {sortQuerySelector, totalCountSelector, uploadUsersThunk, userReducer, usersSelector} from "entities/user";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch.tsx";
import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

const reducers: IReducer[] = [
    {storeKey: "userReducer", reducer: userReducer, save: false},
]

const UsersPage = () => {
    const dispatch = useAppDispatch();

    const users = useAppSelector(usersSelector);
    const totalCount = useAppSelector(totalCountSelector);

    const sortQuery = useAppSelector(sortQuerySelector);

    const uploadUsers = () =>  {
        dispatch(uploadUsersThunk());
    }

    useEffect(() => {
        uploadUsers();
    }, [sortQuery]);

    return (
        <ReducerLoader reducers={reducers}>
            <Page>
                <FormSearchedUser/>
                {users &&
                    <UserList
                        data={users}
                        isShowButton={users?.length < totalCount}
                        showMoreHandler={uploadUsers}/>}
            </Page>
        </ReducerLoader>
    );
};

export default UsersPage;