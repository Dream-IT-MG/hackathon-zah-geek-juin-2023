import axios from './AxiosInstance';

export const postNewApplicant = (applicant) => {
    return axios.post(`/applicant`, applicant)
}