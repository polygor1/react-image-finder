import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ page, onLeaveFeedback }) {
  return (
    <section className={styles.buttonsList}>
      <button
        key={page}
        className={styles.Button}
        onClick={() => onLeaveFeedback(page)}
      >
        Load more
      </button>
    </section>
  );
}

Button.propTypes = {
  page: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
