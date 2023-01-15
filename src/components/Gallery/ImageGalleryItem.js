import React from "react";
import PropTypes from 'prop-types';
import css from "./Gallery.module.css"

const ImageGalleryItem = ({ picture, onShowModal }) => {

    return (
        <li className={css.ImageGalleryItem} onClick={onShowModal}>
            <img className={css.ImageGalleryItemImage}
                src={picture.webformatURL}
                alt={picture.tags}
                large={picture.largeImageURL}
            />
        </li>);
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    picture: PropTypes.object.isRequired,
    onShowModal: PropTypes.func.isRequired,
};
