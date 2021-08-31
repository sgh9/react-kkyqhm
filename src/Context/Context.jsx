import React, { useEffect, useReducer, createContext } from 'react';
import { v4 as uuid } from 'uuid';
import reducer from './reducer';
import { timeFormat } from '../utilities';

let notes = JSON.parse(localStorage.getItem('notes'));

let initialState = notes || [
  {
    id: uuid(),
    body: 'this the body of the note 1',
    category: 'general',
    date: timeFormat(new Date().getTime() - 200000)
  },
  {
    id: uuid(),
    body: 'this the body of the note 2',
    category: 'general',
    date: timeFormat(new Date().getTime() - 600000)
  },
  {
    id: uuid(),
    body: 'this the body of the note 3',
    category: 'general',
    date: timeFormat(new Date('2021-02-09T14:56:23').getTime())
  },
  {
    id: uuid(),
    body: 'this the body of the note 3',
    category: 'general',
    date: timeFormat(new Date('2021-02-09T14:56:23').getTime())
  },
  {
    id: uuid(),
    body: 'this the body of the note 3',
    category: 'general',
    date: timeFormat(new Date('2021-02-09T14:56:23').getTime())
  },
  {
    id: uuid(),
    body: 'this the body of the note 3',
    category: 'jokes',
    date: timeFormat(new Date('2021-02-09T14:56:23').getTime())
  },
  {
    id: uuid(),
    body: 'this the body of the note 444',
    category: 'jokes',
    date: timeFormat(new Date().getTime())
  }
];

export const NotesContext = createContext(initialState);

const NotesContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  const addNewNote = note => {
    dispatch({
      type: 'ADD',
      payload: {
        note
      }
    });
  };
  const updateNotes = note => {
    dispatch({
      type: 'UPDATE',
      payload: {
        note
      }
    });
  };

  const deleteNotes = id => {
    dispatch({
      type: 'DELETE',
      payload: {
        id
      }
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNewNote: addNewNote,
        updateNotes: updateNotes,
        deleteNotes: deleteNotes
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
