import './login-register.css';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import  AuthContext  from '../../context/AuthContext';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

const Login = ({

}) => {
    const {loginSubmitHandler} = useContext(AuthContext)
    const { formValues, onChange, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, loginSubmitHandler)

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        value={formValues[LoginFormKeys.Email]}
                        placeholder="Sokka@gmail.com"
                        onChange={onChange} />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        value={formValues[LoginFormKeys.Password]}
                        onChange={onChange} />

                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="#">he

                            re</a></span>
                    </p>
                </div>
            </form>
        </section>
    );

}

export default Login;