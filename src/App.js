import './App.css';

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Title">Image finder</h1>
        <>
          <Searchbar onSubmit={this.handleSearchFormSubmit} />
          <ImageGallery searchQuery={this.state} />
          <ToastContainer />
        </>
      </div>
    );
  }
}
