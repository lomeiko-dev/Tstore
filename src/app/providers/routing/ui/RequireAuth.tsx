import React, {useEffect} from "react";
import {useAuth} from "entities/auth";
import {useNavigate} from "react-router-dom";
import {pathRoutes} from "shared/config/routes";

interface IRequireAuth {
    children: React.ReactNode;
}
export const RequireAuth: React.FC<IRequireAuth> = ({children}) => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(auth === undefined)
            navigate(pathRoutes.auth);
    }, []);

    return children;
};