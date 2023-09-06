import React from 'react'
import Knjiga from '../komponente/Knjiga';

const SveKnjige = ({ sveknjige, dodajDugme, omiljeneIliNe}) => {
  return (
     
    <div className='knjige'>
    <div className="sve-knjige">
    {sveknjige.map((knjiga) => (
      <Knjiga knjiga={knjiga} key={knjiga.id}  dodajDugme={dodajDugme} omiljeneIliNe={omiljeneIliNe}/>
    ))}
    </div>
  </div>
  )
}

export default SveKnjige