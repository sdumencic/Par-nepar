import React from 'react';
import './index.css';

const Nepar = (props) => {
    return (
        <button onClick = {props.onClick}
            className={props.className}
            >{props.label}</button>
    );
}

export default Nepar;