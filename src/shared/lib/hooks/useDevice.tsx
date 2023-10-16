import {useContext} from 'react';
import {AdaptationContext} from "shared/config/adaptation";

export const useDevice = () => {

    return useContext(AdaptationContext);
};