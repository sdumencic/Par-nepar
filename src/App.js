import React from 'react';
import Igrac from "./components/Igrac";
import Hand from "./components/Hand";
import Nepar from "./components/Nepar";

const brojevi = ["jedan", "dva", "tri", "cetiri", "pet"];

class App extends React.Component {

  state = {
    igrac: brojevi[0],
    nePar: "",
    racunalo: brojevi[0],
    pobjednik: "",
    pobjede: 0,
    porazi: 0,
    igre: [] 
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
        this.selectPobjednik();
      }
    }, 100);
  };

  selectPobjednik = () => {
    const {igrac, racunalo, nePar, pobjede, porazi} = this.state;
    let zbroj = "";
    let { igre } = this.state;
    if((igrac === "jedan" || igrac === "tri" || igrac === "pet") && (racunalo === "dva" || racunalo === "cetiri")) {
      zbroj = "nepar";
    } else if((racunalo === "jedan" || racunalo === "tri" || racunalo === "pet") && (igrac === "dva" || igrac === "cetiri")) {
      zbroj = "nepar";
    } else {
      zbroj = "par";
    } 

    if(zbroj === nePar) {
      igre.push({igrac: igrac, racunalo: racunalo, nePar: nePar, pobjednik: "igrac"});
      this.setState({
        pobjednik: "igrac",
        pobjede: pobjede + 1,
        igre: igre
        });
    } else {
      igre.push({igrac: igrac, racunalo: racunalo, nePar: nePar, pobjednik: "racunalo"});
      this.setState({
        pobjednik: "racunalo",        
        porazi: porazi + 1,
        igre: igre
        });
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
    if(this.state.pobjednik === "igrac") {
        return "Pobjednik"   
    } else {
        return "Nažalost, izgubio si"
    }
  }

  ocistiHistory = () => {
    this.setState({
      igre: [],
      pobjede: 0,
      porazi: 0
    });
  }


  render() {
    const {igrac, racunalo, pobjednik, nePar, pobjede, porazi, igre} = this.state;
    const sveOdabrano = (igrac !== "") && (nePar !== "");

    const history = igre.map((element, index) =>(
      <li key = {index} className = "historyText">Ja: {element.igrac} ({element.nePar}), Racunalo: {element.racunalo}, Pobjednik: {element.pobjednik}</li>
    ));
    return (
      <div>
        <h1 className="naslov">Par nepar</h1>

        <div style = {{textAlign: "center"}}>
          <h2 className = "score">{pobjede} : {porazi}</h2>
        </div>

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

          {!sveOdabrano ? <button type="button" onClick={this.startIgra} disabled className="BtnStartDisabled">
          Start!
          </button> : 
            <button type="button" onClick={this.startIgra} className= "BtnStartActive">
            Start!
            </button>}          
          
        </div>

          <div className = "history">
            <h2 style = {{textAlign: "center"}} className = "historyNaslov">Odigrane igre</h2>
            <button type = "button" className="ocistiBtn" onClick={this.ocistiHistory}> 🗑&#xFE0E; </button>
            {history.length !== 0 ? <ol style = {{textAlign: "center"}} className = "historyText">{history}</ol> : <p style = {{textAlign: "center"}} className = "historyText">Nema odigranih igara</p>}
          </div>

      </div>
    );
  }
}

export default App;