import axios from 'axios';

const api = axios.create({ baseURL: 'https://todo-list-7e9ae.firebaseio.com' });

export default api;
