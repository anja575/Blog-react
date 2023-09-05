import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
    <div className="Links">
            <Link to ="/"> Sve knjige </Link>
            <Link to='/romani'> Romani</Link>
            <Link to='/drame'> Drame</Link>
            <Link to="/omiljene"> Omiljene</Link>
        </div>
    </div>
    
  )
}

export default NavBar