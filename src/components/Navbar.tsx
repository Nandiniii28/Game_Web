import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"#020202"}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img 
            src="./images/logo.png" 
            alt="Finunique Logo" 
            height="64"
            className="py-2 d-inline-block align-top"
          />
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <Menu />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto gap-5">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link">Games</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/responsible-gaming" className="nav-link">Responsible Gaming</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};