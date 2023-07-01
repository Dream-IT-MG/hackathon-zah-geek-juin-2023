import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

const instance = axios.create({
    baseURL : baseUrl,
    headers: {
        'Content-Type': 'Application/json'
    }
});

export default instance;