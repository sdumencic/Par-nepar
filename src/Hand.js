import React from 'react';
import './index.css';

const Hand = (props) => {
    return (
        <button onClick = {props.onClick}
            className={props.className}
            >{props.label}</button>
    );
}

export default Hand;