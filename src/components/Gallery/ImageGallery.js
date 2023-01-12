import React from "react";
import { Component } from "react";
import { ColorRing } from "react-loader-spinner";
import ImageGalleryItem from "./ImageGalleryItem";


class ImageGallery extends Component {
    state = { 
        pictures: [],
        loading: false,
        error: null,
    }

    componentDidUpdate(prevState, prevProps) {
       

        if (prevState.filter !== this.props.filter) {

            this.setState({ loading: true, pictures: [] });

            fetch(`https://pixabay.com/api/?q=${this.props.filter}&page=1&key=29655541-29ac0a319757ef7d347abf8a2&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => {
                    if (res.ok) {
                     return res.json()
                    }
                    return Promise.reject(new Error(`ой, як жахливенько, не вдається здійснити пошук за ${this.props.filter }`))
                })
                .then(pictures => this.setState({ pictures }))
                .catch(error => this.setState({error}))
                .finally(() => this.setState({ loading: false }))
    }
}

    render() {
        const { loading, pictures, error } = this.state;

        return (
            <ul className="gallery"> 
                {error && <p>{error.message}</p> }
                {!this.props.filter && <p>add search word</p> }
                 {loading && <ColorRing/> }
                 <ImageGalleryItem pictures={pictures} />
            
        </ul>
    )
    }
} 
    


export default ImageGallery;