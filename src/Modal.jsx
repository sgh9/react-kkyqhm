import React, { useState, useEffect } from 'react';
import close from './assests/menu-close.svg';

const Modal = ({ show, onModalClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  const showMenu = () => {
    setShowModal(show);
    console.log('showModal in modal:', show, showModal);
  };

  useEffect(() => {
    showMenu();
  }, [show]);

  return (
    <div className={`modal-container ${showModal ? 'show' : ''}`}>
      <div className="modal">{children}</div>
      <span className="close">
        <img
          className="modal-close"
          src={close}
          width={30}
          onClick={() => {
            setShowModal(false);
            onModalClose();
          }}
          alt="modal"
        />
      </span>
    </div>
  );
};

export default Modal;
