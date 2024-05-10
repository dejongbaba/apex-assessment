import axios from "axios";
import NProgress from 'nprogress'

NProgress.configure({easing: 'ease', speed: 500})

const Api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
});
Api.interceptors.request.use(
    config => {
        NProgress.start()
        return config
    }
)
Api.interceptors.response.use(
    data => {
        NProgress.done()
        return data
    },
    error => {
        NProgress.done()
        return Promise.reject(error)
    }
)
export default Api;
