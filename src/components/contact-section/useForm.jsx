//Custom hook that handles form submit

import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
    const[values, setValues] = useState({
        name:'',
        email:'',
        message:''
    })
    
    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);

        emailjs.sendForm("service_3bbgkl9", "template_krurjph", e.target, "user_2OxM4Km5HG667qKfkEfW1")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                 console.log(error.text);
            });
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            }
        },
        [errors, isSubmitting, callback]
    )
    
    return { handleChange, values, handleSubmit, errors };
}

export default useForm;