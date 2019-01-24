import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;
