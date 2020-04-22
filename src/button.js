import React from 'react';
import './index.css';

const Hand = (props) => {
    return (
        <button
            className="brojeviBtn"
            >{props.label}</button>
    );
}

export default Hand;