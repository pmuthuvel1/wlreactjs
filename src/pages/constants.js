export const API_BASE_URL = "http://localhost:8090";
export const USER_CREATE_URI = "/api/createMobile";
export const MOBILE_CREATE_URI = "/api/createMobile";
export const FIXED_CREATE_URI = "/api/createFixed";
export const ISP_CREATE_URI = "/api/createIsp";

export const getApiUrl  = (uri) => {
    return API_BASE_URL+uri;
}