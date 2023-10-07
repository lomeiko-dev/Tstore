enum nameRoute {
    ABOUT = "about",
    MAIN = "main",
    AUTH = "auth",
    PROFILE = "profile",
    USERS = "users",
}

type typeRoute = {
    config: string,
    name: string,
}

export const pathRoutes: Record<nameRoute, typeRoute> = {
    [nameRoute.MAIN]: {name: "/main", config: "/main"},
    [nameRoute.ABOUT]: {name: "/about", config: "/about"},
    [nameRoute.AUTH]: {name: "/auth", config: "auth"},
    [nameRoute.PROFILE]: {name: "/profile", config: "/profile/:id?"},
    [nameRoute.USERS]: {name: "/users", config: "/users"}
}