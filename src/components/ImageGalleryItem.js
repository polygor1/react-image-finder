import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li key={this.props.id} className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImg}
          src={this.props.url}
          alt={this.props.tags}
        />
      </li>
    );
  }
}
