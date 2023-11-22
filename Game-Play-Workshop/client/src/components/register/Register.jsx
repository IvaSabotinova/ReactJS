import { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',

}

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { formValues, onChange, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: ''
    }, registerSubmitHandler)

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={RegisterFormKeys.Email}
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={onChange} />

                    <label htmlFor="pass">Password:</label>

                    <input
                        type="password"
                        name={RegisterFormKeys.Password}
                        id="register-password"
                        value={formValues.password}
                        onChange={onChange} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={RegisterFormKeys.ConfirmPassword}
                        id="confirm-password"
                        value={formValues[RegisterFormKeys.ConfirmPassword]}
                        onChange={onChange} />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    );
}

export default Register;