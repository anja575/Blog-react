import React from 'react';
import Knjiga from '../komponente/Knjiga';

function Romani({ romani, dodajDugme, omiljeneIliNe}) {
  return (
    <div className='knjige'>
    <div className="sve-knjige">
    {romani.map((knjiga) => (
      <Knjiga knjiga={knjiga} key={knjiga.id}  dodajDugme={dodajDugme} omiljeneIliNe={omiljeneIliNe}/>
    ))}
    </div>
  </div>
  )
}

export default Romani