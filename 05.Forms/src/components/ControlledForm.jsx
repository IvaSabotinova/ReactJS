import { useRef, useState, useEffect } from "react";
import styles from './ControlledForm.module.css'

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'female',
    swimming: false,
    shopping: false,
    running: false
}

export default function ControlledForm({
    formRef
}) {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const userNameRef = useRef();
    let isMountedRef = useRef(false);

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }
        console.log('Form is updated!')
    }, [formValues]);

    useEffect(() => {
        userNameRef.current.focus()
    }, [])

    const changeHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number': value = Number(e.target.value); break;
            case 'checkbox': value = e.target.checked; break;
            default: value = e.target.value; break
        }
        setFormValues(state => ({ ...state, [e.target.name]: value }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    }

    const resetFormHandler = (e) => {
        setFormValues(formInitialState);
        setErrors({});
    }

    const ageValidator = (e) => {
        if (formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({ ...state, age: 'Age should be between 0 and 120!' }));
        } else {
            setErrors(state => ({ ...state, age: '' }));
        }
    }

    return (<>
        <h1>Controlled Form</h1>

        <form ref={formRef} onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"
                    value={formValues.username}
                    onChange={changeHandler}
                    onBlur={() => console.log('On blur done!!!')}
                    ref={userNameRef} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"
                    value={formValues.password}
                    onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age"
                    value={formValues.age}
                    className={errors.age && styles.inputError}
                    onChange={changeHandler}
                    onBlur={ageValidator} />
                {errors.age && (<p className={styles.errorMessage}>{errors.age}</p>)}
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" value={formValues.gender} onChange={changeHandler}>
                    {/* <option value="">Please choose</option> */}
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </div>
            <div>
                <h3>Hobbies</h3>
                <label htmlFor="swimming">Swimming</label>
                <input type="checkBox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler} />
                <label htmlFor="shopping">Shopping</label>
                <input type="checkBox" name="shopping" id="shopping" checked={formValues.shopping} onChange={changeHandler} />
                <label htmlFor="running">Running</label>
                <input type="checkBox" name="running" id="running" checked={formValues.running} onChange={changeHandler} />
            </div>
            <div>
                <button type="submit" disabled={Object.values(errors).some(x => x)}>Register</button>
                <button type="button" onClick={resetFormHandler}>Reset</button>
            </div>
        </form>
    </>);

}