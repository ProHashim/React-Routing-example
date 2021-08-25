import { Link } from 'react-router-dom'
import React from 'react';

const Navbar = (props) => {
    return (
      <nav className="navbar">
        <h1>{props.websiteName}</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;