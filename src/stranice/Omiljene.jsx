import React from 'react'
import Knjiga from '../komponente/Knjiga';

const Omiljene = ({ omiljene, omiljeneIliNe, izbaciDugme}) => {
  return (
    <div className='knjige'>
    <div className="sve-knjige">
    {omiljene.map((knjiga) => (
      <Knjiga knjiga={knjiga} key={knjiga.id} omiljeneIliNe={omiljeneIliNe} izbaciDugme={izbaciDugme} />
    ))}
    </div>
  </div>
  )
}

export default Omiljene