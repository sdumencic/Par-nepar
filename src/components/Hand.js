import React from 'react';

const Hand = (props) => {
    return (
        <button onClick = {props.onClick}
            className={props.className}
            >{props.label}</button>
    );
}

export default Hand;