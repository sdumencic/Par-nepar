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
    nePar: nepar[0],
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
    this.setState({
      igrac: brojevi,
      pobjednik: ""
    });
  };

  selectNepar = (nepar) => {
    this.setState({
      nePar: nepar,
      pobjednik: ""
    });
  };

  select = () => {
    if(this.selectPobjednik() === "Nepar" && this.state.nePar === "nepar") {
        return "pobjednik"
    } else if (this.selectPobjednik() === "Par" && this.state.nePar === "par"){
        return "pobjednik"
    } else {
      return "Nazalost, izgubio si"
    }
  }


  render() {
    const {igrac, racunalo, pobjednik, nePar} = this.state;
    return (
      <div>
        <h1>Par nepar</h1>

        <div>
          <Igrac brojevi = {igrac}/>
          <Igrac brojevi = {racunalo}/>
        </div>

        <div>          
          <Hand onClick={() => this.selectBroj("jedan")} label="1" className = {igrac === "jedan" ? "brojeviBtnActive" : "brojeviBtn"}/> 
          <Hand onClick={() => this.selectBroj("dva")} label="2" className = {igrac === "dva" ? "brojeviBtnActive" : "brojeviBtn"}/>
          <Hand onClick={() => this.selectBroj("tri")} label="3" className = {igrac === "tri" ? "brojeviBtnActive" : "brojeviBtn"}/>
          <Hand onClick={() => this.selectBroj("cetiri")} label="4" className = {igrac === "cetiri" ? "brojeviBtnActive" : "brojeviBtn"}/>
          <Hand onClick={() => this.selectBroj("pet")} label="5" className = {igrac === "pet" ? "brojeviBtnActive" : "brojeviBtn"}/>
          
          <div>
            <Nepar onClick={() => this.selectNepar("par")} label="Par" className = {nePar === "par" ? "BtnActive" : "Btn"}/>
            <Nepar onClick={() => this.selectNepar("nepar")} label="Nepar" className = {nePar === "nepar" ? "BtnActive" : "Btn"}/>
          </div>

          <div className="pobjednik">{pobjednik ? this.select() : null}</div>
          <button type="button" onClick={this.startIgra}>
          Start!
          </button>
          
        </div>
              
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))