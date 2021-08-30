import React, { useState, useEffect} from 'react';
import { NotesContext } from './Context/Context';
const NewNotes= ()=> {
  const [newNote, setNewNote] = useState({});
  const notesContext = useContext(NotesContext);
  
  useEffect(() => {
    addNNote();
  }, []);

  const addNote = () => {
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
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input type="text" className="title" name="title"/>
        </form>
    </div>
  )
}

export default NewNotes;