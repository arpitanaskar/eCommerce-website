import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalOverlay = (props) => {
  return <div className="modal-overlay">{props.children}</div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("cartOverlay");

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
