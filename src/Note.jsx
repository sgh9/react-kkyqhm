import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Note = ({ note }) => {
  let history = useHistory();
  return (
    <div className="note" onClick={() => history.push(note.id)}>
      <p>
        <strong>{note.body}</strong>
      </p>
      <small>{note.date}</small>
    </div>
  );
};

export default Note;
