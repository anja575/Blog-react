import React from 'react'
import { Link } from 'react-router-dom'

function Pocetna() {
  return (
    <div>
    <h1 className='naslov'>DOBRODOŠLI U NAŠU KNJIŽARU!</h1>
        <h2 className='naslov'>Pogledajte našu ponudu!</h2>
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
          <Link to="/omiljene">Omiljene knjige</Link>
        </li>
      </ul>
      </div>

    </div>
  )
}

export default Pocetna