import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

export function Modal({ onClose, largeImageURL }) {
/*
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, [contacts]);

  useEffect(() => {
    window.removeEventListener("keydown", handleKeyDown);
  }, [contacts]);*/

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
      <div className={css.Overlay} onClick={handleBackdropClick}>
        <div className={css.Modal}>
          
          <img src={largeImageURL} alt="No available" width="640" />
        </div>
      </div>,
      modalRoot
    );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

//{this.props.children}