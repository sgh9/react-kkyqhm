import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const NotesDetails = ({ id }) => {
  const { notesId } = useParams();
  const textAreaRef = useRef();

  useEffect(() => {
    // textAreaRef.current.focus();
  }, []);

  return (
    <div className="notes-details">
      <small>{new Date().toLocaleString()}</small>
      <textarea className="text-area" ref={textAreaRef} name="textarea" />
    </div>
  );
};

export default NotesDetails;
