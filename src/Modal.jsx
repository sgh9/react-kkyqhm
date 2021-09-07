import React, { useState, useEffect } from 'react';

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  });
  return (
    <div className={`modal-container ${show}`}>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
