import React from 'react';
import jedan from './assets/jedan.svg';
import dva from './assets/dva.svg';
import tri from './assets/tri.svg';
import cetiri from './assets/cetiri.svg';
import pet from './assets/pet.svg';


const Igrac = ({brojevi}) => {
    let source = "";
    switch (brojevi.toLowerCase()) {
        case 'jedan':
            source = jedan;
            break;
        case 'dva':
            source = dva;
            break;
        case 'tri':
            source = tri;
            break;
        case 'cetiri':
            source = cetiri;
            break;
        case 'pet' :
            source = pet;
            break;
        default:
            break;
    }
    return (
        <div className = "igrac">
            <img className="slika-igrac"
                src = {
                    source
                } alt = "1 2 3 4 5"
            />
        </div>
    )
}


export default Igrac;