import React from "react";
import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import css from "./Modal.module.css"



const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.onCloseModal)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onCloseModal)
    };

    onCloseModal = e => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    };

    onCloseModalBackdrop = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };


    render() {
        return createPortal(
            <div className={css.Overlay} onClick={this.onCloseModalBackdrop}>
                <div className={css.Modal}>
                    <img src={this.props.currentPicture.src} alt={this.props.currentPicture.alt} />
                </div>
            </div>, modalRoot
        );
    };
};

export default Modal;

Modal.propTypes = {
    currentPicture: PropTypes.object.isRequired,
};