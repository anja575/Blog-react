import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
function NavBar() {
  return (
    <div className="navBar">
    <div className="Links">
   
            <Link to ="/"> Sve knjige </Link>
            <Link to='/romani'> Romani</Link>
            <Link to='/drame'> Drame</Link>
            <Link to="/omiljene"> Omiljene  <AiOutlineHeart/></Link>
        </div>
    </div>
    
  )
}

export default NavBar