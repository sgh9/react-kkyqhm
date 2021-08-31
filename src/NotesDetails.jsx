import React, { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NotesContext } from './Context/Context';
import { v4 as uuid } from 'uuid';

const NotesDetails = () => {
  const { notesId } = useParams();
  const textAreaRef = useRef();
  const [newNote, setNewNote] = useState({});
  const notesContext = useContext(NotesContext);
  const [editNoteId, setEditNoteId] = useState('');

  useEffect(() => {
    //textAreaRef.current?.focus();
    const notes = [...notesContext.notes];

    const selectedNote = notes.find(note => {
      return note.id.toString() === notesId.toString();
    });

    if (selectedNote) {
      setNewNote(selectedNote);
      setEditNoteId(notesId);
    } else {
      setNewNote({
        id: notesId,
        category: 'general',
        body: '',
        date: new Date().toLocaleString()
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notesContext.notes));
  }, [notesContext.notes]);

  const handleSubmit = e => {
    e.preventDefault();

    if (editNoteId) {
      updateNote();
      return;
    }
    addNote();
  };

  const updateNote = () => {
    notesContext.updateNotes(newNote);
  };

  const addNote = () => {
    let newNoteInput = {
      id: uuid(),
      category: 'general',
      body: newNote.body,
      date: new Date().toLocaleString()
    };

    notesContext.addNewNote(newNoteInput);
  };

  return (
    <div className="notes-details">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <small>{newNote.date}</small>
          <textarea
            className="text-area"
            ref={textAreaRef}
            value={newNote.body}
            name="body"
            onChange={e =>
              setNewNote({ ...newNote, [e.target.name]: e.target.value })
            }
          />
          <input type="submit" name="save" value="save" />
        </form>
      </div>
    </div>
  );
};
export default NotesDetails;
