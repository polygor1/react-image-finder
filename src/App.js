import './App.css';

import { Component } from 'react';

class App extends Component {
  state = {
    images: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
    search: '',
  };

  render() {
    return (
      <div className="App">
        <h1 className="Title">Image finder</h1>
      </div>
    );
  }
}
export default App;
