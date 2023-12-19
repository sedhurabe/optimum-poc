import React from "react";
import "./style.scss";

const Button = ({ value, onClick, primary, secondary }) => (
    <div className={['form-button', primary && 'form-button--primary', secondary && 'form-button--secondary'].join(' ')}>
        <input type="submit" {...{ value, onClick }} />
    </div>
);

export default React.memo(Button);