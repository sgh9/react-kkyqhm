import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Note from './Note';
import Search from './Search';
import { NotesContext, useNotes } from './Context/Context';
const NotesList = () => {
  const [newNote, setNewNote] = useState({});

  const notesContext = useContext(NotesContext);
  useEffect(() => {
    addNNote();
  }, []);
  const addNNote = () => {
    let newNote = {
      id: '5',
      title: 'fgfgf ',
      body: 'fgfgfgfgf',
      category: 'gfgfgf',
      date: 'gfgfgfgf'
    };

    notesContext.addNewNote(newNote);
  };

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
