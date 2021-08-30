import React, { useReducer, createContext } from 'react';
import { v4 as uuid } from 'uuid';
import reducer from './reducer';

let initialState = [
  {
    id: uuid(),
    body: 'this the body of the note 1',
    category: 'general',
    date: new Date().toLocaleString()
  },
  {
    id: uuid(),
    body: 'this the body of the note 2',
    category: 'general',
    date: new Date().toLocaleString()
  },
  {
    id: uuid(),
    body: 'this the body of the note 3',
    category: 'general',
    date: new Date().toLocaleString()
  },
  {
    id: uuid(),
    body: 'this the body of the note 4',
    category: 'general',
    date: new Date().toLocaleString()
  }
];

export const NotesContext = createContext(initialState);

const NotesContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, initialState);

  const addNewNote = note => {
    dispatch({
      type: 'ADD',
      payload: {
        note: note
      }
    });
  };
  const updateNotes = note => {
    dispatch({
      type: 'UPDATE',
      payload: {
        note: note
      }
    });
  };
  return (
    <NotesContext.Provider
      value={{ notes, addNewNote: addNewNote, updateNotes: updateNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
