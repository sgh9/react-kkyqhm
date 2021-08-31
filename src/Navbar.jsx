import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let {
    location: { pathname }
  } = useHistory();

  useEffect(() => {
    
  }, [pathname]);

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
        <Link className={`${pathname === '/' ? 'active' : ''}`} to="/">
          <li className="menu-item">
            <strong>All Notes </strong>
            <span>{133}</span>
          </li>
        </Link>
        <NavLink className="nav-link" to="/Jokes">
          <li className="menu-item">
            <strong>Jokes</strong>
            <span>{133}</span>
          </li>
        </NavLink>
        <NavLink className="nav-link" to="/General">
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
