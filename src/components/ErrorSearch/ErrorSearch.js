import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorSearch.module.css';

export default function ErrorSearch({ message }) {
  return (
    <div className={styles.errorWrapper} role="alert">
      <p>{message}</p>
    </div>
  );
}

ErrorSearch.propTypes = {
  message: PropTypes.string.isRequired,
};
