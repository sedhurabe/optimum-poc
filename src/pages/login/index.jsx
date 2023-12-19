import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { some } from 'lodash';
import { SignInObj } from 'src/config';
import { FormWrapper, Button, AlertBox } from "src/components";
import useValidation from 'src/hook/useValidation';
import "./style.scss";

const Login = () => {
    const navigate = useNavigate();
    const [loginObj, setloginObj] = useState({ email: "", password: "" });
    const [validationState, setValidationState] = useState('');
    const [validateInputs] = useValidation();

    const handleChange = (e, key) => {
        setloginObj({ ...loginObj, [key]: e.target.value });
    }

    const handleResult = (status, message) => {
        if (status) {
            const reloc = localStorage.getItem('user');
            const loc = JSON.parse(reloc);
            const { email, password } = loginObj;
            const isExist = some(loc, el => (el?.email === email && el?.password === password));
            isExist ? navigate("/home") : setValidationState('Invalid email or password');
        } else {
            setValidationState(message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateInputs(loginObj, handleResult);
    }

    return (
        <div className="login-container">
            <div className="login-container__content">
                <h1>Welcome Back. <br /> Sign in to your account</h1>
                {!!validationState && <AlertBox content={validationState} error={validationState !== 'Successfull'} />}
                <FormWrapper handleSubmit={handleSubmit} handleChange={handleChange} values={loginObj} formObject={SignInObj} buttonLabel="Sign in" />
                <div className="divider"><span>Or</span></div>
                <Button value="Sign up" secondary onClick={() => navigate("/signup")} />
            </div>
        </div>
    )
}

export default Login