import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import './Modal.module.css';

const API_KEY = '43883477-d1f56fd35c1c851aa1589f515';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    selectedImage: null,
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    try {
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          key: API_KEY,
          q: query,
          page: page,
          per_page: 12,
          image_type: 'photo',
        },
      });
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        loading: false,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  };

  handleSearchSubmit = query => {
    this.setState({ query, images: [], page: 1 }, this.fetchImages);
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      this.fetchImages
    );
  };

  toggleModal = (selectedImage = null) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImage,
    }));
  };

  render() {
    const { images, loading, showModal, selectedImage } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export { App };
