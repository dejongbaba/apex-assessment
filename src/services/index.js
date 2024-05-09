import axios from "axios";

const Api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
});

export default Api;
