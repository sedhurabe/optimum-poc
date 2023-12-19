import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { some } from 'lodash';
import { SignUpObj } from 'src/config';
import { FormWrapper, AlertBox } from "src/components";
import useValidation from 'src/hook/useValidation';

const Signup = () => {
    const navigate = useNavigate();
    const [loginObj, setloginObj] = useState({ name: "", password: "", email: "" });
    const [validationState, setValidationState] = useState('');
    // const [validationState, validateInputs] = useValidation();
    const [validateInputs] = useValidation();
    const handleChange = (e, key) => {
        setloginObj({ ...loginObj, [key]: e.target.value });
    }

    const handleResult = (result, error) => {
        if (result) {
            const locData = localStorage.getItem('user');
            if (locData !== null) {
                const data = JSON.parse(locData);
                const { email } = loginObj;
                const emailExist = some(data, el => el.email === email);
                if (emailExist) {
                    setValidationState('Email already exist');
                } else {
                    const newData = [...data, loginObj ];
                    const str = JSON.stringify(newData);
                    localStorage.setItem('user', str);
                    navigate('/');
                } 
            } else {
                localStorage.setItem('user', JSON.stringify([loginObj]));
                navigate('/');
            }
        } else {
            setValidationState(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs(loginObj, handleResult);
    }

    return (
        <div className="login-container">
            <div className="login-container__content">
                <Link to='/' className='linked'>&#8592; Back to Sign in</Link>
                <h1>Sign up. <br /> Create a new account</h1>
                {!!validationState && <AlertBox content={validationState} error={validationState !== 'Successfull'} />}
                <FormWrapper handleSubmit={handleSubmit} handleChange={handleChange} values={loginObj} formObject={SignUpObj} buttonLabel="Sign up" />
            </div>
        </div>
    )
}

export default Signup