import React, { useState } from 'react';
import { map, isEmpty } from 'lodash';
import { TextBox, Button } from "src/components";

const FormWrapper = ({ handleSubmit, handleChange, values, formObject, buttonLabel }) => {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Iterate through each form field and validate
        formObject.forEach((el) => {
            const { key, required, pattern, error } = el;
            let value = values[key];

            // Check for required fields
            if (required && isEmpty(value)) {
                newErrors[key] = error;
                isValid = false;
            }

            // Check for pattern match
            if (pattern && value && !pattern.test(value)) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isValid = validateForm();
        isValid && handleSubmit(e);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                {map(formObject, (el, index) => (<TextBox key={index} type={el?.type} name={el?.label} id={el?.label} placeholder={el?.label} value={values[el?.key]} onChange={(e) => handleChange(e, el.key)} pattern={el?.pattern} error={errors[el?.key]} />))}
                <Button value={buttonLabel} primary />
            </form>
        </>
    )
}

export default React.memo(FormWrapper);