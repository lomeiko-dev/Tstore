import {createContext} from "react";

export interface IAdaptationContextProps {
    isMobile: boolean,
    isTablet: boolean,
    isLaptop: boolean,
    isPC: boolean,
}

export const initialAdaptationState: IAdaptationContextProps = {
    isLaptop: false,
    isPC: false,
    isMobile: false,
    isTablet: false,
}

export const AdaptationContext = createContext<IAdaptationContextProps>(initialAdaptationState)