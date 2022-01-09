import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

import GetList from './GetList';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import ErrorSearch from './ErrorSearch';
import Modal from './Modal';
import Button from './Button';

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    showModal: false,
    modalImgProps: { url: '', alt: '' },
    status: 'idle',
  };

  async componentDidUpdate(prevProps) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.reset();
      this.setState({ status: 'pending' });
      this.fetchImages(nextQuery);
    }
  }

  fetchImages = nextQuery => {
    GetList(nextQuery, this.state.page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          // если ничего не пришло в ответе
          return Promise.reject(new Error('Nothing found'));
        } else {
          console.log('page =', this.state.page); // номер листа в ответе

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            status: 'resolved',
          }));
          this.incrementPage();
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  reset = () => {
    this.setState({ page: 1, images: [] });
  };

  scrollDown = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
  };

  handleLoadBtnClick = async () => {
    const nextQuery = this.props.searchQuery;
    this.fetchImages(nextQuery);
    this.scrollDown();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImgClick = props => {
    this.setState({ modalImgProps: props });
    this.toggleModal();
  };

  render() {
    const { images, error, status, showModal } = this.state;
    const { url, alt } = this.state.modalImgProps;

    if (status === 'idle') {
      return <div></div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorSearch message={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={url} alt={alt} className={styles.ModalImg} />
            </Modal>
          )}
          <ul className={styles.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                url={largeImageURL}
                alt={tags}
                openModal={this.handleImgClick}
              />
            ))}
          </ul>
          <Button onLeaveFeedback={this.handleLoadBtnClick} />
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
