import {Suspense} from 'react';
import {Route, Routes as ReactRoutes} from "react-router-dom";
import {Routes} from "../lib/Routes.tsx";
import {RequireAuth} from "./RequireAuth.tsx";

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