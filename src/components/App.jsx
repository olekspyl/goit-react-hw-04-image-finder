import React from 'react';
import { useState, useEffect } from 'react';
import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './Gallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';


export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [error, setError] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPicture, setCurrentPicture] = useState({ src: '', alt: '' });
  

  const onFetch = () => {
    if (!query) {
      return;
   }
   const controller = new AbortController();
   const signal = controller.signal;

    try {
      fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=29655541-29ac0a319757ef7d347abf8a2&image_type=photo&orientation=horizontal&per_page=12`, {signal}
      ).then(res => res.json()).then(res => {
          if (res.hits.length === 0) {
           setError(true);
            return;
          }
          setPictures(prevState => [ ...prevState,...res.hits]) 
      })
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      return setLoading(false);
    }
      setLoading(true);
      onFetch();
      // eslint-disable-next-line
  }, [query, page]);

  const onSubmit = query => {
    if (query === '') {
      toast.error('add search word');
      return;
    }

    setError(false);
    setQuery(query);
    setPage(1);
    setPictures([]);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal)
  };

  const onCurrentPicture = currentPicture => {
    setCurrentPicture(currentPicture)
  };


   return (
      <div className={css.App}>
        <Searchbar onSubmit={onSubmit} />
        {error && <p>Ой, як шкода, немає результатів за вашим запитом</p>}
        {pictures.length > 0 && (
          <ImageGallery
            pictures={pictures}
            onShowModal={toggleModal}
            onCurrentPicture={onCurrentPicture}
          />
        )}
        {loading && <Loader />}
        {pictures.length > 0 && <Button onLoadMore={onLoadMore}></Button>}
        {showModal && (
          <Modal
            onClose={toggleModal}
            currentPicture={currentPicture}
          ></Modal>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );

  
};


  // state = {
  //   query: ' ',
  //   page: ' ',
  //   error: null,
  //   pictures: [],
  //   loading: false,
  //   showModal: false,
  //   currentPicture: { src: '', alt: '' },
  // };

  


  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.query !== this.state.query || prevState.page !== this.state.page
  //   ) {
  //     this.setState({ loading: true});
  //     this.onFetch();
  //   }
  // };

//   onFetch = () => {
// const controller = new AbortController();
//   const signal = controller.signal;

//     try {
//       fetch(
//         `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=29655541-29ac0a319757ef7d347abf8a2&image_type=photo&orientation=horizontal&per_page=12`, {signal}
//       ).then(res => res.json()).then(res => {
//           if (res.hits.length === 0) {
//             this.setState({ error: true });
//             return;
//           }
//           this.setState(prevState => {
//             return {
//               pictures: [...prevState.pictures, ...res.hits],
//             };
//           });
//       })
//     } finally {
//       this.setState({ loading: false });
//     }
//   };


  // onSubmit = query => {
  //   if (this.state.query === '') {
  //     toast.error('add search word');
  //     return;
  //   }

  //   this.setState({
  //     query: query,
  //     error: false,
  //     page: 1,
  //     pictures: [],
  //   });
  // };

  // onLoadMore = () => {
  //   this.setState(prevState => {
  //     return {
  //       page: prevState.page + 1,
  //     };
  //   });
  // };

  // toggleModal = () => {
  //   this.setState(state => ({
  //     showModal: !state.showModal,
  //   }));
  // };

  // onCurrentPicture = currentPicture => {
  //   this.setState({
  //     currentPicture,
  //   });
  // };


    // return (
    //   <div className={css.App}>
    //     <Searchbar onSubmit={this.onSubmit} />
    //     {error && <p>Ой, як шкода, немає результатів за вашим запитом</p>}
    //     {pictures.length > 0 && (
    //       <ImageGallery
    //         pictures={pictures}
    //         onShowModal={this.toggleModal}
    //         onCurrentPicture={this.onCurrentPicture}
    //       />
    //     )}
    //     {loading && <Loader />}
    //     {pictures.length > 0 && <Button onLoadMore={this.onLoadMore}></Button>}
    //     {showModal && (
    //       <Modal
    //         onClose={this.toggleModal}
    //         currentPicture={currentPicture}
    //       ></Modal>
    //     )}
    //     <ToastContainer autoClose={3000} />
    //   </div>
    // );

