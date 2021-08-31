import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { NotesContext } from './Context/Context';

const Note = ({ note }) => {
  let history = useHistory();
  const notesContext = useContext(NotesContext);

  return (
    <div className="note" onClick={() => history.replace(`notes/${note.id}`)}>
      <p>
        <strong>{note.body}</strong>
      </p>
      <div className="bottom-row">
        <small>{note.date}</small>
        <br />
        <small
          style={{ cursor: 'pointer' }}
          onClick={e => {
            e.stopPropagation();
            notesContext.deleteNotes(note.id);
          }}
        >
          Delete
        </small>
      </div>
    </div>
  );
};

export default Note;
