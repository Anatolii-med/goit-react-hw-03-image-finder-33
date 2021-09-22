import { Component } from 'react';
import { Searchbar } from './Components/Searchbar/Searchbar';

import './App.css';

class App extends Component {
  state = {
    page: 1,
    images: [],
    input: '',
    largeImg: null,
    status: 'idle',
    error: '',
  };
  render() {
    return <Searchbar />;
  }
}

export default App;
