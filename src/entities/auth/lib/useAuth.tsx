import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

export const useAuth = () => {
    const authData = useAppSelector(store => store.authReducer?.authData);
    return authData
};