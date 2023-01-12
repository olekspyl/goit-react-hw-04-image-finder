import React from "react";
import css from "./Gallery.module.css"

const ImageGalleryItem = ({picture}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={picture.webformatURL} alt={picture.tags} />
        </li>)
         
}

export default ImageGalleryItem;

