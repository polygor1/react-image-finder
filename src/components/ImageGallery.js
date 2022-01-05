import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.images.map(item => (
          <ImageGalleryItem
            id={item.id}
            url={item.webformatURL}
            tags={item.tags}
          />
        ))}
      </ul>
    );
  }
}
