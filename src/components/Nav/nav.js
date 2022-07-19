import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



import {
  NavBar  
} from "./StyledNav";


const Nav = function (props) {

  return (

    <NavBar>
      <Link to="/" style={{color: "#FFFFFF", marginLeft: "10px"}}>
        <h3>Home</h3>
      </Link>
      <Link to="/form" style={{color: "#FFFFFF", marginLeft: "10px"}}>
        <h3>Submit an Idea</h3>
      </Link>
      <Link to="/cards" style={{color: "#FFFFFF", marginLeft: "10px"}}>
        <h3>Potential Projects</h3>
      </Link>
    </NavBar>

  )
}

export default Nav;