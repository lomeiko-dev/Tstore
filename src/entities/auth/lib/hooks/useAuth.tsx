import {useAppSelector} from "shared/lib/hooks/useAppSelector.tsx";

export const useAuth = () => useAppSelector(store => store.authReducer.authData);