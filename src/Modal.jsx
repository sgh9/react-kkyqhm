import React, { useState } from 'react';

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="modal-container">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
