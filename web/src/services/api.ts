import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})//baseURL: endereço do back-end

export default api;
