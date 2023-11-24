import * as libRequest from '../lib/request';


const baseUrl = 'http://localhost:3900/users';

export const Login = async (userData) => {
    const result = await libRequest.post(`${baseUrl}/login`, userData);
    return result;
}

export const Register = (email, password) => {
    const result = libRequest.post(`${baseUrl}/register`, {email, password});
    return result;
}

export const Logout = () => libRequest.get(`${baseUrl}/logout`);

