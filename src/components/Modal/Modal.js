import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import css from "./Modal.module.css"



const modalRoot = document.querySelector('#modal-root');

export default function Modal({currentPicture, onClose}) {
// eslint-disable-next-line
    const onCloseModal = e => {
        if (e.code === "Escape") {
           onClose();
        };
    };

    useEffect(() => {
        window.addEventListener('keydown', () => onCloseModal);

        return () => {
            window.removeEventListener('keydown', () => onCloseModal);
    }}, [onCloseModal]);




    const onCloseModalBackdrop = e => {
        if (e.currentTarget === e.target) {
            onClose();
        };
    };

    return createPortal(
            <div className={css.Overlay} onClick={onCloseModalBackdrop}>
                <div className={css.Modal}>
                    <img src={currentPicture.src} alt={currentPicture.alt} />
                </div>
            </div>, modalRoot
        );
};

Modal.propTypes = {
    currentPicture: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};







    




 



