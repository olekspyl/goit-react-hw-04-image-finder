import React from "react";
import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
    state = { 
        pictures: [],
        filter: ' ',
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.filter !== this.props.filter) {
        console.log('tr')
    }
}

    onDoFilter = () => {
        this.setState({ filter: this.props.filter });
        
    } 

    render() {
        const { pictures } = this.state;

        return (
        <ul className="gallery"> 
            <ImageGalleryItem pictures={pictures} />
        </ul>
    )
    }
} 
    


export default ImageGallery;