import React from 'react'
import Knjiga from '../komponente/Knjiga';

const SveKnjige = ({ sveknjige}) => {
  return (
    <div className='knjige'>
    <div className="sve-knjige">
    {sveknjige.map((knjiga) => (
      <Knjiga knjiga={knjiga} key={knjiga.id} />
    ))}
    </div>
  </div>
  )
}

export default SveKnjige