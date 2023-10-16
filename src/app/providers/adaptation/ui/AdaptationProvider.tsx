import React, {useCallback, useEffect, useState} from "react";
import {AdaptationContext, IAdaptationContextProps, initialAdaptationState} from "shared/config/adaptation";

interface IAdaptationProviderProps {
    children: React.ReactNode,
}

export const AdaptationProvider: React.FC<IAdaptationProviderProps> = ({children}) => {
    const [devices, setDevices]
        = useState<IAdaptationContextProps>(initialAdaptationState);

    const resizeHandler = useCallback(() => {
        if(window.innerWidth > 320 && window.innerWidth < 480)
            setDevices({isMobile: true, isPC: false, isTablet: false, isLaptop: false});

        if(window.innerWidth > 768 && window.innerWidth < 1024)
            setDevices({isMobile: false, isPC: false, isTablet: true, isLaptop: false});

        if(window.innerWidth > 1224 && window.innerWidth < 1800)
            setDevices({isMobile: false, isPC: false, isTablet: false, isLaptop: true});

        if(window.innerWidth > 1824)
            setDevices({isMobile: false, isPC: true, isTablet: false, isLaptop: false});

    }, [window.innerWidth]);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

    useEffect(() => {
        resizeHandler();
    }, []);

    return (
        <AdaptationContext.Provider value={devices}>
            {children}
        </AdaptationContext.Provider>
    );
};