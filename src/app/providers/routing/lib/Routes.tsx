import {RouteProps} from "react-router-dom";
import {pathRoutes} from "shared/config/routes";

import {MainPageLazy} from "pages/main";
import {AboutPageLazy} from "pages/about";
import {AuthenticatePageLazy} from "pages/authenticate";
import {ProfilePageLazy} from "pages/profile";

import {AppLayout} from "widgets/app-layout";
import {DefaultLayout} from "widgets/default-layout";

type appRouteProps = RouteProps & {
    authOnly: boolean;
}

export const Routes: appRouteProps[] = [
    {
        path: pathRoutes.main,
        element: (<AppLayout> <MainPageLazy/> </AppLayout>),
        authOnly: true,
    },
    {
        path: pathRoutes.about,
        element: (<AppLayout> <AboutPageLazy/> </AppLayout>),
        authOnly: true,
    },
    {
        path: pathRoutes.auth,
        element: (<DefaultLayout> <AuthenticatePageLazy/> </DefaultLayout>),
        authOnly: false,
    },
    {
        path: pathRoutes.profile,
        element: (<AppLayout> <ProfilePageLazy/> </AppLayout>),
        authOnly: true,
    }
]