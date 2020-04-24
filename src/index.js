import React from 'react';
import ReactDOM from 'react-dom';
import Igrac from "./igrac";
import Hand from "./button";
import './index.css';
import Pobjednik from "./pobjednik";
import Nepar from "./buttonx";
/*import App from './App';
import * as serviceWorker from './serviceWorker';*/

const brojevi = ["jedan", "dva", "tri", "cetiri", "pet"];
const nepar = ["par", "nepar"];

class App extends React.Component {

  state = {
    igrac: brojevi[0],
    racunalo: brojevi[0],
    pobjednik: "",
  }

  startIgra = () => {
    let count = 0;
    let interval = setInterval(() => {
      count++;
      this.setState({
        racunalo: brojevi[Math.floor(Math.random() * brojevi.length)],
        pobjednik: ""
      })
      if(count > 10) {
        clearInterval(interval);
        this.setState({
          pobjednik: this.selectPobjednik()
        });
      }
    }, 100);
  };

  selectPobjednik = () => {
    const {igrac, racunalo} = this.state;
    
    if((igrac === "jedan" || igrac === "tri" || igrac === "pet") && (racunalo === "dva" || racunalo === "cetiri")) {
      return "Nepar";
    } else if((racunalo === "jedan" || racunalo === "tri" || racunalo === "pet") && (igrac === "dva" || igrac === "cetiri")) {
      return "Nepar";
    } else {
      return "Par";
    }
  };

  selectBroj = (brojevi) => {
    //console.log(brojevi)
    this.setState({
      igrac: brojevi,
      winner: ""
    });
  };

  selectNepar = (nepar) => {
    console.log(nepar)
    this.setState({
      igrac: nepar,
      winner: ""
    });
  };

  select = () => {
    if(this.selectPobjednik() === "Nepar" && this.selectNepar() === "nepar") {
        return "pobjednik"
    } else if (this.selectPobjednik() === "Nepar" && this.selectNepar() === "nepar"){
        return "pobjednik"
    } else {
      return "Nazalost, izgubio si"
    }
  }


  render() {
    const {igrac, racunalo, pobjednik} = this.state;
    return (
      <div>
        <h1>Par nepar</h1>

        <div>
          <Igrac brojevi = {igrac}/>
          <Igrac brojevi = {racunalo}/>
        </div>

        <div>          
          <Hand onClick={() => this.selectBroj("jedan")} label="1"/> 
          <Hand onClick={() => this.selectBroj("dva")} label="2"/>
          <Hand onClick={() => this.selectBroj("tri")} label="3"/>
          <Hand onClick={() => this.selectBroj("cetiri")} label="4"/>
          <Hand onClick={() => this.selectBroj("pet")} label="5"/>
          {/*<div>
          <button
            className="brojeviBtn"
            onClick={() => this.selectBroj("jedan")}
          >
            1
          </button>

          <button
            className="brojeviBtn"
            onClick={() => this.selectBroj("dva")}
          >
            2
          </button>

          <button
            className="brojeviBtn"
            onClick={() => this.selectBroj("tri")}
          >
            3
          </button>

          <button
            className="brojeviBtn"
            onClick={() => this.selectBroj("cetiri")}
          >
            4
          </button>

          <button
            className="brojeviBtn"
            onClick={() => this.selectBroj("pet")}
          >
            5
          </button>
          
          </div>*/}

          <div>
            <Nepar onClick={() => this.selectNepar("par")} label="Par"/>
            <Nepar onClick={() => this.selectNepar("nepar")} label="Nepar"/>
          </div>

          <div className="pobjednik">{pobjednik ? this.selectPobjednik() : null}</div>
          <button type="button" onClick={this.startIgra}>
          Start!
          </button>
          
          </div>

          {/*<div> {this.select() === "pobjednik" ? <h1>Pobjednik</h1> : <h1>Gubitnik</h1> }
          </div>*/}
          {/*{this.select()}*/}
        
        {/*<div>
          <Pobjednik />

          <button onClick = {this.startIgra} > Start </button>
        </div>*/}
        
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