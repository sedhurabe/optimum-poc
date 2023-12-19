import React from "react";
import './style.scss';

const AlertBox = (props) => {
    const { success, error, warning, content } = props;
    return<>
        <div className={['alert-box', success && 'alert-box--success', error && 'alert-box--error', warning && 'alert-box--warning'].join(' ')}>{content}</div>
    </>
}

export default React.memo(AlertBox)