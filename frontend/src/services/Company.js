import axios from './AxiosInstance';

export const postNewCompany = (company) => {
    return axios.post(`/company`, company)
}