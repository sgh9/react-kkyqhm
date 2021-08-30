import React, { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext, useNotes } from './Context/Context';
import { v4 as uuid } from 'uuid';

const NotesDetails = () => {
  const { notesId } = useParams();
  const textAreaRef = useRef();
  const [newNote, setNewNote] = useState('');
  const notesContext = useContext(NotesContext);

  useEffect(() => {
    // textAreaRef.current.focus();
    const notes = [...notesContext.notes];
    const selectedNote = notes.find(note => {
      return note.id.toString() === notesId.toString();
    });
    setNewNote(selectedNote?.body);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const notes = notesContext.notes;
    notesContext.updateNotes();
    console.log('note:', newNote, notes);
  };

  const addNote = () => {
    let newNoteInput = {
      id: uuid(),
      body: newNote.body,
      category: 'general',
      date: new Date().toLocaleString()
    };

    notesContext.addNewNote(newNoteInput);
  };

  return (
    <div className="notes-details">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <small>{new Date().toLocaleString()}</small>
          <textarea
            className="text-area"
            ref={textAreaRef}
            value={newNote}
            name="textarea"
            onChange={e => setNewNote(e.target.value)}
          />
          <input type="submit" name="save" value="save" />
        </form>
      </div>
    </div>
  );
};
export default NotesDetails;
