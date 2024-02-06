import axios from "axios";
import { accountService } from "./account.service";

const Axios = await axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

const Base = {
    baseURL: 'http://127.0.0.1:8000'
}

// intercepteur pour le token

Axios.interceptors.request.use(request => {
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }
    return request
})

export default Axios;

export const BASE = (img) => {
    return `http://127.0.0.1:8000/${img}`
};