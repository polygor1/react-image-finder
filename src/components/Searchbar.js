import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  search: '',
};

export class Searchbar extends Component {
  state = { ...INITIAL_STATE };

  inputId = nanoid();

  handleChange = event => {
    // отображалка для поля ввода
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    // отсылалка данных из полей формы
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    // опустошалка полей ввода
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonText}>Search</span>
          </button>

          <input
            id={this.inputId}
            className={styles.SearchFormInput}
            type="text"
            name="search"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
