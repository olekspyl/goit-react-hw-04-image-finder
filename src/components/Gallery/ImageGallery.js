import React from "react";
import PropTypes from 'prop-types';
import css from "./Gallery.module.css"
import ImageGalleryItem from "./ImageGalleryItem";


const ImageGallery = ({ pictures, onShowModal, onCurrentPicture }) => {

    return (
        <ul className={css.ImageGallery}
            onClick={e => {
                onCurrentPicture({
                    src: e.target.getAttribute('large'),
                    alt: e.target.getAttribute('alt'),
                });
            }}>
            {pictures.map((picture) => {
                return (
                    <ImageGalleryItem picture={picture} key={picture.id} onShowModal={onShowModal} />)
            })}
        </ul>
    );
};

export default ImageGallery;

ImageGallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    onShowModal: PropTypes.func.isRequired,
    onCurrentPicture: PropTypes.func.isRequired,
};