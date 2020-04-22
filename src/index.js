import React from 'react';
import ReactDOM from 'react-dom';
import Igrac from "./igrac";
import Hand from "./button";
import './index.css';
import Pobjednik from "./pobjednik";
import Nepar from "./buttonx";
/*import App from './App';
import * as serviceWorker from './serviceWorker';*/

const brojevi = ["1", "2", "3", "4", "5"];

class App extends React.Component {

  state = {
    igrac: brojevi[0],
    racunalo: brojevi[0],
    pobjednik: "",
  }
  /*scoreIgraca: "",
  scoreRacunala: "",
  winner: "",
  showPopup: false*/


  render() {
    return (
      <div>
        <h1>1 2 3 4 5</h1>

        <div>
          <Igrac />
          <Igrac />
        </div>

        <div>          
          <Hand onClick={null} label="1"/> 
          <Hand onClick={null} label="2"/>
          <Hand onClick={null} label="3"/>
          <Hand onClick={null} label="4"/>
          <Hand onClick={null} label="5"/>
          
        </div>

        <div>
          {/*<button> Par </button>
          <button> Nepar </button>*/}
          <Nepar onClick={null} label="Par"/>
          <Nepar onClick={null} label="Nepar"/>
        </div>
        <div>
          <Pobjednik />

          <button> Start </button>
        </div>
      </div>
    );
  }
}


/*const App = () => ( //funkcija bez parametara
  <div>
      <p>Hello wolrd</p>
      <p>Hello world {Math.random()}</p>
  </div>
)*/

//ili

/*const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}*/

ReactDOM.render(<App />, document.getElementById('root'))