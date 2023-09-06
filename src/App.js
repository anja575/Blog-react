import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './komponente/NavBar';
import Footer from './komponente/Footer';
import {useState} from 'react';
import SveKnjige from './stranice/SveKnjige';
import Drame from './stranice/Drame';
import Romani from './stranice/Romani';
import Omiljene from './stranice/Omiljene';
import ak from './slike/anakarenjina.png'
import rij from './slike/romeoijulija.png'
import zik from './slike/zlocinikazna.png'
import a from './slike/antigona.png'
import dk from './slike/donkihot.png'
import h from './slike/hamlet.png'
import k from './slike/kostana.png'
import upziv from './slike/upotrazizaizgubljenimvremeno.png'
import rim from './slike/ratimir.png'
import Pocetna from './stranice/Pocetna';


function App() {
  const [omiljeneKnjige, dodajUOmiljene] = useState([]);
  const [knjige] = useState([
    { id: 1,
      naziv: "Rat i mir",
      pisac: "Lav Tolstoj",
      zanr: "Roman",
      slika: rim,
      omiljena: 0,
    }, {
      id: 2,
      naziv: "Romeo i Julija",
      pisac: "Vilijam Sekspir",
      zanr: "Drama",
      slika: rij,
      omiljena: 0,
    },{
      id: 3,
      naziv: "Zlocin i kazna",
      pisac: "Fjodor Dostojevski",
      zanr: "Roman",
      slika: zik,
      omiljena: 0,
    },{
      id: 4,
      naziv: "Don Kihot",
      pisac: "Migel de Servantes",
      zanr: "Roman",
      slika: dk,
      omiljena: 0,
    },{
      id: 5,
      naziv: "Kostana",
      pisac: "Borisav Stankovic",
      zanr: "Drama",
      slika: k,
      omiljena: 0,
    }, {
      id: 6,
      naziv: "Ana Karenjina",
      pisac: "Lav Tolstoj",
      zanr: "Roman",
      slika: ak,
      omiljena: 0,
    }, {
      id: 7,
      naziv: "Hamlet",
      pisac: "Vilijam Sespir",
      zanr: "Drama",
      slika: h,
      omiljena: 0,
    },
      {
      id: 8,
      naziv: "Antigona",
      pisac: "Sofokle",
      zanr: "Drama",
      slika: a,
      omiljena: 0,
    } , {
      id: 9,
      naziv: "U potrazi za izgubljenim vremenom",
      pisac: "Marsel Prust",
      zanr: "Roman",
      slika: upziv,
      omiljena: 0,
    }
  ]);

  function omiljene() {
    let omiljene = knjige.filter((knjiga) => knjiga.omiljena > 0);
    dodajUOmiljene(omiljene);
  }

  function dodajDugme(naziv, id) {
    knjige.forEach((knjiga) => {
      if (knjiga.id === id) {
        if(knjiga.omiljena > 0) {
          console.log("Knjiga je vec dodata u omiljene.");
          return;
        }
        else {
          knjiga.omiljena++;
          console.log("Knjiga " + knjiga.naziv + " je dodata u omiljene!");
          
        }
      }
    });
    omiljene();
  }

  function izbaciDugme(id) {
    knjige.forEach((knjiga) => {
      if (knjiga.id === id) {
        knjiga.omiljena = 0;
      }
    });
    omiljene();
  }
  
  const [drame, dodajUDrame] = useState(knjige.filter((knjiga) => knjiga.zanr === 'Drama'));
  const [romani, dodajURomane] = useState(knjige.filter((knjiga) => knjiga.zanr === 'Roman'));

  return (
    <div className="App">
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Pocetna/>}/>
          <Route path="/knjige" element={<SveKnjige   sveknjige={knjige} dodajDugme = {dodajDugme} omiljeneIliNe = {0}/>}/>
          <Route path="/drame" element={<Drame  drame={drame} dodajDugme = {dodajDugme} omiljeneIliNe = {0} />}/>
          <Route path="/romani" element={<Romani romani={romani} dodajDugme = {dodajDugme} omiljeneIliNe = {0}/>}/>
          <Route path="/omiljene" element={<Omiljene omiljene = {omiljeneKnjige} omiljeneIliNe = {1} izbaciDugme={izbaciDugme}/>}/>
        </Routes>
      <Footer /> 
    </Router>
  </div>
  );
}

export default App;
