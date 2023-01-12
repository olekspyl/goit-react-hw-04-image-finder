import React from "react";
import css from "./Gallery.module.css"
import ImageGalleryItem from "./ImageGalleryItem";


const ImageGallery = ({pictures}) => {
        return (
            <ul className={css.ImageGallery}>
                {pictures.map((picture) => {
                    return (
                        <ImageGalleryItem picture={picture} key={picture.id}/>)
                })}
            </ul>
        )
    }

export default ImageGallery;