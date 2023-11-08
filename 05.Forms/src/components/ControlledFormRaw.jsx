import { useState } from "react";

export default function ControlledForm() {

    const [username, setUsernameValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const [age, setAgeValue] = useState('');

    const submitHandler = (e) => {
        console.log(username);
        console.log(password);
        console.log(age);
        resetFormHandler();
    }

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);

    }
    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);

    }
    const ageChangeHandler = (e) => {
        setAgeValue(e.target.value);
    }
    const resetFormHandler = (e) => {      
        setUsernameValue('');
        setPasswordValue('');
        setAgeValue('');
    }


    return (
        <>
            <h1>Controlled Form</h1>

            <form >
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={username} onChange={usernameChangeHandler} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={passwordChangeHandler} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" id="age" value={age} onChange={ageChangeHandler} />
                </div>
                <div>
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    )
}
