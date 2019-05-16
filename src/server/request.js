import axios from 'axios';
import { secret } from '../config';

const createInstance = (req) => axios.create({
    baseURL: 'http://127.0.0.1:8083',
    headers: {
        cookie: req.get('cookie') || ''
    },
    params: {
        secret: secret
    }
});

export default createInstance;