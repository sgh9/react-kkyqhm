import React, { useState, useEffect, useContext, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Note from './Note';
import Search from './Search';
import { NotesContext } from './Context/Context';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';

const NotesList = () => {
  const notesContext = useContext(NotesContext);
  let history = useHistory();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notesContext.notes);
  }, []);

  const onSearchKey = searchKey => {
    let newNotes = notes.filter(note => {
      return (
        searchKey.toString() === '' ||
        note.body
          .toString()
          .toUpperCase()
          .includes(searchKey.toString().toUpperCase())
      );
    });
    setNotes(newNotes);
  };

  return (
    <>
      <Search onSearchKey={onSearchKey} />
      {notes.map(note => {
        return <Note note={note} key={note.id} />;
      })}

      <span className="add-new-notes" onClick={() => history.push(uuid())}>
        <strong>+</strong>
      </span>
    </>
  );
};

export default NotesList;
