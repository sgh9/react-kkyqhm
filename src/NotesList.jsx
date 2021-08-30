import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Note from './Note';
import Search from './Search';
import { NotesContext } from './Context/Context';

const NotesList = () => {
  const notesContext = useContext(NotesContext);
  useEffect(() => {}, []);

  return (
    <>
      <Search />
      {notesContext.notes.map(note => {
        return <Note note={note} key={note.id} />;
      })}
    </>
  );
};

export default NotesList;
