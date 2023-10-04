import {lazy} from "react";

export const AuthenticatePageLazy = lazy(() => import("./ui/AuthenticatePage.tsx"));
export {type IAuthPageScheme} from "./model/types/auth-page-scheme.ts";