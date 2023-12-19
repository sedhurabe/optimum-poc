import React from 'react';
import './style.scss'

const TextBox = ({ type, onChange, value, name, id, placeholder, error, required }) => (
    <div className="form-element">
        <input {...{ name, type, id, onChange, value, placeholder, required }} />
        <span className='form-element__error'>{error}</span>
    </div>
);

export default React.memo(TextBox);