import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorSearch.module.css';

export default function ErrorSearch({ message }) {
  const errorImg = './images/error.png';

  return (
    <div className={styles.errorWrapper} role="alert">
      <p>{message}</p>
      <img src={errorImg} alt="empty" />
    </div>
  );
}

ErrorSearch.propTypes = {
  message: PropTypes.string.isRequired,
};
