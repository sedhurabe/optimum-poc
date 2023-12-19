import { useState } from "react";

const useValidation = () => {
    // const [validate, setValidate] = useState(null);
    const validateInputs = (obj, callback) => {
        const { email, password } = obj;
        const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!!email && !!password) {
            if (email.match(regx)) {
                // setValidate('Successfull');
                callback(true, 'Successfull');
            } else {
                // setValidate('Please enter proper email id');
                callback(false, 'Please enter proper email id');
            }
        } else {
            // setValidate('Your email id or password is empty');
            callback(false, 'Your email id or password is empty');
        }
    }

    // return [validate, validateInputs];
    return [validateInputs];
}

export default useValidation;