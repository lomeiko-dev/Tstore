enum nameRoute {
    ABOUT = "about",
    MAIN = "main",
    AUTH = "auth",
    PROFILE = "profile",
}

export const pathRoutes: Record<nameRoute, string> = {
    [nameRoute.MAIN]: "/main",
    [nameRoute.ABOUT]: "/about",
    [nameRoute.AUTH]: "/auth",
    [nameRoute.PROFILE]: "/profile",
}