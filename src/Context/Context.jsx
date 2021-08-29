import React, { useReducer, createContext } from 'react';
import { v4 as uuid } from 'uuid';
import reducer from './reducer';

let initialState = [
  {
    id: uuid(),
    title: 'this the first title this the first title ',
    body: 'this the body of the note',
    category: 'general',
    date: new Date().toLocaleString()
  },
  {
    id: uuid(),
    title: 'this the first title',
    body: 'this the body of the note',
    category: 'general',
    date: new Date().toLocaleString()
  },
  {
    id: uuid(),
    title: 'this the first title',
    body: 'this the body of the note',
    category: 'general',
    date: new Date().toLocaleString()
  },
  {
    id: uuid(),
    title: 'this the first title this the first title ',
    body: 'this the body of the note',
    category: 'general',
    date: new Date().toLocaleString()
  }
];

const resetNote = {
  id: '',
  title: ' ',
  body: '',
  category: '',
  date: ''
};

export const NotesContext = createContext(initialState);

const NotesContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, initialState);

  const addNewNote = note => {
    return dispatch({
      type: 'ADD',
      payload: {
        note: note
      }
    });
  };

  return (
    <NotesContext.Provider value={{ notes, addNewNote: addNewNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
