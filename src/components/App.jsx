import React from 'react';
import { Component } from 'react';
import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './Gallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

export class App extends Component {
  state = {
    query: ' ',
    page: ' ',
    error: null,
    pictures: [],
    loading: false,
    showModal: false,
    currentPicture: { src: '', alt: '' },
  };

  


  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query || prevState.page !== this.state.page
    ) {
      this.setState({ loading: true, pictures: [] });
      this.onFetch();
    }
  };

  onFetch = () => {
const controller = new AbortController();
  const signal = controller.signal;

    try {
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=29655541-29ac0a319757ef7d347abf8a2&image_type=photo&orientation=horizontal&per_page=12`, {signal}
      ).then(res => res.json()).then(res => {
          if (res.hits.length === 0) {
            this.setState({ error: true });
            return;
          }
          this.setState(prevState => {
            return { pictures: [...prevState.pictures, ...res.hits] };
          });
      })
    } finally {
      this.setState({ loading: false });
    }
  };


  onSubmit = query => {
    if (this.state.query === '') {
      toast.error('add search word');
      return;
    }

    this.setState({
      query: query,
      page: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  onCurrentPicture = currentPicture => {
    this.setState({
      currentPicture,
    });
  };

  render() {
    const { pictures, loading, error, showModal, currentPicture } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>Ой, як шкода, немає результатів за вашим запитом</p>}
        {pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            onShowModal={this.toggleModal}
            onCurrentPicture={this.onCurrentPicture}
          />
        )}
        {loading && <Loader />}
        {pictures.length > 0 && <Button onLoadMore={this.onLoadMore}></Button>}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            currentPicture={currentPicture}
          ></Modal>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
