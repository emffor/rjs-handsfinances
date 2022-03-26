// pasta services usada para services de dados de uma api externa.
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', //address repeated on all requests.
})