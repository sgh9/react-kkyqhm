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
  let startClick = 0;
  let listRef = useRef(null);

  return (
    <>
      <Search />
      {notesContext.notes.map(note => {
        return <Note note={note} key={note.id} />;
      })}

      <span className="add-new-notes" onClick={() => history.push(uuid())}>
        <strong>+</strong>
      </span>
    </>
  );
};

export default NotesList;
