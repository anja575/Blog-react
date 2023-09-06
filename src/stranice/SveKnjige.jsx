import React from 'react'
import Knjiga from '../komponente/Knjiga';
import {useState} from 'react';

const SveKnjige = ({ sveknjige, dodajDugme, omiljeneIliNe}) => {
  const [knjige, postaviKnjige] = useState(sveknjige);

  const sortirajKnjige = () => {
    const sortiraneKnjige = [...knjige].sort((a, b) => a.naziv.localeCompare(b.naziv));
    postaviKnjige(sortiraneKnjige);
  };


  const pretrazi = (rec) => {
    const filtriraneKnjige = sveknjige.filter((knjiga) =>
      knjiga.naziv.toLowerCase().includes(rec.toLowerCase())
    );
    postaviKnjige(filtriraneKnjige);
  };

  return (
    <div className='knjige'>
    <div>
    <input className='pretraga'
     type="text"
     placeholder="Pretraži knjige po nazivu"
     onChange={(e) => pretrazi(e.target.value)}
    />
    <button className= 'dugmeSortiraj' onClick={sortirajKnjige}>Sortiraj komponente</button>
    </div>
    <div className="sve-knjige">
    {knjige.map((knjiga) => (
      <Knjiga knjiga={knjiga} key={knjiga.id}  dodajDugme={dodajDugme} omiljeneIliNe={omiljeneIliNe}/>
    ))}
    </div>
  </div>
  )
}

export default SveKnjige