import axios from "./AxiosInstance";

export const postNewUser = (data) => {
    return axios.post(`/user`, data)
}

export const getAllUsers = () => {
    return axios.get(`/users`);
}