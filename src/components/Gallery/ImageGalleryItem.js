import React from "react";

const ImageGalleryItem = ({pictures}) => {
    return (
    <>
        {pictures.map((picture) => {
            return (
                 <li key={picture.id} className="gallery-item">
                <img src={picture.webformatURL} alt={picture.largeImageURL} />
            </li>
            )
        })}
            </>
    )
                    
}

export default ImageGalleryItem;

