import React, { useState, useEffect } from 'react';
import { NotesContext } from './Context/Context';
const NewNotes = () => {
  const [newNote, setNewNote] = useState({});
  const notesContext = useContext(NotesContext);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" className="title" name="title" />
      </form>
    </div>
  );
};

export default NewNotes;
