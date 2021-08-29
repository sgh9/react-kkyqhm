import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="nav-icon">
          <button className="btn" onClick={() => setShowMenu(!showMenu)}>
            Notes
          </button>
        </div>
      </nav>
      <ul className={`menu-items ${showMenu && 'show'}`}>
        <NavLink to="/All">
          <li className="menu-item">
            <strong>All Notes </strong>
            <span>{133}</span>
          </li>
        </NavLink>
        <NavLink to="/Jokes">
          <li className="menu-item">
            <strong>Jokes</strong>
            <span>{133}</span>
          </li>
        </NavLink>
        <NavLink to="/General">
          <li className="menu-item">
            <strong>General</strong>
            <span>{133}</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
