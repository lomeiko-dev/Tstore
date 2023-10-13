import {RouteProps} from "react-router-dom";
import {pathRoutes} from "shared/config/routes";

import {MainPageLazy} from "pages/main";
import {AboutPageLazy} from "pages/about";
import {AuthenticatePageLazy} from "pages/authenticate";
import {ProfilePageLazy} from "pages/profile";
import {UsersPageLazy} from "pages/users";

import {AppLayout} from "widgets/app-layout";
import {DefaultLayout} from "widgets/default-layout";

type appRouteProps = {authOnly: boolean} & RouteProps;

export const Routes: appRouteProps[] = [
    {
        path: pathRoutes.main.config,
        element: (<AppLayout> <MainPageLazy/> </AppLayout>),
        authOnly: true,
    },
    {
        path: pathRoutes.about.config,
        element: (<AppLayout> <AboutPageLazy/> </AppLayout>),
        authOnly: true,
    },
    {
        path: pathRoutes.auth.config,
        element: (<DefaultLayout> <AuthenticatePageLazy/> </DefaultLayout>),
        authOnly: false,
    },
    {
        path: pathRoutes.profile.config,
        element: (<AppLayout> <ProfilePageLazy/> </AppLayout>),
        authOnly: true,

    },
    {
        path: pathRoutes.users.config,
        element: (<AppLayout> <UsersPageLazy/> </AppLayout>),
        authOnly: true,
    }
]