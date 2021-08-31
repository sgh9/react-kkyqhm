import React, { useState, useEffect, useContext, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Note from './Note';
import Search from './Search';
import { NotesContext } from './Context/Context';
import { v4 as uuid } from 'uuid';
import { useHistory, useParams } from 'react-router-dom';

const NotesList = () => {
  const notesContext = useContext(NotesContext);
  let history = useHistory();
  let { category } = useParams();

  const [notes, setNotes] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  let firstRender = false;

  useEffect(() => {
    firstRender = true;
    if (category) {
      let newNotes = notesByCategory();
      setNotes(newNotes);
      return;
    }
    setNotes(notesContext.notes);
  }, []);

  useEffect(() => {
    if (firstRender) {
      return;
    }
    let newNotes = filterNotes();
    setNotes(newNotes);
  }, [searchKey, notesContext.notes, category]);

  const filterNotes = () => {
    let newNotes = [...notesContext.notes];

    if (category) {
      newNotes = notesByCategory();
    }

    newNotes = newNotes.filter(note => {
      return (
        searchKey.toString() === '' ||
        note.body
          .toString()
          .toLowerCase()
          .includes(searchKey.toString().toLowerCase())
      );
    });
    return newNotes;
  };

  const notesByCategory = () => {
    let newNotes = [...notesContext.notes].filter(note => {
      return (
        note.category.toString().toLowerCase() ===
        category.toString().toLowerCase()
      );
    });
    return newNotes;
  };
  return (
    <>
      <Search onSearchKey={searchKey => setSearchKey(searchKey)} />
      {notes.map(note => {
        return <Note note={note} key={note.id} />;
      })}

      <span
        className="add-new-notes"
        onClick={() => history.push(`notes/${uuid()}`)}
      >
        <strong>+</strong>
      </span>
    </>
  );
};

export default NotesList;
