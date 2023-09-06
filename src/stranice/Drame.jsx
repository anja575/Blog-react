import React from 'react';
import Knjiga from '../komponente/Knjiga';

function Drame({ drame, dodajDugme, omiljeneIliNe}) {
  return (
    <div className='knjige'>
    <div className="sve-knjige">
    {drame.map((knjiga) => (
      <Knjiga knjiga={knjiga} key={knjiga.id}  dodajDugme={dodajDugme} omiljeneIliNe={omiljeneIliNe}/>
    ))}
    </div>
  </div>
  )
}

export default Drame