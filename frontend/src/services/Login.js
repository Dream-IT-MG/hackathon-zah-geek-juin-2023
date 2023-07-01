import axios from "./AxiosInstance";

export const loginCheck = (username, password) => {
    return axios.post('/login', {
        email: username,
        password: password
    })
}

export const logoutApi = () => {
    return axios.post('/logout')
}