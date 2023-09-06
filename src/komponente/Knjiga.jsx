import React from 'react'

function Knjiga({knjiga, dodajDugme, omiljeneIliNe, izbaciDugme}) {
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

    {omiljeneIliNe === 0 ? (
        
    <button
        className="dugme"
        onClick={() => dodajDugme(knjiga.naziv, knjiga.id)}
    > 
         Dodaj u omiljene ♥ 
    </button> 
    )
    : ( 
        <button
        className="dugme"
        onClick={() => izbaciDugme(knjiga.id)}
    > Izbaci iz omiljenih ♥ 
    </button> 
    )
    
    }
     
    </div>
  )
}

export default Knjiga