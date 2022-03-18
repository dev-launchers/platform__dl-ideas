import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = function (props) {



  return (
    <div className="nav">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/form">
        <h3>Submit an Idea</h3>
      </Link>
      <Link to="/cards">
        <h3>Potential Projects</h3>
      </Link>
    </div>
  )
}

export default Nav;