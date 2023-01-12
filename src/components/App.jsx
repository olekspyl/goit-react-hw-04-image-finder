import React from "react";
import { Component } from "react";
import css from "./App.module.css";
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from "./Searchbar"
import ImageGallery from "./Gallery/ImageGallery"
import Loader from "./Loader";
import Button from "./Button"



export class App extends Component {
  state = {
    query: ' ',
    page: ' ',
    error: null,
    pictures: [],
    loading: false,
    endSearch: false,
  }

componentDidUpdate(_, prevState) {
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    this.setState({ loading: true, pictures: [] });
    this.onFetch();
    
  } 
  
}

  onFetch = () => {
    try {
      fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=29655541-29ac0a319757ef7d347abf8a2&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(res => {
          if (res.hits.length === 0) {
            this.setState({ error: true });
            return;
          }
          this.setState(prevState => {
            return { pictures: [...prevState.pictures, ...res.hits] };
          });
          if (res.totalHits <= this.state.pictures.length + res.hits.length) {
            this.setState({ endSearch: true });
          }
        })
    } 
      finally {
        this.setState({ loading: false })
      }
}
    
   

  onSubmit = (query) => {
    if (this.state.query === "") {
      toast.error('add search word');
      return;
    }
 this.setState({
   query: query,
   page: 1,
 });
    
    
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return {
          page: prevState.page + 1, 
      }
    })
  }

  render() {
    const {pictures, loading, error } = this.state;

    return (
      < div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
          {error && <p>Ой, як шкода, немає результатів за вашим запитом</p> }
        {pictures.length > 0 && <ImageGallery pictures={pictures} />}
        {loading && <Loader />}
        {pictures.length > 0 && <Button onLoadMore={this.onLoadMore}></Button>}
        <ToastContainer autoClose={3000 } />
      </div >

    )
  }
} 
