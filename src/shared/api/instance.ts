import axios from "axios";
import {BASE_URL} from "./consts.ts";

export const apiInstance = axios.create({
    baseURL: BASE_URL,
})