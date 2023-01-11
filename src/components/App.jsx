import React from "react";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from "react-loader-spinner";

import Searchbar from "./Gallery/Searchbar";
import ImageGallery from "./Gallery/ImageGallery";


export class App extends Component {
  state = {
    pictures: [],
    filter: ' ',
    loading: false,
 
  }
  
//   componentDidMount() {
//     this.setState({ loading: true });

//     fetch('https://pixabay.com/api/?q=cat&page=1&key=29655541-29ac0a319757ef7d347abf8a2&image_type=photo&orientation=horizontal&per_page=12')
//       .then(res => res.json())
//       .then(pictures => this.setState({ pictures }))
//       .finally(this.setState({ loading: false }));
// }


  onSubmit = (data) => {
console.log(data)

    if (this.state.filter.trim() === " ") {
      toast.error('add search word');
      return;
    }

    this.setState({
      filter: data,
    });

  }

  render() {
    const { loading, filter } = this.state;

    return (

      
      < div >
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <ColorRing/> }
        {/* {pictures.length > 0 &&} */}
          <ImageGallery filter={filter} />
        <ToastContainer autoClose={3000 } />
      </div >

    )
  }
} 
