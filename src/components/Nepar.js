import React from 'react';

const Nepar = (props) => {
    return (
        <button onClick = {props.onClick}
            className={props.className}
            >{props.label}</button>
    );
}

export default Nepar;