import styles from './Searchbar.module.css';
import React from 'react';
// import PropTypes from 'prop-types';

const Searchbar = ({ value, onChange }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm}>
      <button type="submit" class="button">
        <span className={styles.SearchFormButton}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Searchbar;
