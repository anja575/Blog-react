import React from 'react'

function Knjiga({knjiga}) {
  return (
    <div className="razmak">
    <div className='knjiga'>
    <img className="slika" src={knjiga.slika} alt="Slika knjige"/>
        <div className="opis">
        <h2>{knjiga.naziv}</h2>
        <h3>{knjiga.pisac}</h3>
        <p>{knjiga.zanr}</p>
        </div>
        
    </div>
    </div>
  )
}

export default Knjiga