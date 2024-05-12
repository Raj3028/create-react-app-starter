import axios from "axios";
import environment from "./environment";
import { jwtDecode } from "jwt-decode";

const axiosInstance = axios.create({
    baseURL: environment.API_URL,
    "headers": {
        "Content-Type": "application/json",
    }
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = jwtDecode(token);
        const tokenExpireTime = decodedToken.exp;
        const currentTime = Date.now().valueOf() / 1000;

        if (currentTime > tokenExpireTime) {
            // const payload = {

            // }
            // try {
            //     await axios.post(`${environment.API_URL}/logout`, payload);
            // } catch (err) {

            // }
            localStorage.removeItem("token");
            window.location.href = '/';
        }
    }

    return Promise.reject(error);
})

export default axiosInstance;