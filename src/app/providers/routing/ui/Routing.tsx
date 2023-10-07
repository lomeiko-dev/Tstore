import {Suspense} from 'react';
import {Route, Routes as ReactRoutes} from "react-router-dom";
import {RequireAuth} from "./RequireAuth.tsx";
import {Routes} from "../lib/Routes.tsx";

export const Routing = () => {
    return (
        <Suspense fallback="Loading...">
            <ReactRoutes>
                {Routes.map(item =>
                    <Route key={item.path}
                           path={item.path}
                           element={item.authOnly ? <RequireAuth>{item.element}</RequireAuth> : item.element}/>)}
            </ReactRoutes>
        </Suspense>
    );
};