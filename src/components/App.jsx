import React from "react";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';


import Searchbar from "./Gallery/Searchbar";
import ImageGallery from "./Gallery/ImageGallery";


export class App extends Component {
  state = {
    filter: ' ', 
  }

  onSubmit = (data) => {
 this.setState({
      filter: data,
    });


    if (this.state.filter.trim() === " ") {
      toast.error('add search word');
      return;
    }
  
  }

  render() {
    const {filter } = this.state;

    return (

      
      < div >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery filter={filter} />
        <ToastContainer autoClose={3000 } />
      </div >

    )
  }
} 
