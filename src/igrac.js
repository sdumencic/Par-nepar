import React from 'react';
import jedan from './assets/jedan.svg';
import dva from './assets/dva.svg';
import tri from './assets/tri.svg';
import cetiri from './assets/cetiri.svg';
import pet from './assets/pet.svg';


const Igrac = (props) => {
    return (
        <div className = "igrac">
            <img className="slika-igrac"
                src = {jedan} alt = "jedan"
            />
        </div>
    )
}


export default Igrac;