import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { NotesContext } from './Context/Context';
import Modal from './Modal';
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
      category: 'General',
      quantity: [...notesContext.notes].filter(
        note => note.category === 'general'
      ).length
    }
  ]);

  return (
    <>
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
              <span>{notesContext.notes.length}</span>
            </li>
          </Link>
          {categories.map(category => {
            return (
              <NavLink className="nav-link" to={category.category}>
                <li className="menu-item">
                  <strong>{category.category}</strong>
                  <span>{category.quantity}</span>
                </li>
              </NavLink>
            );
          })}
          <li className="menu-item new-category">
            <strong>Add New category</strong>
          </li>
        </ul>
      </div>
      <Modal>
        <h5>Add New category</h5>
        <input type="text" name="newCategory" value={newC}
      </Modal>
    </>
  );
};

export default Navbar;
