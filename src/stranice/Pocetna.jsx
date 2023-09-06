import React from 'react'
import { Link } from 'react-router-dom'

function Pocetna() {
  return (
    <div className='pocetnaa'>
    <h1 className='naslov'>DOBRODOSLI U NASU KNJIZARU!</h1>
        <h2 className='naslov'>Pogledajte nasu ponudu!</h2>
    <div className='pocetna'>
        
        <ul>
        <li>
          <Link to="/knjige">Sve knjige</Link>
        </li>
        <li>
          <Link to="/drame">Drame</Link>
        </li>
        <li>
          <Link to="/romani">Romani</Link>
        </li>
        <li>
          <Link to="/omiljene">Omiljene</Link>
        </li>
      </ul>
      </div>

    </div>
  )
}

export default Pocetna