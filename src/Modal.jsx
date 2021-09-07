import React, { useState, useEffect } from 'react';
import close from './assests/menu-close.svg';

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  });
  return (
    <div className={`modal-container show ${show}`}>
      <div className="modal">{children}</div>
      <span className="close">
        <img className="modal-close" src={close} />
      </span>
    </div>
  );
};

export default Modal;
