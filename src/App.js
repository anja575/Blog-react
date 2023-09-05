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


function App() {


  const [knjige] = useState([
    { id: 1,
      naziv: "Rat i mir",
      pisac: "Lav Tolstoj",
      zanr: "Roman",
      slika: rim,
    }, {
      id: 2,
      naziv: "Romeo i Julija",
      pisac: "Vilijam Sekspir",
      zanr: "Drama",
      slika: rij,
    },{
      id: 3,
      naziv: "Zlocin i kazna",
      pisac: "Fjodor Dostojevski",
      zanr: "Roman",
      slika: zik,
    },{
      id: 4,
      naziv: "Don Kihot",
      pisac: "Migel de Servantes",
      zanr: "Roman",
      slika: dk,
    },{
      id: 5,
      naziv: "Kostana",
      pisac: "Borisav Stankovic",
      zanr: "Drama",
      slika: k,
    }, {
      id: 6,
      naziv: "Ana Karenjina",
      pisac: "Lav Tolstoj",
      zanr: "Roman",
      slika: ak,
    }, {
      id: 7,
      naziv: "Hamlet",
      pisac: "Vilijam Sespir",
      zanr: "Drama",
      slika: h,
    },
      {
      id: 8,
      naziv: "Antigona",
      pisac: "Sofokle",
      zanr: "Drama",
      slika: a,
    } , {
      id: 9,
      naziv: "U potrazi za izgubljenim vremenom",
      pisac: "Marsel Prust",
      zanr: "Roman",
      slika: upziv,
    }
  ]);

  






  return (
    <div className="App">
   
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<SveKnjige   sveknjige={knjige} />}/>
          <Route path="/drame" element={<Drame />}/>
          <Route path="/romani" element={<Romani/>}/>
          <Route path="/omiljene" element={<Omiljene />}/>
        </Routes>
      <Footer /> 
    </Router>

  </div>
  );
}

export default App;
