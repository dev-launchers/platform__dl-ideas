import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

import AppIdeaGeneratorButton from "../IdeaGeneratorButton/AppIdeaGeneratorButton";

const Nav = function (props) {



  return (
    <div className="nav">
      <Link to="/" style={{paddingLeft:"2rem"}}>
        <h2>💡Ideas</h2>
      </Link>
      <Link to="/form" style={{paddingLeft:"2rem"}}>
        <h2>Submit an Idea</h2>
      </Link>
      <Link to="/cards" style={{paddingLeft:"2rem"}}>
        <h2>Browse Ideas</h2>
      </Link>
      <AppIdeaGeneratorButton style={{marginLeft:"auto", marginRight:"2rem", fontSize:"1.3rem", fontWeight:"bold", width:"auto",height:"90%"}} />
    </div>
  )
}

export default Nav;