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
  
  const onSearchKey = searchKey => {
    notesContext.searchNotes(searchKey);
  };

  return (
    <>
      <Search onSearchKey={onSearchKey} />
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
