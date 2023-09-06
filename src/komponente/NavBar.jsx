import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {BiBookHeart} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'

function NavBar() {
  return (
    <div className="navBar">
    <div className="Links">
            <Link to="/"> Početna strana  <AiOutlineHome/> </Link>
            <Link to ="/knjige"> Sve knjige <BsBook/> </Link>
            <Link to='/romani'> Romani <BiBookHeart/> </Link>
            <Link to='/drame'> Drame <BiBook/> </Link>
            <Link to="/omiljene"> Omiljene knjige <AiOutlineHeart/> </Link>
        </div>
    </div>
    
  )
}

export default NavBar