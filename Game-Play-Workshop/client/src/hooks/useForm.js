import { useEffect, useState } from 'react';

export default function useForm(initialValues, onSubmitHandler) {
    const [formValues, setFormValues] = useState(initialValues);

    // useEffect(()=>{
    //     setFormValues(initialValues);
    // }, [initialValues])

    const onSubmit = async (e) => {
        e.preventDefault();
        onSubmitHandler(formValues);
    }

    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    return ({
        formValues,
        onChange,
        onSubmit
    });
}