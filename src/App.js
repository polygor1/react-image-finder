import './App.css';

import { Component } from 'react';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import Button from './components/Button';

class App extends Component {
  state = {
    images: [],
    search: '',
    currentPage: 0,
  };

  setPage = page => {
    this.setState(() => ({ currentPage: page + 1 }));
    console.log(this.state.currentPage);
  };

  searchString = data => {
    this.setState({ currentPage: 0, search: data.search });
    console.log(this.state.search);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.searchString} />
        <h1 className="Title">Image finder</h1>
        <ImageGallery images={this.state.images} />
        <Button page={this.state.currentPage} onLeaveFeedback={this.setPage} />
      </div>
    );
  }
}
export default App;
