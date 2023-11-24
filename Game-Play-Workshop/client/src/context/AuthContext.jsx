import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';
import * as authService from '../services/authService';
import Path from '../paths'

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';


export const AuthProvider = ({
    children,    
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        const result = await authService.Login(values);
        console.log(result);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);


        navigate(Path.Home);
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.Register(values.email, values.password);
        console.log(result)
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const logOutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Path.Home);
    }


    const contextValues = {
        registerSubmitHandler,
        loginSubmitHandler,
        logOutHandler,
        userId: auth._id,
        email: auth.email,
        username: auth.username || auth.email,
        isAuthenticated: !!auth.accessToken
    }


    return (

        < AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContext;
