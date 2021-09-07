import React, { useState, useEffect } from 'react';
import menuClose from './assests/menu-close.svg';

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  });
  return (
    <div className={`modal-container show ${show}`}>
      <div className="modal">{children}</div>
      <span className="modal" />
    </div>
  );
};

export default Modal;
