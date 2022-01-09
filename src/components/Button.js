import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onLeaveFeedback }) {
  return (
    <button
      type="button"
      className={styles.Button}
      onClick={() => onLeaveFeedback()}
    >
      Load more ...
    </button>
  );
}

Button.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
