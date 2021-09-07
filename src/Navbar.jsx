import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { NotesContext } from './Context/Context';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  let { pathname } = useLocation();
  const notesContext = useContext(NotesContext);
  const [categories, setCategories] = useState([
    {
      id: 1,
      category: 'Jokes',
      quantity: [...notesContext.notes].filter(
        note => note.category === 'jokes'
      ).length
    },
    {
      id: 2,
      category: 'general',
      quantity: [...notesContext.notes].filter(
        note => note.category === 'general'
      ).length
    }
  ]);

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
        <Link
          className={`${pathname.toString() === '/' ? 'active' : ''}`}
          to="/"
        >
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
